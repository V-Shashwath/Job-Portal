import express from"express";

import isAuthenticated from "../middlewares/isAuthenticated.js";
import {postJob} from "../controllers"

const router = express.Router();

router.route("/post").post(isAuthenticated,postJob);

export default router;
