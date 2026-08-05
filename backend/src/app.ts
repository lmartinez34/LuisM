import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/routes"

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());


// Rutas
app.use("/api/auth", authRoutes);



export default app;

