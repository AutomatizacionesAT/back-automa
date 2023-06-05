import { Router } from "express";
import {getTest} from "../controllers/test.controllers.js"
const router = Router()

router.get('/test', getTest)

export default router