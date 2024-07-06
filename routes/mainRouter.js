import { Router } from "express";
import { verifyToken, verifyRole } from "../middlewares/authMiddleware.js";
import * as mainController from '../controllers/mainController.js';

const mainRouter = Router();

mainRouter.route('/patients')
    .get(verifyToken, mainController.getPatients) 
    .post(verifyToken, verifyRole('user'), mainController.createPatient); 

mainRouter.route('/patients/:id')
    .get(verifyToken, mainController.getPatient)
    .put(verifyToken, verifyRole('user'), mainController.updatePatient) 
    .delete(verifyToken, verifyRole('admin'), mainController.deletePatient); 

mainRouter.get('/findpatients', verifyToken, mainController.findPatientsBySubjectNoAndInitials);

mainRouter.route('/patients/:subjectNo/:initials')
    .put(verifyToken, verifyRole('user'), mainController.updatePatientBySubjectNoAndInitials);

export default mainRouter;