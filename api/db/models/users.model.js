import { Schema } from "mongoose";
import * as controllers from "../../controllers/users.controller";


const usersModel = new Schema({
	first_name: String,
	last_name:  String
	personal_phone: {type: String, required: true}
});

usersModel.statics = controllers;

export default usersModel;