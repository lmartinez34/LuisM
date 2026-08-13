import { Request, Response } from "express";
import { registerUser } from "../services/auth.service";
import { loginUser } from "../services/auth.service";
import { generateToken } from "../utils/jwt";

export const register = async (req: Request, res: Response) => {

  try {

    const user = await registerUser(req.body);

    res.status(201).json({
      success: true,
      message: "Usuario registrado exitosamente",
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role
      }
    });

  } catch (error: any) {

    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

export const login = async (req: Request, res: Response) => {

  try {

    const user = await loginUser(req.body);
    const token = generateToken(
      user._id.toString(),
      user.role
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000 // 1 day

    });

    res.status(200).json({
      success: true,
      message: "Usuario logueado exitosamente",
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role
      }
    });

  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};