import { mongoose } from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    username: {
                type: String,
                unique: true,
                required: true
            },
      email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true,
        index: {unique: true}
    },
    password: {
        type: String,
        required: true
    },
    roles: [{
        ref: "Role",
        type: mongoose.Schema.Types.ObjectId
    }],
},
    {
        timestamps: true,
        versionKey: false
    }

);

//Encrypt of the password
userSchema.pre('save', async function(next){
    const user = this;
    if(!user.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(user.password, salt);
        next()
    } catch (error) {
        console.log(error)
        throw new Error('Faeild the hash the password')
        
    }
});

//password validation
userSchema.methods.comparePassword = async function (canditatePassword) {
    return await bcrypt.compare(canditatePassword, this.password);
};

export default mongoose.model('User', userSchema);