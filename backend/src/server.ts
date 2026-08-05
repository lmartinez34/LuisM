import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./config/database";

import app from "./app";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`🚀 Servidor ejecutándose en el puerto ${PORT}`);
  });
};

startServer();