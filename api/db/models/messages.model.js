import { Schema } from "mongoose"; //importa a função schema do mongoose
import * as controllers from "../../controllers/messages.controller"; //importa os controllers constituidos.

 //cria o schema
const messagesModel = new Schema({
    phone: {type: String, required: true},
    state:{type: String, required:false},
    text: {type: String, required: false},
    datetime: {type: Date, required:false},
    messageid:{type: String, required: false},
    action:{type: String, required: false},
    confirm:{type: String, required: false}

});

messagesModel.statics = controllers;

export default messagesModel;