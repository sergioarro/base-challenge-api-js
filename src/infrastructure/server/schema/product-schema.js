var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductSchema = new Schema({
	id: Number,
	brand: String,
	description: String,
	image: String,
	price: Number,
});

const ProductModel = mongoose.model('Product', ProductSchema, 'products');
module.exports = ProductModel;
