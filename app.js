const mongoose = require('mongoose');

const express = require('express');
const app = express();

const db = require('./config/keys').mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

app.get("/", (req, res) => res.send("Testing mongoose."));
app.use("/api/users", users);
app.use("/api/tweets", tweets);