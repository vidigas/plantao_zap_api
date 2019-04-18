import express from "express";
import bodyParser from "body-parser";

import usersRouter from "../api/router/users.router";
import messagesRouter from "../api/router/messages.router";

import  AccessControlMiddleware  from './middlewares/lib/AccessControlMiddleware';



export default () => {
	const app = express();


	app.use(AccessControlMiddleware.allowAccess); //middleware para por headers (CORS)

	app.use(bodyParser.json()); //middle ware para dar parse no json?

	app.use('/users', usersRouter()); //middleware que so funciona com users? e devolve a funcao userRouter (que vai ser o middleware).
	// a funcao userRouter cria e devolve o router (ele que define cada caminho, como fazer o handle). Essa funcao passa a ser o middlwWare (recebe o req e devolve o res ou o next)
	// o router avalia o caminho e devolve uma funcao Handle, que é uma funcao que tem como parametro de entrada o controller e retorna uma funcao asyncrona que recebe req e res e devolve varios casos.
	// a funcao devolvida é uma funcao constituida pelo controller, que foi passado pelo handle e foi definido em controllers(pasta) e tem como parametros o req e o res.
	//do req essa funcao pega o methodo, os parametros e o body? e cria as respostas com status e data, e manda o res.status.data
	app.use('/messages', messagesRouter());



	return app;
}