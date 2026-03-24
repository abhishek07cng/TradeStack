const {schema} = require('mongoose');

const WatchListSchema = new schema({
    name: String,
    price: Number,
    percent: String,
    isDown: Boolean,
})

module.exports = WatchListSchema;