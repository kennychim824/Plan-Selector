import { createStore, combineReducers } from 'redux';
import { planDetailsReducer } from './plan-detail';

const reducers = combineReducers({
    planDetails: planDetailsReducer,
});

export const store = createStore(reducers);
