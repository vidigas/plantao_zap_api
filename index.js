import server from './api/server';
import mongodb from "./api/db";
import { PORT } from './env.config';

mongodb()
	.then(async () => {
		const app = await server();

		app.listen(PORT, err => {
			if(err) {
				console.log(err);
			} else {
				console.log(`Server Running - Listening to port ${PORT}`);
			}
		})
	})
	.catch(e =>{
		console.log('MONGODB: ', 'Failed to connect.');
		console.log(e);
	});