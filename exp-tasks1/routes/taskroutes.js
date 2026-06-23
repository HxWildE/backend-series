
const express = require('express')
const router = express.Router()
const {
    getUsers,
    createUser,
    getUser,
    updateUser,
    delUser
} = require("../controllers/taskcontroller")

router.get("/",
    auth,
    valid,
    getUsers)

router.post("/",
    auth,
    valid,
    createUser)

router.get("/:id",
    auth,
    valid,
    getUser)

router.put("/:id",
    auth,
    valid,
    updateUser)

router.delete("/:id",
    auth,
    valid,
    delUser)

module.exports = taskroutes;