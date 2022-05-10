const mongoose = require("mongoose");
const validator = require("validator");

const postSchema = new mongoose.Schema({
    // title
    title: {
        type: String,
        required: [true, "Please enter your title"],
    },

    // description
    description: {
        type: String,
        required: [true, "Please eneter description"],
        maxLength: [500, "Your description cannot exceed 500 characters"],
    },

    // blood group
    bloodGroup: {
        type: String,
        required: [true, "Please eneter blood group"],
        enum: {
            values: ["O+", "A+", "B+", "AB+", "O-", "A-", "B-", "AB-"],
            message: "Please select correct Blood Group",
        },
    },

    // type
    type: {
        type: String,
        required: [false, "Please eneter type of problem"],
        enum: {
            values: ["Emergency", "Medium", "Normal"],
            message: "Please select correct type of problem",
        },
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

    // hospital name
    hospital: {
        name: {
            type: String,
            required: [true, "Please enter Hospital name"],
        },
        address: {
            type: String,
            required: [true, "Please enter hospital address"],
        },
        location: {
            type: String,
            required: [false, "Plase eneter hospital google map location link"],
        },
    },

    // case
    case: {
        type: String,
        required: [true, "Please enter type of case"],
    },

    // name
    name: {
        type: String,
        required: [true, "Please enter your name"],
        maxLength: [30, "Your name cannot exceed 30 characters"],
    },

    //email
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
        validate: [validator.isEmail, "Please enter valid email address"],
    },

    // phone
    phone: [
        {
            relation: {
                type: String,
                required: [true, "Please enter relation type"],
                enum: {
                    values: [
                        "Father",
                        "Mother",
                        "Brother",
                        "Sister",
                        "Husband",
                        "Other",
                    ],
                    message: "Please select correct relation type",
                },
            },
            number: {
                type: String,
                required: [true, "Plase enter phone number"],
            },
        },
    ],

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

    // status
    status: {
        type: String,
        default: "Pending",
    },

    // doner
    doner: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: false,
    },

    // likes
    likes: {
        type: [String],
        default: [],
    },

    // comments
    comments: {
        type: [String],
        default: [],
    },

    // blood donate request
    donateRequest: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: "User",
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            phone: {
                type: String,
                required: true,
            },
            blodGroup: {
                type: String,
                required: true,
            },
        },
    ],
    // doner
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },

    // post create time
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("BloodPost", postSchema);
