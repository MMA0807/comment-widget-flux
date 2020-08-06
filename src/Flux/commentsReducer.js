import {ADD_COMMENT, REMOVE_COMMENT, UPDATE_NEW_COMMENT_TEXT} from "./types";

const initialState = {
    comments: [],
    newCommentText: '',
};

export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            // let { newCommentText, comments } = state;
            let {newCommentText} = state
                const date = Date.now();
                const newComment = {
                    id: date,
                    // author,
                    newCommentText,
                    date: new Date(date).toLocaleString(),
                }
                state.comments = state.comments.concat([newComment]);
                state.newCommentText = '';
            return state;
        case REMOVE_COMMENT:
            return state.filter((comment) => comment.id !== action.payload);
        case UPDATE_NEW_COMMENT_TEXT:
            state.newCommentText = action.payload
            return state;
        default:
            return state;
    }
};