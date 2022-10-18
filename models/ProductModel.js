var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema(
    {
        "firstname": {
            type: String,
            required: true
        },
        "lastname": {
            type: String,
            required: true
        },
        "course": {
            type: String,
            required: true
        },
        "phonenumber":{
            type: Number,
            required: true
        },


        "email": {
            type: String,
            required: true,
            
        },
        "date_created": {
            type: Date,
            required: true,
            default: Date.now
        }
    }
);

var ProductModel = mongoose.model('products', ProductSchema);

module.exports = ProductModel;