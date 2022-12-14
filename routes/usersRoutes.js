import express from "express";
import {
  getAllUsers,
  getSingleUser,
  updateUser,
  updateUserPassword,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

router.route("/").get(getAllUsers);
router
  .route("/:id")
  .get(getSingleUser)
  .patch(updateUser)
  .patch(updateUserPassword)
  .delete(deleteUser);

export default router;
