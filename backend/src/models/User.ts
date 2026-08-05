import { Schema, model } from "mongoose";


const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true
    },

    lastName: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: [true, "El correo electrónico es obligatorio"],
      unique: true,
      lowercase: true,
      trim: true
    },

    password: {
      type: String,
      required: [true, "La contraseña es obligatoria"],
      minlength: [6, "La contraseña debe tener al menos 6 caracteres"]
    },

    role: {
      type: String,
      enum: ["customer", "admin"],
      default: "customer"
    }

  },

  {
    timestamps: true
  }
);

const User = model("User", UserSchema);

export default User;