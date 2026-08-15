import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken'

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "No estas autenticado"
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    );

    if (typeof decoded === "string") {
      return res.status(401).json({
        success: false,
        message: "Token invalido"
      });
    }

    req.user = decoded as {
      id: string;
      role: string;
    };

    next();

  } catch (error) {

    return res.status(401).json({
      success: false,
      message: "Token invalido"
    });

  }
};