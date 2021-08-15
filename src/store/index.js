import { createStore, combineReducers, applyMiddleware } from 'redux';

import ReduxThunk from 'redux-thunk';

import courseTabListReducer from './reducers/courseTabList'
import courseTabListState from './states/courseTabList';

const allReducers = combineReducers({
    courseTabList: courseTabListReducer
})

const store = createStore(allReducers, {
    courseTabList: courseTabListState
}, applyMiddleware(ReduxThunk));

export default store;