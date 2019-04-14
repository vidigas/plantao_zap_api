import express from "express";
import bodyParser from "body-parser";

import usersRouter from "../api/router/users.router";


export default () => {
	const app = express();

	app.use(bodyParser.json());

	app.use('/users', usersRouter());

	return app;
}