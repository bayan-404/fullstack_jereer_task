import  {Router}  from "express";
import postMedia from "../controllers/posts/postMedia";
import express from "express";

const router: Router = express.Router()

router.post("/api/upload", postMedia)

export default router;