
// Create schema for all notes
// const noteSchema = new Schema({
//     title: String,
//     content: String
// })

import { model, Schema } from "mongoose"
import { INotes } from "../interfaces/notes.interfaces"


// Create schema with full concept

const noteSchema = new Schema<INotes>(
    {
        title: { type: String, require: true, trim: true },
        content: { type: String, default: '' },
        category: { type: String, enum: ["Personal", "Work", "Study", "Public"], default: 'Personal' },
        isPinned: {
            type: Boolean,
            default: false
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        }

    },
    {
        versionKey: false,
        timestamps: true
    }
)


// Add Model to Note Collection
export const Note = model("Note", noteSchema)
