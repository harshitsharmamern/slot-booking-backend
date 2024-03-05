const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const ReviewSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    userName: {
        type: String
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    review: {
        type: String
    },
    whicharea: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'area',
    },
    date: {
        type: Date,
        default: Date.now
    }
})
const Review = mongoose.model("review", ReviewSchema);
Review.createIndexes();
module.exports = Review;

