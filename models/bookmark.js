const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookmarkSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    url : {
        type : String,
        required : true
    },
    category : {
        type : String, 
        required : true
    },
    tags : [ String ],
    notes : String,
    
    createdAt : {
        type : Date,
        default : Date.now
    },
    user : {
        type: Schema.Types.ObjectId,
        ref: 'User'     
    },
    collection: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Collection'
    }
});



module.exports = mongoose.model('Bookmark', bookmarkSchema)