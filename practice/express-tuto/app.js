const express = require("express");
const app = express();

const token = "sdfsdf";

// get... routing
// 주소창은 get만 지원한다.
// app.get("/", (req, res) => {
//   res.send("hello noona world");
// });

// app.get("/about", (req, res) => {
//   res.send("this is all about express");
// });

const checkAuth = (req, res, next) => {
  console.log("He has admin permission");
  next();
};

const checkToken = (req, res, next) => {
  if (token) {
    next();
  } else {
    res.send("You dont't have token"); // return과 비슷
  }
};

const getUser = (req, res) => {
  console.log("here is user info");
  res.send("here is user info");
};

//                미들웨어
app.get("/users", checkAuth, checkToken, getUser);

app.listen(5000, () => {
  console.log("server is on 5000");
});
