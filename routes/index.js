var express = require('express');
var router = express.Router();
const userModel = require("./users");

router.get("/", function(req, res){
  req.session.user = "JohnDoe";
  res.render("index");
});

router.get("/getSession", function(req, res){
  res.send(req.session.user);
});


// router.get("/create", function(req, res){
//   const newUser = userModel({
//     user: "JohnDoe",
//     email: "john.doe@example.com",
//     name: "John Doe",
//     age: 21
//   });
//   res.send(newUser );
// });

// router.get("/allUsers",  async function(req, res){
//   let allUsers = await userModel.findOne({user: "JohnDoe"});
//   res.send(allUsers);
// });

// router.get("/delete", async function(req, res){
//   let deletedUser = await userModel.findOneAndDelete({user: "JohnDoe"});
//   res.send(deletedUser);
// });

module.exports = router;
