import mongoose from "mongoose";

import { MONGO_URL } from "../../env.config";

import usersModel from "./models/users.model";

const mongodb = async () => {
	mongoose.model('users', usersModel);

	mongoose.set('useFindAndModify', false);

	await mongoose.connect(MONGO_URL, { useNewUrlParser: true});
}

export default mongodb;

