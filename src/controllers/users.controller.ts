import express, { Request, Response } from 'express'
import { User } from '../models/users.model'

export const userRouter = express.Router()

userRouter.post('/create-user', async (req: Request, res: Response) => {
    const userInfo = req.body
    console.log(userInfo)
    const users = await User.create(userInfo)

    res.status(201).json({
        success: true,
        message: "A user created successfully",
        note: users
    })
})