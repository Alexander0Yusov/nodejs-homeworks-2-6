const mongoose = require("mongoose");
const app = require("./app");

const { DB_HOST, PORT = 3000 } = process.env;

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
    console.log("Database connection successful");
  })
  .catch((er) => {
    console.log(er.message);
    process.exit(1);
  });

// https://nodejs-homeworks-2-6.onrender.com
