import User from "../models/users2.model.js";
import { generarJwt, generateRefreshToken, tokenVerificationErrors } from "../helpers/jwt.js";
import jwt from 'jsonwebtoken';

export const logup = async (req, res) => {
    try {

        // let user = await User.findOne({ email })
        // if (user) throw {code: 11000};

        const {username, email, password} = req.body;
        const user = new User({username, email, password});
        const saveUser = await user.save()
        //⁡⁣⁢⁢jwt token⁡
       return res.json(saveUser);
    } catch (error) {
        //⁡⁣⁢⁢Validation for default of model user⁡
        if(error.code === 11000) return (res.status(400).json({error: 'usuario ya existe'}))
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        let user = await User.findOne({ email });

        if (!user)
            return res.status(403).json({ error: "No existe este usuario" });

        const respuestaPassword = await user.comparePassword(password);
        if (!respuestaPassword)
            return res.status(403).json({ error: "Contraseña incorrecta" });
        // 𝗚𝗲𝗻𝗲𝗿𝗮𝗿 𝗲𝗹 𝘁𝗼𝗸𝗲𝗻 𝗝𝗪𝗧⁡⁡
        // let token = jwt.sign({uid: user.id}, process.env.JWT_SECRET, { expiresIn: 180 })
        const { token, expiresIn } = generarJwt(user.id);
        generateRefreshToken(user.id, res); 
        
        return res.json({token, expiresIn});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Error de servidor" });
    };
}

export const infoUser = async (req, res) => {
   try {
    const user = await User.findById(req.uid).lean();
    if(!user) throw new Error('Id invalido')
    console.log(user.email)
    res.json({email: user.email})
   } catch (error) {
    return res.status(500).json({ error: "Error de servidor" });
   }
   
}

export const refreshToken = (req, res) => {
    try {       
            
        const { token, expiresIn } = generateToken(req.uid);
        return res.json({ token, expiresIn });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "error de server" });
    }
};



export const logoutUser = (req, res) => {
    res.clearCookie("refreshToken");
    res.json({ ok: true });
};