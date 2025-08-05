import express, { Application, Request, Response } from 'express'
import { model, Schema } from 'mongoose'
const app: Application = express()




// Create schema for all notes
const noteSchema = new Schema({
    title: String,
    content: String
})

const Note = model("Note", noteSchema)


app.post('/create-note', async (req: Request, res: Response) => {
    const myNote = new Note({
        title: 'I am learning Mongoose',
        content: "This is learning process of mongoose schema"
    })
    await myNote.save()
    res.status(201).json({
        success: true,
        message: "A note created successfully",
        note: myNote
    })
})
app.get('/', (req: Request, res: Response) => {
    res.send("Welcome To NoteApp Server")
})


export default app