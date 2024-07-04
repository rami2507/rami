const app = require("./app");
const mongoose = require("mongoose");

const DB =
  "mongodb+srv://testone:testone@cluster0.3q8xinh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(DB).then(() => console.log("DB connection successful!"));

const port = 3000;

app.listen(port, () => {
  console.log("server running on port 3000");
});
