import {Router} from 'express';

import userController from './controllers/userController.js';


const router = Router();

router.post('/user', userController.createUser);
router.get('/users', userController.findAllUsers);
router.get("/user/:id", userController.findUser);
router.put("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);

export {router};