import { action } from 'easy-peasy';
import shortid from 'shortid';

const BucketModel = {
	items: {},
	create: action((state, payload) => {
		const bucket = {
			name: payload,
			id: shortid.generate(),
			shoppingItems: [],
			costs: 0,
			created: new Date().toLocaleDateString(),
		};
		state.items[bucket.id] = bucket;
	}),
	remove: action((state, payload) => {
		delete state.items[payload];
	}),
	addItem: action((state, payload) => {
		state.items[payload.bucketID].shoppingItems.push(payload.itemID);
	}),
	removeItem: action((state, payload) => {
		const bucket = state.items[payload.bucketID];
		const index = bucket.shoppingItems.findIndex(
			(id) => id === payload.itemID
		);
		bucket.shoppingItems.splice(index, 1);
	}),
	rename: action((state, payload) => {
		state.items[payload.bucketID].name = payload.name;
	}),
	updateCost: action((state, payload) => {
		state.items[payload.bucketID].costs = payload.costs;
	}),
};

export default BucketModel;
