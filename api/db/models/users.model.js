import { Schema } from "mongoose";
import * as controllers from "../../controllers/users.controller";


const usersModel = new Schema({
	hasCredit: {type: Boolean, default: false},
	phone: {type: String, required: true},
	role: {type: String, required: true}
});

usersModel.statics = controllers;

export default usersModel;