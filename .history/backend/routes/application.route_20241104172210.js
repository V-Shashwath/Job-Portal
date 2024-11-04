import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();
router.route("/apply/:id").get(isAuthenticated,applyJob) ;
router.route("/get").get(isAuthenticated,getAppliedJobs) ;
router.route("/:id/applicants").get(isAuthenticated,getAppl) ;
router.route("/apply/:id").get(isAuthenticated,applyJob) ;


export default router;