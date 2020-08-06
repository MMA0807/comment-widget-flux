import React from "react";
import { Comment } from "./Comment";
// import { removeComment } from "../../redux/actions";
import "./comment.scss";

const CommentList = (props) => {
    debugger
    if (!props.comments.length) {
        return (
            <p className="text-center font-weight-bold">Комментариев пока нет</p>
        );
    }
    return (
        <ul className="list-group mt-5">
            {props.comments.map((comment) => (
                <li className="media list-group-item mb-4" key={comment.id}>
                    <Comment comment={comment}
                             // removeComment={removeComment}
                    />
                </li>
            ))}
        </ul>
    );
};

// const mapDispatchToProps =  {
//     removeComment
// };
//
// const mapStateToProps = (state) => {
//     return {
//         comments: state.comments,
//     };
// };

export default CommentList;