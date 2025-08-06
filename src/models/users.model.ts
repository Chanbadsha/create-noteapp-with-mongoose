import { model, Schema } from "mongoose";
import { IUser } from "../interfaces/user.interfaces";

const userSchema = new Schema<IUser>({
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    age: { type: Number, unique: true, required: true },
    email: { type: String, unique: true, required: true, trim: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin', 'moderator'], default: 'user' }
},
    { versionKey: false, timestamps: true })


export const User = model("User", userSchema)