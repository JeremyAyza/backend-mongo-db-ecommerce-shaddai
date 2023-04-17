const { Types: {ObjectId} } = require("mongoose");
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../../config');
const User = require("../../models/User");

module.exports = async () =>{
  const normalUser = {
    _id: new ObjectId(),
    name: "Normal User Name",
    lastname: "Normal User Lastname",
    email: "email@normal.com",
    password: "contadeaf",
    role: 0,
  };
  const adminUser = {
    _id: new ObjectId(),
    name: "Admin User Name",
    lastname: "Admin User Lastname",
    email: "email@Admin.com",
    password: "contadeaf",
    role: 1,
  };
  const bloquedUser = {
    _id: new ObjectId(),
    name: "Bloqued User Name",
    lastname: "Bloqued User Lastname",
    email: "email@Bloqued.com",
    password: "contadeaf",
    role: 3,
  };
  const payload = (user)=>{
    return {user: {id: user._id}};
  }
  await User.insertMany([adminUser, bloquedUser, normalUser]);
  return {
    admin: jwt.sign(payload(adminUser), JWT_SECRET, {expiresIn: "5d"}),
    normal: jwt.sign(payload(normalUser), JWT_SECRET, {expiresIn: "5d"}),
    bloqued: jwt.sign(payload(bloquedUser), JWT_SECRET, {expiresIn: "5d"}),
    no_exists: jwt.sign({user: {id: (new ObjectId()).toString()}}, JWT_SECRET, {expiresIn: "5D"})
  }
}