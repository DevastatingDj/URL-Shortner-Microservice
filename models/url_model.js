var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var URL = new Schema({
    original_url: { type: String },
    short_url: { type: String }
});

module.exports = mongoose.model('url', URL);
