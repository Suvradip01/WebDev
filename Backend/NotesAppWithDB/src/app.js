const express = require('express');
const noteModel = require('./models/notes.model');

const app = express();

app.use(express.json());


// CREATE
app.post('/notes', async (req, res) => {

    const data = req.body;

    await noteModel.create({
        title: data.title,
        description: data.description,
    });

    res.status(201).json({
        message: "Note Created"
    });
});

// READ
app.get('/notes', async (req, res) => {

    const notes = await noteModel.find();

    res.status(200).json({
        message: "Notes fetched successfully",
        notes: notes
    });
});


// DELETE
app.delete('/notes/:id', async (req, res) => {

    const id = req.params.id;

    await noteModel.findByIdAndDelete(id);

    res.status(200).json({
        message: "Note deleted successfully"
    });
});


// UPDATE
app.patch('/notes/:id', async (req, res) => {

    const id = req.params.id;

    const data = req.body;

    const updatedNote = await noteModel.findByIdAndUpdate(
        id,
        {
            title: data.title,
            description: data.description,
        },
    );

    res.status(200).json({
        message: "Note updated successfully",
        note: updatedNote
    });
});

module.exports = app;