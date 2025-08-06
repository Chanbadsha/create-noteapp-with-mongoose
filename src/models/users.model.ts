import { model, Schema } from "mongoose";
import { IAddress, IUser } from "../interfaces/user.interfaces";

const addressSchema = new Schema<IAddress>({
    village: String,
    city: String,
    zip: Number,
  

})

const userSchema = new Schema<IUser>({
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    age: { type: Number, required: true },
    email: { type: String, unique: true, required: true, trim: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin', 'moderator'], default: 'user' },
    address: addressSchema
},
    { versionKey: false, timestamps: true })


export const User = model("User", userSchema)