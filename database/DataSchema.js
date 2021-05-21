const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    data: String
});

module.exports = mongoose.model('DataSchema', DataSchema);