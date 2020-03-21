const {Schema,model} = require('mongoose');


const Product = new Schema({
    name:{type:String, require:true},
    price:{type:Number,default:0},
    sorting:{type:Number,default:0}
});

module.exports = model('Product',Product);