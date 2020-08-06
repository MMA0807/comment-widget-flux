import {commentsReducer} from "./commentsReducer";
import {appReducer} from "./appReducer";

function combineReducers(reducersMap) {
    return function combinationReducer(state, action) {
        const nextState = {}
        Object.entries(reducersMap).forEach(([key, reducer]) => {
            nextState[key] = reducer(state[key], action)
        })
        return nextState
    }
}

export const rootReducer = combineReducers({
    comments: commentsReducer,
    app: appReducer,
})