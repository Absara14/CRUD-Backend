const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    phone: {
        type: String,
        trim: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        default: 'Other'
    }
}, {
    timestamps: true,
    collection: 'abs_users' 
});

module.exports = mongoose.model('User', userSchema);
