
export function createStore(reducer, initialState = []) {
    let state = initialState
    let listener = () => {}

    return {
        dispatch: action => {state = reducer(state, action)},
        getState: () => state,
        subscribe: observer => { listener = observer }
    }
}

// export const store = {
//     _state: {
//         // author: "",
//         newCommentText: "",
//         comments: [],
//     },
//     _callSubscriber() {
//         console.log('state Changed')
//     },
//     getState() {
//         return this._state
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer
//     },
//     dispatch(action) {
//         switch (action.type) {
//             case ADD_COMMENT:
//                 const { newCommentText } = this._state;
//                 const date = Date.now();
//                 const newComment = {
//                     id: date,
//                     // author,
//                     newCommentText,
//                     date: new Date(date).toLocaleString(),
//                 }
//                 this._state.comments = this._state.comments.concat([newComment])
//                 this._state.newCommentText = '';
//                 this._callSubscriber(this._state)
//                 break;
//
//             case UPDATE_NEW_COMMENT_TEXT:
//                 this._state.newCommentText = action.payload
//                 this._callSubscriber(this._state)
//             default:
//                 return this._state
//         }
//     },
// }