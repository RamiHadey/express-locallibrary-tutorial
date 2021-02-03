var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
    {
        name: { type: String, required: true, maxlength: 100, minlength: 3},
        // horror: { type: String, required: true, maxlength: 100 },
        // historical: { type: String, required: true, maxlength: 100 },
        // romance: { type: String, required: true, maxlength: 100 },
    } 
);     
             
// Virtual for book's URL
GenreSchema
    .virtual('url')
    .get(function () {
        return '/catalog/genre/' + this._id;
    });

//Export model
module.exports = mongoose.model('Genre', GenreSchema);