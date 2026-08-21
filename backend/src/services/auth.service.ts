import bcrypt from "bcrypt";
import User from "../models/User";

interface RegisterUserData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const registerUser = async ({
  firstName,
  lastName,
  email,
  password,
}: RegisterUserData) => {
  //Verificar si el usuario existe
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error("El usuario ya existe");
  }

  //Encriptar la contraseña
  const hashedPassword = await bcrypt.hash(password, 10);

  //Crear Usuario
  const newUser = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  return newUser;

};

export const loginUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {

  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Usuario no encontrado");
  }

  const isPasswordValid = await bcrypt.compare(
    password,
    user.password
  );

  if (!isPasswordValid) {
    throw new Error("Contraseña incorrecta");
  }

  return user;

};

