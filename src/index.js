import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './store/reducers/CounterReducer';
import resultReducer from './store/reducers/ResultReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});

//middlewear
//a funciton that returns a funciton that returns a function
const logger = (store) => {
    return nextAruguement => {
        return action => {
            console.log('[MiddlWare]', action);
            const result = nextAruguement(action);
            console.log('[MiddlWare]', store.getState());
            return result;
        }
    }
}

//redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
