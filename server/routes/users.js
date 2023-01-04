import express from "express"
import {getUser,getUserFriends,addRemoveFriend} from "../Controllers/users.js"
import {verifyToken} from "../middelwares/auth"


const router = express.Router()

router.get("/:id",verifyToken,getUser)
router.get("/:id/friends",verifyToken,getUserFriends)
router.get("/:id/:friendId",verifyToken,addRemoveFriend)

export default router;