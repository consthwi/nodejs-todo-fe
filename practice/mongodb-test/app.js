const { MongoClient } = require("mongodb");
const uri = `mongodb://localhost:27017`;
const client = new MongoClient(uri);

// 클라이언트 -> 데이터베이스 -> 컬렉션

async function run() {
  const database = client.db("mongo-test");
  const users = database.collection("users");
  const students = database.collection("students");

  // const insertResult = await users.insertOne({
  //   item: "canvas",
  //   qty: 100,
  //   tags: ["cotton"],
  //   size: { h: 28, w: 35.5, uom: "cm" },
  // });
  // console.log("iii", insertResult);

  // const insertResult = await users.insertMany([
  //   {
  //     item: "journal",
  //     qty: 25,
  //     tags: ["blank", "red"],
  //     size: { h: 14, w: 21, uom: "cm" },
  //   },
  //   {
  //     item: "mat",
  //     qty: 85,
  //     tags: ["gray"],
  //     size: { h: 27.9, w: 35.5, uom: "cm" },
  //   },
  //   {
  //     item: "mousepad",
  //     qty: 25,
  //     tags: ["gel", "blue"],
  //     size: { h: 19, w: 22.85, uom: "cm" },
  //   },
  // ]);

  // const findAllResult = await users.find({}).toArray();
  // console.log("fff", findAllResult);

  // const createResult = await users.insertMany([
  //   {
  //     item: "journal",
  //     qty: 25,
  //     size: { h: 14, w: 21, uom: "cm" },
  //     status: "A",
  //   },
  //   {
  //     item: "notebook",
  //     qty: 50,
  //     size: { h: 8.5, w: 11, uom: "in" },
  //     status: "A",
  //   },
  //   {
  //     item: "paper",
  //     qty: 100,
  //     size: { h: 8.5, w: 11, uom: "in" },
  //     status: "D",
  //   },
  //   {
  //     item: "planner",
  //     qty: 75,
  //     size: { h: 22.85, w: 30, uom: "cm" },
  //     status: "D",
  //   },
  //   {
  //     item: "postcard",
  //     qty: 45,
  //     size: { h: 10, w: 15.25, uom: "cm" },
  //     status: "A",
  //   },
  // ]);
  // console.log("ccc", createResult);

  // find( { field } )
  // find( { operator : { } } )
  // find( { $or: [{조건A}, {조건B}, ...] } )
  // find( {value: {$in: []}} )

  // const findResult = await users.find({ status: "D" }).toArray();
  // console.log("fff", findResult);

  // const findResult = await users
  //   .find({
  //     status: "A",
  //     qty: 50,
  //   })
  //   .toArray();
  // console.log("fff", findResult);

  // const findResult = await users
  //   .find({
  //     $or: [{ status: "A" }, { status: "B" }],
  //   })
  //   .toArray();
  // console.log("fff", findResult);

  // const findResult = await users
  //   .find({
  //     status: { $in: ["A", "D"] },
  //   })
  //   .toArray();
  // console.log("fff", findResult);

  // const findResult = await users
  //   .find({
  //     status: "A",
  //     qty: { $lt: 30 },
  //   })
  //   .toArray();
  // console.log("fff", findResult);

  // const findResult = await users
  //   .find({
  //     $or: [{ status: "A" }, { qty: { $lt: 30 } }],
  //   })
  //   .toArray();
  // console.log("fff", findResult);

  // const findResult = await users
  //   // .find({
  //   //   size: {
  //   //     uom: "in",
  //   //   },
  //   // })
  //   .find({
  //     "size.uom": "in",
  //   })
  //   .toArray();
  // console.log("fff", findResult);

  // const findResult = await users
  //   .find({
  //     "size.h": { $gt: 10 },
  //   })
  //   .toArray();

  // console.log("fff", findResult);

  /* -------------------------------------- */

  // const insertResult = await students.insertMany([
  //   {
  //     _id: 1,
  //     test1: 95,
  //     test2: 92,
  //     test3: 90,
  //     modified: new Date("01/05/2020"),
  //   },
  //   {
  //     _id: 2,
  //     test1: 98,
  //     test2: 100,
  //     test3: 102,
  //     modified: new Date("01/05/2020"),
  //   },
  //   { _id: 3, test1: 95, test2: 110, modified: new Date("01/04/2020") },
  // ]);
  // console.log("fff", insertResult);

  // const updateResult = await students.updateOne(
  //   { _id: 3 },
  //   { $set: { test3: 98 } }
  // );
  // console.log("uuu", updateResult);

  // const updateResult = await students.updateMany(
  //   {}, //모든 문서를 선택
  //   { $set: { test1: 0, status: "modified" } }
  // );
  // console.log("uuu", updateResult);

  // const deleteResult = await students.deleteOne({ test2: 92 });
  // console.log("ddd", deleteResult);

  const deleteResult = await students.deleteMany({ test1: 0 });
  console.log("ddd", deleteResult);
}

run();
