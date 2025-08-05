import express, { Request, Response } from 'express'
import { Note } from '../models/note.model'



export const notesRouter = express.Router()

// Create Note
notesRouter.post('/create-note', async (req: Request, res: Response) => {

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

notesRouter.get('/', async (req: Request, res: Response) => {

    const notes = await Note.find()

    res.status(200).json({
        success: true,
        messege: 'Get all notes successfully',
        notes
    })


})

// Get Single Note with Id

notesRouter.get('/:noteById', async (req: Request, res: Response) => {
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


// Update Single Note

notesRouter.patch('/update-note/:noteId', async (req: Request, res: Response) => {
    const noteId = req.params.noteId
    const updateNote = req.body

    const UpdateNote = await Note.findByIdAndUpdate(noteId, updateNote)

    res.status(200).json({
        success: true,
        messege: 'Note update successfully',
        updateNote
    })

})

// Delete Note

notesRouter.delete('/delete-note/:noteId', async (req: Request, res: Response) => {
    const noteId = req.params.noteId


    const deleteNote = await Note.findByIdAndDelete(noteId)

    res.status(200).json({
        success: true,
        messege: 'Note deleted successfully',
        deleteNote
    })

})
