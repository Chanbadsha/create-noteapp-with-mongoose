
// Create schema for all notes
// const noteSchema = new Schema({
//     title: String,
//     content: String
// })

import { model, Schema } from "mongoose"


// Create schema with full concept

const noteSchema = new Schema<INotes>(
    {
        title: { type: String, require: true, trim: true },
        content: { type: String, default: '' },
        category: { type: String, enum: ["Personal", "Work", "Study", "Public"], default: 'Personal' },
        isPinned: {
            type: Boolean,
            default: false
        }

    },
    {
        versionKey: false,
        timestamps: true
    }
)


// Add Model to Note Collection
export const Note = model("Note", noteSchema)
