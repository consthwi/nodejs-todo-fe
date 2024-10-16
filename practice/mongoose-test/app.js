const mongoose = require("mongoose");
// 1. mongoose 설치 및 연결
// 2. mongoose.connect("mongoDB uri") <- mongoDB랑 연결
// 3. schema 생성 (데이터베이스에 저장될 데이터의 구조)
// 4. schema -> model 생성
// model은 정의된 Schema를 기반으로 MongoDB 컬렉션에 대한 인터페이스를 제공합니다. 여기서는 User 모델을 생성해 MongoDB의 users 컬렉션과 연결합니다
// ...모델명 => 소문자복수형으로 전환하여 MongoDB컬렉션에 추가

mongoose.connect("mongodb://localhost:27017/mongoose-test");
const validator = require("validator");

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        if (!validator.isEmail(value)) {
          throw new Error("This is not an Email");
        }
      },
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    default: 0,
  },
});

const User = mongoose.model("User", userSchema);

// const newUser = new User({
//   name: "김철수",
//   email: "kimcs@gmail.com",
//   password: "   abcde",
//   // age: 25,
// });

// // insert Data
// newUser.save().then((value) => {
//   console.log("value is:", value);
// });

// query Data
User.find({
  name: "김철수",
})
  .select("name -_id")
  .then((value) => console.log("all data", value));
