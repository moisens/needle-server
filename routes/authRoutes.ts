import express from "express";
const router = express.Router();
import controllerauth from "../controllers/authController.js";




router.route("/register").post(controllerauth.register);
router.route("/login").post(controllerauth.login);


export default {
  router
}

