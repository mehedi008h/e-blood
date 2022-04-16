const User = require("../models/user");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils/sendEmail");

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

                        <div>${resetUrl}</div>
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
    res.status(200).json({
        success: true,
        newUser,
    });
});

// acount active token
const createActivationToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_TIME,
    });
};
