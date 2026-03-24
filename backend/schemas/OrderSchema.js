const {schema} = require('mongoose');

const OrderSchema = new schema({
    name: String,
    qty : Number,
    price: Number,
    mode: String,
})

module.exports = OrderSchema;