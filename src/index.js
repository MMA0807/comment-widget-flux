import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {createStore} from "./Flux/store";
import {loadState, saveState} from "./Flux/localStorage";
import {rootReducer} from "./Flux/rootReducer";

const persistedState = loadState()
const store = createStore(rootReducer, persistedState)

store.subscribe((store) => {
    saveState({
        comments: store.getState().comments
    })
})

ReactDOM.render(
   <React.StrictMode>
        <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
   </React.StrictMode>,
   document.getElementById('root')
);
