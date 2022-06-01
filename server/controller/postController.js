const BloodPost = require("../models/post");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// create blood post
exports.createPost = catchAsyncErrors(async (req, res, next) => {
    const postData = {
        title: req.body.title,
        description: req.body.description,
        bloodGroup: req.body.bloodGroup,
        type: req.body.type,
        gender: req.body.gender,
        case: req.body.cases,
        hospital: {
            name: req.body.hospitalName,
            address: req.body.hospitalAddress,
            location: req.body.hospitalLocation,
        },
        name: req.body.name,
        email: req.body.email,
        phone: [
            {
                relation: req.body.relation,
                number: req.body.phone,
            },
        ],
        presentAddress: {
            region: req.body.region,
            city: req.body.city,
            area: req.body.area,
            address: req.body.address,
        },
        user: req.user.id,
    };

    const post = await BloodPost.create(postData);

    res.status(201).json({
        success: true,
        post,
    });
});

// get all blood post
exports.getBloodPost = catchAsyncErrors(async (req, res, next) => {
    const bloodPost = await BloodPost.find();

    res.status(200).json({
        bloodPost,
    });
});

exports.likePost = catchAsyncErrors(async (req, res, next) => {
    let post = await BloodPost.findById(req.params.id);

    if (!post) {
        return next(new ErrorHandler("Post not found", 404));
    }

    console.log(req.user._id);

    const index = post.likes.findIndex((id) => id === String(req.user._id));

    console.log(index);

    if (index === -1) {
        post.likes.push(req.user._id);
    } else {
        post.likes = post.likes.filter((id) => id !== String(req.user._id));
    }

    post = await BloodPost.findByIdAndUpdate(req.params.id, post, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    res.status(200).json({
        success: true,
        post,
    });
});
