"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notesRouter = void 0;
const express_1 = __importDefault(require("express"));
const note_model_1 = require("../models/note.model");
exports.notesRouter = express_1.default.Router();
// Create Note
exports.notesRouter.post('/create-note', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Create note with approch 1
    // const myNote = new Note({
    //     title: 'I am learning Mongoose',
    // })
    // await myNote.save()
    // Create note with approch 2, This is usual
    const note = req.body;
    // console.log(first)
    const createNote = yield note_model_1.Note.create(note);
    res.status(201).json({
        success: true,
        message: "A note created successfully",
        note: createNote
    });
}));
// Get all Notes
exports.notesRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const notes = yield note_model_1.Note.find();
    res.status(200).json({
        success: true,
        messege: 'Get all notes successfully',
        notes
    });
}));
// Get Single Note with Id
exports.notesRouter.get('/:noteById', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const noteId = req.params.noteById;
    // First Approch
    // const note = await Note.findOne({_id:noteId})
    // Best Approch
    const note = yield note_model_1.Note.findById(noteId);
    res.status(200).json({
        success: true,
        messege: 'Get singel notes successfully',
        note
    });
}));
// Update Single Note
exports.notesRouter.patch('/update-note/:noteId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const noteId = req.params.noteId;
    const updateNote = req.body;
    const UpdateNote = yield note_model_1.Note.findByIdAndUpdate(noteId, updateNote);
    res.status(200).json({
        success: true,
        messege: 'Note update successfully',
        updateNote
    });
}));
// Delete Note
exports.notesRouter.delete('/delete-note/:noteId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const noteId = req.params.noteId;
    const deleteNote = yield note_model_1.Note.findByIdAndDelete(noteId);
    res.status(200).json({
        success: true,
        messege: 'Note deleted successfully',
        deleteNote
    });
}));
