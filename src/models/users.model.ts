import { model, Schema } from "mongoose";

const userSchema = new Schema<IUser>({
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, trim: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin', 'moderator'], default: 'user' }
},
    { versionKey: false, timestamps: true })


export const User = model("User", userSchema)