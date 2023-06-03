// import { Router } from 'express';
// import * as usersCtrl from '../controllers/controller.users.js'
// import { authJwt, verifySignup } from '../middlewares/index.js';

// const routesUsers = Router();

// routesUsers.post('/admin/users', verifySignup.checkExistingRole);

// // routesUsers.post('/admin/users', [
// //     authJwt.verifyToken, //Check the token
// //     authJwt.isAdmin, //Check if is admin
// //     verifySignup.checkExistingUser, //Check if the user exists
// //     // verifySignup.checkExistingRole //Check if the rol exists
// // ], usersCtrl.signUp);

// routesUsers.post('/signup', verifySignup.checkExistingUser, usersCtrl.signUp);
// routesUsers.post('/signin', usersCtrl.signIn);


// export default routesUsers;

