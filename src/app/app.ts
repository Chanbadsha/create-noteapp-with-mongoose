import express, { Application, Request, Response } from 'express'
import { model, Schema } from 'mongoose'
const app: Application = express()

app.use(express.json())


// Create schema for all notes
// const noteSchema = new Schema({
//     title: String,
//     content: String
// })


// Create schema with full concept

const noteSchema = new Schema({
    title: { type: String, require: true, trim: true },
    content: { type: String, default: '' },
    category: { type: String, enum: ["Personal", "Work", "Study", "Public"], default: 'Personal' },
    isPinned: {
        type: Boolean,
        default: false
    },
    createdAt: { type: Date, default: Date.now }

})


// Add Model to Note Collection
const Note = model("Note", noteSchema)

// Create Note
app.post('/notes/create-note', async (req: Request, res: Response) => {

    // Create note with approch 1
    // const myNote = new Note({
    //     title: 'I am learning Mongoose',

    // })
    // await myNote.save()


    // Create note with approch 2, This is usual

    const note = req.body
    // console.log(first)
    const createNote = await Note.create(note)


    res.status(201).json({
        success: true,
        message: "A note created successfully",
        note: createNote
    })
})

// Get all Notes

app.get('/notes', async (req: Request, res: Response) => {

    const notes = await Note.find()

    res.status(200).json({
        success: true,
        messege: 'Get all notes successfully',
        notes
    })


})

// Get Single Note with Id


app.get('/notes/:noteById', async (req: Request, res: Response) => {
    const noteId = req.params.noteById

    // First Approch
    // const note = await Note.findOne({_id:noteId})
    
    // Best Approch
    const note = await Note.findById(noteId)

    res.status(200).json({
        success: true,
        messege: 'Get singel notes successfully',
        note
    })


})


app.get('/', (req: Request, res: Response) => {
    res.send("Welcome To NoteApp Server")
})


export default app