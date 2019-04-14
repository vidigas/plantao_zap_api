import mongoose from 'mongoose';


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
		let data = await Users.find({ _id:params.id });
		
		if(!data.length) return { status: 200, data: "User not found"};
		
		return { status: 200, data};
	} catch(e) {
		return { status:500, data: e};
	}
}

export const create = async (body) => {
	const Users = mongoose.model('users');

	const newUser = new Users({
		email: body.email,
		first_name: body.first_name,
		last_name: body.last_name,
		personal_phone: body.personal_phone
	});

	try {
		let data = await newUser.save();
		return { status: 200, data};
	} catch(e) {
		return { status:500, data: e};
	}
}

export const update = async(params, body) => {
	const Users = mongoose.model('users');

	const updatedUser = {
		email: body.email,
		first_name: body.first_name,
		last_name: body.last_name,
		personal_phone: body.personal_phone
	}

	try {
		let data = await Users.findOneAndUpdate({ _id: params.id }, updatedUser ,{ new: true });
		return { status: 200, data};
	} catch(e) {
		return { status:500, data:e};
	}

}

export const deleteUser = async(params, body) => {
	const Users = mongoose.model('users');

	try {
		let data = await Users.findOneAndDelete({ _id: params.id });
		if(!data) return { status: 200, data: 'User not found'};
		return { status: 200, data: `User with id ${params.id},successfully deleted.`}
	} catch(e) {
		return { status: 500, data: e};
	}
}








