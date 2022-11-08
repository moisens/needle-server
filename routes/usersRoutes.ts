import express from "express";
import {
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

router.route("/").get(getAllUsers);
router.route("/:id").get(getSingleUser).patch(updateUser).delete(deleteUser);


export default router;