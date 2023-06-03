// import { Router } from 'express';
// const routesIngresos = Router();
// import * as ingresosCtrl from "../controllers/controller.ingresos.js";
// import { authJwt } from '../middlewares/index.js';

// routesIngresos.route('/ingresos')
// .get(ingresosCtrl.getIngresos)
// .post([authJwt.verifyToken, authJwt.isModerator], ingresosCtrl.createIngreso)

// routesIngresos.route('/ingresos/:id')
// .get(ingresosCtrl.getIngresoById)
// .put([authJwt.verifyToken, authJwt.isAdmin], ingresosCtrl.updateIngreso)
// .delete([authJwt.verifyToken, authJwt.isModerator], ingresosCtrl.deleteIngreso)

// routesIngresos.route('/ingresos/filters/sumaIngresos')
// .get(ingresosCtrl.getTotalIngresos)


// // routesIngresos.get('/ingresos', (req, res) => {
// //     res.send('respuesta desde el enrutador ingresos')
// // })

// export default routesIngresos;