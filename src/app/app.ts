import express, { Application, Request, Response } from 'express'
import { model, Schema } from 'mongoose'
const app: Application = express()




// Create schema for all notes
// const noteSchema = new Schema({
//     title: String,
//     content: String
// })


// Create schema with full concept

const noteSchema = new Schema({
    title: { type: String, require: true },
    content: { type: String, default: '' },
    category: { type: String, enum: ["Personal", "Work", "Study", "Public"], default: 'Personal' },
    isPinned: {
        type: Boolean,
        default: false
    }

})


// Add Model to Note Collection
const Note = model("Note", noteSchema)


app.post('/create-note', async (req: Request, res: Response) => {
    const myNote = new Note({
        title: 'I am learning Mongoose',
        
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