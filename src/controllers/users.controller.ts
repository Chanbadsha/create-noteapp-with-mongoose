import express, { Request, Response } from 'express'
import { User } from '../models/users.model'
import { z } from 'zod'
export const userRouter = express.Router()

// User create validation using Zod

const userZodSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    age: z.number(),
    email: z.email(),
    password: z.string().min(6).describe("Password should be 6 character long"),
    role: z.string().optional()

})

// Create User
userRouter.post('/create-user', async (req: Request, res: Response) => {
    try {
        const userInfo = await userZodSchema.parseAsync(req.body)

        const user = await User.create(userInfo)

        res.status(201).json({
            success: true,
            message: "A user created successfully",
            note: user
        })
    } catch (error: any) {
        console.log(error.message,"from zod"),
            res.status(400).json({
                success: false,
                message: "A user created failed",
                error
            })
    }
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
