import { Router } from "express";
import { register, login, getUserProfile } from "../controllers/auth.controllers";
import {authMiddleware} from "../middleware/auth.middleware";

const router = Router();

//Registro
router.post("/register", register);


//Login
router.post("/login", login);

//Perfil de usuario
router.get("/profile", authMiddleware ,getUserProfile);

export default router;