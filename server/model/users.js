import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
    userName: 
    {
        type: String,
        required: true
    },
    userPassword: 
    {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
   
});

export default mongoose.model('User', userSchema);