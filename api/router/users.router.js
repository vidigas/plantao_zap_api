import express from 'express';
import mongoose from 'mongoose';
import { handle } from './handler';

const usersRouter = () => {
	const Users = mongoose.model('users');

	var router = express.Router();

	router.get('/', handle(Users.getAll));

	router.post('/', handle(Users.create));

	router.get('/:id', handle(Users.getOne));

	router.put('/:id', handle(Users.update));

	router.delete('/:id', handle(Users.deleteUser));

	return router;
}

export default usersRouter;