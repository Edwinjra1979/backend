// import { mongoose } from 'mongoose';
// import bcrypt from 'bcryptjs';

// const userSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     email: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     roles: [{
//         ref: "Role",
//         type: mongoose.Schema.Types.ObjectId
//     }],
// },
//     {
//         timestamps: true,
//         versionKey: false
//     }

// );

// userSchema.statics.encryptPassword = async (password) => {
//     const salt = await bcrypt.genSalt(10)
//     return await bcrypt.hash(password, salt);
// }


// userSchema.statics.comparePassword = async (password, passwordTwo) => {
//     return await bcrypt.compare(password, passwordTwo)
// }


// export default mongoose.model('User', userSchema);