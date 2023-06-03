import { Router } from 'express';
import * as ctrlUsers from '../controllers/user2.controller.js'
import * as middUsers from '../middlewares/users.midd.js'


const routerUsers = Router();

routerUsers.post('/logup', middUsers.bodyRegisterValidator, ctrlUsers.logup);
routerUsers.post('/login',   middUsers.bodyLoginValidator, ctrlUsers.login);
routerUsers.get("/protected", middUsers.valTokenUser, ctrlUsers.infoUser);
routerUsers.get("/refresh",  middUsers.requireRefreshToken, ctrlUsers.refreshToken);
routerUsers.get("/logout", ctrlUsers.logoutUser);

export default routerUsers;