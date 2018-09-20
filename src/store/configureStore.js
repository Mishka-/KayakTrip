import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'


// redux feature for logging actions
const logger = (state) => (next) => (action) => {
    console.log("Logged Action: ", action);
    next(action);
};


export default function configureStore(initialState) {

    const store = createStore(
        rootReducer,
        {},
        applyMiddleware(logger));

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}