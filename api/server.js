import express from "express";
import bodyParser from "body-parser";

import usersRouter from "../api/router/users.router";
import  AccessControlMiddleware  from './middlewares/lib/AccessControlMiddleware';



export default () => {
	const app = express();

	app.use(AccessControlMiddleware.allowAccess);

	app.use(bodyParser.json());

	app.use('/users', usersRouter());



	return app;
}