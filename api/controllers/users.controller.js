import mongoose from 'mongoose';
import { allStates } from '../db/models/user.states.model';


export const getAll = async () => {

	const Users = mongoose.model('users');

	try {
		
		let data = await Users.find();
		
		return { status: 200, data};
	} catch(e) {
		return { status: 500, data: e };
	}
}

export const getOne = async (params) => {
	const Users = mongoose.model('users');

	try {
		let data = await Users.findOne({ phone:params.phone });
		console.log('get user : ',data);
		if(!data) {
				//fiz um negocio que causa -> você vai ficar puto, rs... 
				// quando puxa um usuario que não existe, ele cadastra esse usuário como status nãoregistrado
				// fiz para poder anexar o a mensagem inicial desse cara nele antes de entrar no router.
				const nonRegUser = { phone:params.phone, role:'undetermined', state: allStates[0] };
				create(nonRegUser);
			return { status: 200, data: { phone:params.phone, role:'undetermined', state: allStates[0] }};
		}
		return { status: 200, data};
	} catch(e) {
		return { status:500, data: e};
	}
}

export const create = async (body) => {
	const Users = mongoose.model('users');
	const newUser = new Users({
		phone: body.phone,
		role: body.role,
		state: body.state
	});
	console.log('new user create',newUser);
	try {
		let data = await newUser.save();
		console.log('confirm',data);
		return { status: 200, data};
	} catch(e) {
		return { status:500, data: e};
	}
}

export const update = async(params, body) => {
	const Users = mongoose.model('users');
	// coloquei body=body para dar update só o que for relevante. depois tem que checar se tudo certo aqui.
	const updatedUser = body
	console.log('update user', body);
	try {
		//atualizei o id de busca
		let data = await Users.findOneAndUpdate({ phone:params.phone }, updatedUser ,{ new: true });
		return { status: 200, data};
	} catch(e) {
		return { status:500, data:e};
	}

}

export const deleteUser = async(params, body) => {
	const Users = mongoose.model('users');

	try {
		let data = await Users.findOneAndDelete({ phone: params.phone });
		if(!data) return { status: 200, data: 'User not found'};
		return { status: 200, data: `User with id ${params.id},successfully deleted.`}
	} catch(e) {
		return { status: 500, data: e};
	}
}








