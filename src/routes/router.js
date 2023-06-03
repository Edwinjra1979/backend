import { Router } from 'express';
// import routesIngresos from './router.ingresos.js';
// import routesUsers from './router.users.js';
import routerUsers from './users2.router.js'


const router = Router();

// router.use('/api', routesIngresos)
// router.use('/api/v1', routesUsers)
router.use('/api/v1/auth', routerUsers)


export default router;