import mongoose from 'mongoose';


export const getAll = async (params) => { //funcao asyncrona que pega todos os users

	const Messages = mongoose.model('messages');

	try {
		
		let data = await Messages.find({ phone:params.phone });
		
		return { status: 200, data};
	} catch(e) {
		return { status: 500, data: e };
	}
}

export const getAllAll = async () => { //funcao asyncrona que pega todos os users

	const Messages = mongoose.model('messages');

	try {
		
		let data = await Messages.find();
		
		return { status: 200, data};
	} catch(e) {
		return { status: 500, data: e };
	}
}

export const create = async (body) => { //funcao asincrona que cria um user
	const Messages = mongoose.model('messages');

	const newMessage = new Messages({
		phone: body.phone,
		state:body.state,
        text: body.text,
	});
	//lidando com parametros que podem não existir - certamente tem uma forma mai bonita de lidar com isso
	if(body.hasOwnProperty('datetime')){newMessage.datetime = body.datetime;}
	if(body.hasOwnProperty('messageid')){newMessage.messageid = body.messageid;}
	if(body.hasOwnProperty('action')){newMessage.action = body.action;}
	if(body.hasOwnProperty('confirm')){newMessage.confirm = body.confirm;}
	console.log(newMessage);

	try {
		let data = await newMessage.save();
		return { status: 200, data};
	} catch(e) {
		return { status:500, data: e};
	}
}






