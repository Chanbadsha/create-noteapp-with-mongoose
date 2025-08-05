import express, { Application, Request, Response } from 'express'
import { model, Schema } from 'mongoose'
import { notesRouter } from '../controllers/note.controller'
const app: Application = express()

app.use(express.json())


app.use('/notes',notesRouter)



app.get('/', (req: Request, res: Response) => {
    res.send("Welcome To NoteApp Server")
})


export default app