import express from 'express';
import mongoose from 'mongoose';
import { handle } from './handler';

const messagesRouter = () => {
	const Messages = mongoose.model('messages');

	var router = express.Router();

    router.get('/', handle(Messages.getAllAll));

	router.get('/:phone', handle(Messages.getAll));

	router.post('/', handle(Messages.create));

	return router;
}

export default messagesRouter;