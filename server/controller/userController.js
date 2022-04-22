const User = require("../models/user");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");
const cloudinary = require("cloudinary");

const Moment = require("moment");
const { extendMoment } = require("moment-range");

const moment = extendMoment(Moment);

// Get currently logged in user details   =>   /api/v1/me
exports.getUserProfile = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user.id);

    // calculate time diff
    const timeDiffernece = moment().utcOffset() / 60;

    const checkInDate = moment(user.lastDonateDate).add(
        timeDiffernece,
        "hours"
    );

    const today = new Date();

    const range = moment.range(moment(checkInDate), moment(today));

    const dates = Array.from(range.by("day"));

    let remaning = dates.length;

    user.remaning = remaning;

    res.status(200).json({
        success: true,
        user,
    });
});

// Update / Change password   =>  /api/v1/password/update
exports.updatePassword = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user.id).select("+password");

    // Check previous user password
    const isMatched = await user.comparePassword(req.body.oldPassword);
    if (!isMatched) {
        return next(new ErrorHandler("Old password is incorrect"));
    }

    user.password = req.body.password;
    await user.save();

    sendToken(user, 200, res);
});

// Update user profile   =>   /api/v1/me/update
exports.updateProfile = catchAsyncErrors(async (req, res, next) => {
    const newUserData = {
        name: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        },
        phone: req.body.phone,
        presentAddress: {
            region: req.body.paRegion,
            city: req.body.paCity,
            area: req.body.paArea,
            address: req.body.paAddress,
        },
        permanentAddress: {
            region: req.body.psRegion,
            city: req.body.psCity,
            area: req.body.psArea,
            address: req.body.psAddress,
        },
        bio: req.body.bio,
        bod: req.body.bod,
        lastDonateDate: req.body.lastDonateDate,
        work: req.body.work,
        gender: req.body.gender,
        bloodGroup: req.body.bloodGroup,
    };

    // Update avatar
    if (req.body.avatar !== "") {
        const user = await User.findById(req.user.id);

        const image_id = user.avatar.public_id;
        const res = await cloudinary.v2.uploader.destroy(image_id);

        const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
            folder: "eblood/avatars",
            width: 150,
            crop: "scale",
        });

        newUserData.avatar = {
            public_id: result.public_id,
            url: result.secure_url,
        };
    }

    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    res.status(200).json({
        success: true,
    });
});

// Get all users   =>   /api/v1/users
exports.allUsers = catchAsyncErrors(async (req, res, next) => {
    const users = await User.find();

    res.status(200).json({
        success: true,
        users,
    });
});

// Get user details   =>   /api/v1/user/:id
exports.getUserDetails = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        return next(
            new ErrorHandler(`User does not found with id: ${req.params.id}`)
        );
    }

    res.status(200).json({
        success: true,
        user,
    });
});
