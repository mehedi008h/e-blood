const User = require("../models/user");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// Get currently logged in user details   =>   /api/v1/me
exports.getUserProfile = catchAsyncErrors(async (req, res, next) => {
    console.log(req.user);
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        user,
    });
});
