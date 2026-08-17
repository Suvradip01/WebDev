const express = require('express'); // import express
const app = express(); // create app (server)

app.use(express.json()); // allow JSON data in req.body (middleware)

const notes = []; // temporary storage array (like fake DB)

app.post('/notes', (req, res) => { // create note API
    
    notes.push(req.body); // add new note from request

    res.status(201).json({ // 201 = created
         message: 'Note added' 
    });
});


app.get('/notes', (req, res) => { // get all notes

    res.status(200).json({ // 200 = success
        message: "Notes retrieved successfully",
        notes: notes // send all notes
    });
});


app.patch('/notes/:index', (req, res) => { // update note by index

    const idx = parseInt(req.params.index); // get index from URL

    const title = req.body.title; // get title 
    const description = req.body.description; // get description

    notes[idx] = { // replace note at index
        title: title,
        description: description
    };

    res.status(200).json({ // 200 = success
        message: 'Note updated' 
    });
});


app.delete('/notes/:index', (req, res) => { // delete note

    const idx = parseInt(req.params.index); // get index

    delete notes[idx]; // remove note (⚠️ leaves empty slot)

    res.status(200).json({ // success response
        message: 'Note deleted' 
    });
});

module.exports = app; // export app
