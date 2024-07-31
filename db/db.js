const mongoose = require("mongoose");
require("dotenv").config();

mongoose
    .connect(process.env.connect)
    .then(() => console.log("MongoDB was connected"))
    .catch((err) => console.log(err));
