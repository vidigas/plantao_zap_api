import mongoose from "mongoose"; //imports a module that connects with mongdb

import { MONGO_URL } from "../../env.config"; //imports env variables

import usersModel from "./models/users.model"; //im
import messagesModel from "./models/messages.model"; //im


const mongodb = async () => {
	mongoose.model('users', usersModel);
	mongoose.model('messages', messagesModel);
	mongoose.set('useFindAndModify', false); //não entendi isso

	await mongoose.connect(MONGO_URL, { useNewUrlParser: true}); //não entendi isso
}

export default mongodb;

