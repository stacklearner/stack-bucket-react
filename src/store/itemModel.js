import { action } from 'easy-peasy';

const ItemModel = {
	items: {},
	create: action((state, payload) => {
		const item = {
			id: payload.id,
			name: payload.name,
			quantity: 0,
			price: 0,
			isCompleted: false,
		};
		state.items[item.id] = item;
	}),
	remove: action((state, payload) => {
		delete state.items[payload];
	}),
	update: action((state, payload) => {
		state.items[payload.itemID][payload.key] = payload.value;
	}),
	toggleCompleted: action((state, payload) => {
		state.items[payload].isCompleted = !state.items[payload].isCompleted;
	}),
};

export default ItemModel;
