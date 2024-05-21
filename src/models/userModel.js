import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: [true, "Username already in use"],
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: [true, "Email already in use"],
    },
    password: {
        type: String,
        required: [true, "Please provide a username"],
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date
});

const User = mongoose.models.users || mongoose.model("users", userSchema);
export default User