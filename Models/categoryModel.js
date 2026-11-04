const mongoose = require('mongoose');

const cateogrySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        }
    },
    {
        timestamps: true
    }
);

const Category = mongoose.model('Category', productSchema);

module.exports = Category;
