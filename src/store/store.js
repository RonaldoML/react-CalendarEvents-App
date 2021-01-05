import thunk from 'redux-thunk';
import {applyMiddleware, compose, createStore} from 'redux';
import { rootReducer } from "../reducers/rootReducers";

//4. Crear el store importando el rootReducer
//permite hacer peticiones asíncronas en redux
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware( thunk )
    )
)