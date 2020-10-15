import { combineReducers, createStore , applyMiddleware} from "redux";
import thunk from 'redux-thunk'

import gridReducer from '../features/Grid/reducer';


//gabungkan reducers
let rootReducers = combineReducers({
    grid : gridReducer // memberikan nama state grid untuk grid reducer

});

let store = createStore(rootReducers, applyMiddleware(thunk));

export default store;

