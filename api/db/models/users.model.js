import { Schema } from "mongoose";
import * as controllers from "../../controllers/users.controller";


const usersModel = new Schema({
	hasCredit: {type: Boolean, default: false},
	phone: {type: String, unique : true, required : true, dropDups: true},
	role: {type: String, required: true},
	state: {type: String, default: ''}
});

usersModel.statics = controllers;

export default usersModel;