import express from"express";

import isAuthenticated from "../middlewares/isAuthenticated.js";
import {postJob} from "../controllers/job.controller.js";
import { getAdminJobs, getAllJobs } from "../controller/job.controller.js";

const router = express.Router();

router.route("/post").post(isAuthenticated,postJob);
router.route("/get").post(isAuthenticated,getAllJobs);
router.route("/getadminjobs").post(isAuthenticated,getAdminJobs);
router.route("/get/:id").post(isAuthenticated,postJob);

export default router;
