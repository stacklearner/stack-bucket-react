import { createStore } from 'easy-peasy';

import BucketModel from './bucketModel';
import ItemModel from './itemModel';
import SuggestionModel from './suggestionModel';

const store = createStore({
	buckets: BucketModel,
	shoppingItems: ItemModel,
	suggestions: SuggestionModel,
});

export default store;
