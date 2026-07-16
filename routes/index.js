var express = require('express');
var router = express.Router();
const userModel = require("./users");

// Creating a session :

// router.get("/", function(req, res){
//   req.session.ban = true;
//   res.render("index");
// });

// checking session variable :
// router.get("/getSession", function(req, res){
//   if(req.session.ban){
//     res.send("you are banned");
//   };
// });


// create a session variable called ban and set it to true. Then create a route that checks if the session variable is true and if it is, send a message saying "you are banned".

// router.get("/", function(req, res){
//   req.session.ban = true;
//   res.render("index");
// });

// router.get("/getSession", function(req, res){
//   if(req.session.ban){
//     res.send("you are banned");
//   }
//   else{
//     res.send("you are not banned");
//   };
// });


// router.get("/deleteSession", function(req, res){
//   req.session.destroy(function(err){
//     if(err){
//       console.log(err);
//     }
//     res.send("Session deleted");
//   });
// });


// Creating Cookies : 
router.get("/", function(req, res){
  res.cookie("username", "JohnDoe");
  res.render("index");
});

// Reading Cookies :
router.get("/cookies", function(req, res){
  res.send("Cookie value: " + req.cookies.username);
});

// Deleting Cookies :
router.get("/deleteCookies", function(req, res){
  res.clearCookie("username");
  res.send("Cookie deleted");
});



// Mongoose CRUD operations :

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
