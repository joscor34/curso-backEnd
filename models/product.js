const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema ({
    name: String,
    price: Number,
    description: String,
    img: String,
    category: {
        type: String,
        enum: ['ropa', 'electronica', 'bebidas', 'alimentos']
    }
})

module.exports = mongoose.model('Product', productSchema)