const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref:'User'
    },
    question: {type: String, required: true}, 
    answers: [String],
    content: {type: String, required:true},
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;