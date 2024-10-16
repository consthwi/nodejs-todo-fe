const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index");

const app = express();
app.use(bodyParser.json());

// app에 항상 router세팅... 그래서 exports하는거
app.use("/api", indexRouter);

const mongoURI = `mongodb://localhost:27017/todo-demo`;
mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => {
    console.log("mongoose connected");
  })
  .catch((err) => {
    console.log("db connection failed", err);
  });

app.listen(5000, () => {
  console.log("server on 5000");
});
