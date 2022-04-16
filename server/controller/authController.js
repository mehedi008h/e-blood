const User = require("../models/user");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const validator = require("validator");

const sendEmail = require("../utils/sendEmail");
const sendToken = require("../utils/jwtToken");

// Register a user   => /api/v1/register
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    const { firstName, lastName, username, email, password } = req.body;

    const user = {
        name: {
            firstName,
            lastName,
        },
        username,
        email,
        password,
        avatar: {
            public_id: "result.public_id",
            url: "result.secure_url",
        },
    };

    const token = createActivationToken(user);

    // Create reset password url
    const resetUrl = `http://localhost:5000/activation/${token}`;

    const message = `<div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
                        <h2 style="text-align: center; text-transform: uppercase;color: teal;">Welcome to the MERN Auth app.</h2>
                        <p>Congratulations! You're almost set to start using E-Blood Bank app.
                            Just click the button below to validate your email address.
                        </p>
                        
                        <a href=${resetUrl} style="background: crimson; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">Active</a>

                        <p>If the button doesn't work for any reason, you can also click on the link below:</p>

                        <div style="display: flex; flex-wrap: wrap;">${resetUrl}</div>
                        <p>If you have not requested this email, then ignore it.</p>
                    </div>`;

    try {
        await sendEmail({
            email: user.email,
            subject: "E-Blood Bank Email Activation",
            message,
        });

        res.status(200).json({
            success: true,
            message: `Email sent to: ${user.email}`,
        });
    } catch (error) {
        await user.save({ validateBeforeSave: false });

        return next(new ErrorHandler(error.message, 500));
    }
});

// Active user account   => /api/v1/activation
exports.activeEmail = catchAsyncErrors(async (req, res, next) => {
    const { activation_token } = req.body;

    // verify token & get user
    const user = jwt.verify(activation_token, process.env.JWT_SECRET);

    const { name, username, email, password, avatar } = user;

    const newUser = await User.create({
        name: {
            firstName: name.firstName,
            lastName: name.lastName,
        },
        username,
        email,
        password,
        avatar: {
            public_id: avatar.public_id,
            url: avatar.url,
        },
    });
    sendToken(newUser, 200, res);
});

// Login User  =>  /api/v1/login
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const { emailOrUsername, password } = req.body;

    // Checks if email and password is entered by user
    if (!emailOrUsername || !password) {
        return next(
            new ErrorHandler("Please enter email or username & password", 400)
        );
    }

    // check login type is email or username
    let loginType = validator.isEmail(emailOrUsername) ? "Email" : "Username";

    // Finding user in database
    const user = await User.findOne({ emailOrUsername }).select("+password");

    if (!user) {
        return next(new ErrorHandler(`Invalid ${loginType} or Password`, 401));
    }

    // Checks if password is correct or not
    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
        return next(new ErrorHandler(`Invalid ${loginType} or Password`, 401));
    }

    sendToken(user, 200, res);
});

// Forgot Password   =>  /api/v1/password/forgot
exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        return next(new ErrorHandler("User not found with this email", 404));
    }

    // Get reset token
    const resetToken = user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false });

    // Create reset password url
    const resetUrl = `https://localhost:5000/password/reset/${resetToken}`;

    const message = `<div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
                        <h2 style="text-align: center; text-transform: uppercase;color: teal;">Welcome to the MERN Auth app.</h2>
                        <p>
                            Just click the button below to reset your password.
                        </p>
                        
                        <a href=${resetUrl} style="background: crimson; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">Reset Password</a>

                        <p>If the button doesn't work for any reason, you can also click on the link below:</p>

                        <div>${resetUrl}</div>
                        <p>If you have not requested this email, then ignore it.</p>
                    </div>`;

    try {
        await sendEmail({
            email: user.email,
            subject: "E-Blood Bank Password Recovery",
            message,
        });

        res.status(200).json({
            success: true,
            message: `Email sent to: ${user.email}`,
        });
    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({ validateBeforeSave: false });

        return next(new ErrorHandler(error.message, 500));
    }
});

// Reset Password   =>  /api/v1/password/reset/:token
exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
    // Hash URL token
    const resetPasswordToken = crypto
        .createHash("sha256")
        .update(req.params.token)
        .digest("hex");

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
        return next(
            new ErrorHandler(
                "Password reset token is invalid or has been expired",
                400
            )
        );
    }

    if (req.body.password !== req.body.confirmPassword) {
        return next(new ErrorHandler("Password does not match", 400));
    }

    // Setup new password
    user.password = req.body.password;

    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    sendToken(user, 200, res);
});

// Logout user   =>   /api/v1/logout
exports.logout = catchAsyncErrors(async (req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    });

    res.status(200).json({
        success: true,
        message: "Logged out",
    });
});

// acount active token
const createActivationToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_TIME,
    });
};
