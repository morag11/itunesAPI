import express from "express";
import { getMedia } from "./media.js";

const router = express.Router();

//establish router
router.get("/search", getMedia);


export default router;