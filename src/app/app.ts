import express, { Application, Request, Response } from 'express'

import { notesRouter } from '../controllers/note.controller'
import { userRouter } from '../controllers/users.controller'
const app: Application = express()
// Middleware
app.use(express.json())

// router
app.use('/notes', notesRouter)

app.use('/users', userRouter)



app.get('/', (req: Request, res: Response) => {
    res.send("Welcome To NoteApp Server")
})


export default app