import { createStore, compose } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index.js';

import comments from './data/comments.js';
import posts from './data/posts.js';

const defaultState = {
    posts,
    comments
}

export const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(browserHistory, store);

if(module.hot){
    module.hot.accept('./reducers/', ()=>{
        const nextRootReducer = require('./reducers/index.js').default;
        store.replaceReducer(nextRootReducer);
    })
}