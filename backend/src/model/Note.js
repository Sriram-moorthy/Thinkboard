import mongoose from 'mongoose';

// 1 - Create Schema
// 2 - Create Model based off of that Schema
// 3 - Export Model

const noteSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    content : {
        type : String,
        required : true
    }
},{ timestamps : true }
);

const Note = mongoose.model('Note',noteSchema); // Create a model named 'Note' using the noteSchema

export default Note; // Model exported for use in other parts of the application
