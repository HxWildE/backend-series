const router=require("express").Router();


const auth=
require("../middlewares/auth")


const controller=
require("../controllers/userController")

//ROUTES IN BACKEND
//ARE JUST TO MAP URL TO ACTIONS
//ACTIONS LIKE AUTH VALIDATION AND MAIN ACTION

router.get(
"/users",
auth,
controller.getUsers
)

router.get(
"/users/:id",
auth,
controller.getUser
)

router.post(
"/users",
auth,
controller.createUser
)

module.exports=router;