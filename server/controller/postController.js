const BloodPost = require("../models/post");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.createPost = catchAsyncErrors(async (req, res, next) => {
    const {} = req.body;
});
