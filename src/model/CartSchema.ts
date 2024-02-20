import mongoose from "mongoose";

const CartSchema =new mongoose.Schema({
    date:
        {
            type:String,
            required:true
        },
    qty:{
        type:Number,
        required:true
    },
    user:{
        type:Number,
        required:true
    },
    product:{
        type:Number,
        required:true
    }

});

// module.exports=mongoose.model("cart",CartSchema)
export default mongoose.model('cart',CartSchema)