import express from 'express'
import {createUser, deleteUser, findUser, findAllUsers, updateUser,} from '../services/userService.js'

const userController = express.Router();

userController.post('/user/register', async (req, res) => {
    createUser(req, res)
})

userController.put('/user/update/:id', async (req, res) => {
    updateUser(req, res)
})

userController.delete('/user/delete/:id', async (req, res) => {
    deleteUser(req, res)
})

userController.get('/user/:id', async (req, res) => {
    findUser(req, res)
})

userController.get('/users', async (req, res) => {
    findAllUsers(req, res)
})

export default userController;