import express from"express";

import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.route("/post")postMessage(isAuthenticated);

export default router;
