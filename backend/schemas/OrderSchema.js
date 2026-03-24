const {schema} = require('mongoose');

const OrderSchema = new schema({
    name: String,
    price: Number,
    percent: String,
    isDown: Boolean,
})

module.exports = OrderSchema;