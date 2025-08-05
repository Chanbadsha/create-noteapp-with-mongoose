"use strict";
// Create schema for all notes
// const noteSchema = new Schema({
//     title: String,
//     content: String
// })
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
const mongoose_1 = require("mongoose");
// Create schema with full concept
const noteSchema = new mongoose_1.Schema({
    title: { type: String, require: true, trim: true },
    content: { type: String, default: '' },
    category: { type: String, enum: ["Personal", "Work", "Study", "Public"], default: 'Personal' },
    isPinned: {
        type: Boolean,
        default: false
    }
}, {
    versionKey: false,
    timestamps: true
});
// Add Model to Note Collection
exports.Note = (0, mongoose_1.model)("Note", noteSchema);
