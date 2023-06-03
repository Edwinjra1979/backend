import { validationResult, body } from 'express-validator';
import jwt from 'jsonwebtoken';
import { tokenVerificationErrors } from '../helpers/jwt.js'

// export const valEmail = () => expval.body('email', 'Not a valid e-mail address').isEmail().normalizeEmail()
// export const valPassword = () => expval.body('password', 'The password has min 8 charasters').trim().isLength({ min: 8 })
// export const valRepassword = () => expval.body('password').custom((value, { req }) => {
//                 if (value !== req.body.repassword) {
//                     throw new Error("The paswords not coinciden");
//                 }
//                 return value;
//             })

// export const errorsUsers = (req, res, next) => {  
//     const errors = expval.validationResult(req);
//     if (!errors.isEmpty()) {        
//         return res.status(400).json({ errors: errors.array() })
//     }
//     next()
// }


export const validationResultExpress = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    next();
};

export const bodyRegisterValidator = [
    body("email", "Formato de email incorrecto")
        .trim()
        .isEmail()
        .normalizeEmail(),
    body("password", "Mínimo 6 carácteres").trim().isLength({ min: 6 }),
    body("password", "Formato de password incorrecta").custom(
        (value, { req }) => {
            if (value !== req.body.repassword) {
                throw new Error("No coinciden las contraseñas");
            }
            return value;
        }
    ),
    validationResultExpress,
];

export const bodyLoginValidator = [
    body("email", "Formato de email incorrecto")
        .trim()
        .isEmail()
        .normalizeEmail(),
    body("password", "Mínimo 6 carácteres").trim().isLength({ min: 6 }),
    validationResultExpress,
];



//VALIDANDO EL TOKEN DEL USUARIO
export const valTokenUser = (req, res, next) => {
    try {

        let token = req.cookies.refreshToken;

        if (!token) throw new Error("No Bearer");

        // token = token.split(" ")[1];
        const { uid } = jwt.verify(token, process.env.JWT_REFRESH);

        req.uid = uid;

        next();
    } catch (error) {
        console.log(error.message);
        return res
            .status(401)
            .send({ error: tokenVerificationErrors[error.message] });
    }

}

export const requireRefreshToken = (req, res, next) => {
    try {
        const refreshTokenCookie = req.cookies.refreshToken;
        if (!refreshTokenCookie) throw new Error("No existe el token");

        const { uid } = jwt.verify(refreshTokenCookie, process.env.JWT_REFRESH);
        req.uid = uid;
        next();

    } catch (error) {
        console.log(error);
        res.status(401).json({ error: tokenVerificationErrors[error.message] });
    }
};