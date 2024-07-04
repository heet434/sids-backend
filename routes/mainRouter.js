import { Router } from "express";
const mainRouter = Router();

import * as mainController from '../controllers/mainController.js';

mainRouter.route('/patients')
    .get(mainController.getPatients)
    .post(mainController.createPatient);

mainRouter.route('/patients/:id')
    .get(mainController.getPatient)
    .put(mainController.updatePatient)
    .delete(mainController.deletePatient);

export default mainRouter;

