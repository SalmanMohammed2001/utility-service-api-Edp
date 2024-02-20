import mongoose, {Schema} from "mongoose";


const ReviewSchema = new mongoose.Schema({
    date:
        {
            type: Date,
            required: true
        },
    review: {
        type: String,
        required: true
    },
    star: {
        type: Number,
        required: true
    },


    user: {
        type: Number,
        required: true
    },
    product: {
        type: Number,
        required: true
    }
})

export default mongoose.model('review',ReviewSchema)