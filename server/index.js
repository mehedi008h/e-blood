const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const connectDatabase = require("./config/database");
const errorMiddleware = require("./middleware/error");

const app = express();
dotenv.config();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());

// connecting to database
connectDatabase();

// import all routes
const auth = require("./routes/auth");
const user = require("./routes/user");

app.use("/api/v1", auth);
app.use("/api/v1", user);

app.use("/", (req, res) => {
    res.send("App is running.");
});

// Middleware to handle error
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});
