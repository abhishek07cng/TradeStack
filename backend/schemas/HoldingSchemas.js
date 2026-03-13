const {Schema} = require('mongoose')

const HoldingSchema = new Schema ({
    name: string,
    qty: Number,
    avg: Number,
    price: Number,
    net: string,
    day: string,
})

module.exports = {HoldingSchema} ;