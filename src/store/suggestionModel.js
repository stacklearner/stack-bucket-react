import { action, computed } from 'easy-peasy';
import shortid from 'shortid';

const suggestedItems = [
	'rice',
	'chips',
	'potato',
	'coke',
	'water',
	'cake',
	'burger',
	'pizza',
	'apple',
	'medicine',
	'chocolate',
	'biscuit',
	'ice cream',
	'tomato',
	'orange',
	'onion',
];

const generateSuggestions = () => {
	const items = {};
	suggestedItems.forEach((item) => {
		const sugItem = {
			id: shortid.generate(),
			text: item,
			appeared: 0,
		};
		items[sugItem.id] = sugItem;
	});
	return items;
};

const suggestions = generateSuggestions();

const SuggestionModel = {
	items: { ...suggestions },
	searchTerm: '',
	add: action((state, payload) => {
		if (payload.id) {
			state.items[payload.id].appeared++;
			return;
		}

		for (let i in state.items) {
			if (state.items[i].text === payload.text) {
				state.items[i].appeared++;
				return;
			}
		}

		payload.id = shortid.generate();
		payload.text.toLowerCase();
		payload.appeared = 1;
		state.items[payload.id] = payload;
	}),
	changeSearchTerm: action((state, payload) => {
		state.searchTerm = payload.toLowerCase();
	}),
	search: computed((state) => {
		if (state.searchTerm.length === 0) {
			return [];
		}

		const items = [];
		for (let i in state.items) {
			if (state.items[i].text.includes(state.searchTerm)) {
				items.push(state.items[i]);
			}
		}
		return items;
	}),
};

export default SuggestionModel;
