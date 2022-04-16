const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
    // name
    name: {
        firstName: {
            type: String,
            required: [true, "Please enter your first name"],
            maxLength: [15, "Your First name cannot exceed 15 characters"],
        },
        lastName: {
            type: String,
            required: [true, "Please enter your last name"],
            maxLength: [15, "Your Last name cannot exceed 15 characters"],
        },
    },

    // username
    username: {
        type: String,
        required: [true, "Please enter your username"],
        unique: true,
    },

    //email
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
        validate: [validator.isEmail, "Please enter valid email address"],
    },

    // phone
    phone: {
        type: String,
        required: [false, "Please enter your phone number"],
        maxLength: [200, "Your phone number cannot exceed 200 characters"],
    },

    // present address
    presentAddress: {
        region: {
            type: String,
            required: [false, "Please enter your Region"],
            maxLength: [20, "Your region cannot exceed 20 characters"],
        },
        city: {
            type: String,
            required: [false, "Please enter your City"],
            maxLength: [20, "Your city cannot exceed 20 characters"],
        },
        area: {
            type: String,
            required: [false, "Please enter your Area"],
            maxLength: [20, "Your area cannot exceed 20 characters"],
        },
        address: {
            type: String,
            required: [false, "Please enter your address"],
            maxLength: [200, "Your address cannot exceed 200 characters"],
        },
    },

    // permanent address
    permanentAddress: {
        region: {
            type: String,
            required: [false, "Please enter your Region"],
            maxLength: [20, "Your region cannot exceed 20 characters"],
        },
        city: {
            type: String,
            required: [false, "Please enter your City"],
            maxLength: [20, "Your city cannot exceed 20 characters"],
        },
        area: {
            type: String,
            required: [false, "Please enter your Area"],
            maxLength: [20, "Your area cannot exceed 20 characters"],
        },
        address: {
            type: String,
            required: [false, "Please enter your address"],
            maxLength: [200, "Your address cannot exceed 200 characters"],
        },
    },

    // password
    password: {
        type: String,
        required: [true, "Please enter your password"],
        minlength: [6, "Your password must be longer than 6 characters"],
        select: false,
    },

    // avatar
    avatar: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },

    // bio
    bio: {
        type: String,
        required: [false, "Please enter your Bio"],
        maxLength: [500, "Your Bio cannot exceed 500 characters"],
    },

    // birth of date
    bod: {
        type: Date,
        required: [false, "Please enter your Birth of date"],
    },

    // work
    work: {
        type: String,
        required: [false, "Please enter what you do"],
        maxLength: [100, "Your work cannot exceed 100 characters"],
    },

    // gender
    gender: {
        type: String,
        required: [false, "Please enter your gender"],
        enum: {
            values: ["Male", "Female", "Other"],
            message: "Please select correct gender option",
        },
    },

    // bloodgroup
    bloodGroup: {
        type: String,
        required: [false, "Please enter your Blood Group"],
        enum: {
            values: ["O+", "A+", "B+", "AB+", "O-", "A-", "B-", "AB-"],
            message: "Please select correct Blood Group",
        },
    },

    // enable for donate blood
    enable: {
        type: Boolean,
        required: [false, "Please enable if you are avaliable to donate Blood"],
    },

    // last blood donate date
    lastDonateDate: {
        type: Date,
        required: [false, "Please enter your Last Blood Donate date"],
    },

    // reward
    reward: {
        type: Number,
        required: false,
    },

    // social media link
    socialMedia: [
        {
            name: {
                type: String,
                required: [true, "Please enter your social media name"],
            },
            link: {
                type: String,
                required: [true, "Please enter your social media link"],
            },
        },
    ],

    // blood donate list
    donateList: [
        {
            post: {
                type: mongoose.Schema.ObjectId,
                ref: "Post",
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            user: {
                type: mongoose.Schema.ObjectId,
                required: true,
            },
        },
    ],

    // role
    role: {
        type: String,
        default: "user",
    },

    // account create time
    createdAt: {
        type: Date,
        default: Date.now,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
});

// Encrypting password before saving user
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }

    this.password = await bcrypt.hash(this.password, 10);
});

// Compare user password
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// Return JWT token
userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_TIME,
    });
};

// Generate password reset token
userSchema.methods.getResetPasswordToken = function () {
    // Generate token
    const resetToken = crypto.randomBytes(20).toString("hex");

    // Hash and set to resetPasswordToken
    this.resetPasswordToken = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex");

    // Set token expire time
    this.resetPasswordExpire = Date.now() + 30 * 60 * 1000;

    return resetToken;
};

module.exports = mongoose.model("User", userSchema);
