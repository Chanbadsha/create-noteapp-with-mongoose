import express, { Request, Response } from 'express'
import { User } from '../models/users.model'

export const userRouter = express.Router()

// Create User
userRouter.post('/create-user', async (req: Request, res: Response) => {
    const userInfo = req.body

    const user = await User.create(userInfo)

    res.status(201).json({
        success: true,
        message: "A user created successfully",
        note: user
    })
})

// Get al user

userRouter.get('/', async (req: Request, res: Response) => {

    const users = await User.find()
    res.status(201).json({
        success: true,
        message: "All users show successfully",
        users
    })
})


// Get Single User
userRouter.get('/:email', async (req: Request, res: Response) => {
    const userMail = req.params.email

    const user = await User.findOne({ email: userMail })
    res.status(201).json({
        success: true,
        message: "Single user show successfully",
        user
    })
})


// Delete User
userRouter.delete('/delete-user/:email', async (req: Request, res: Response) => {
    const userMail = req.params.email

    const user = await User.findOneAndDelete({ email: userMail })
    res.status(201).json({
        success: true,
        message: "Single user delete successfully",
        user
    })
})

// Update Single User
userRouter.patch('/update-user/:email', async (req: Request, res: Response) => {
    const userMail = req.params.email
    const updateUserInfo = req.body

    const updateUser = await User.findOneAndUpdate({ email: userMail }, updateUserInfo, { new: true })
    res.status(201).json({
        success: true,
        message: "Single user update successfully",
        updateUser
    })
})
