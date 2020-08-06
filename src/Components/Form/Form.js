import React from "react";
import { Alert } from "../Alert";
import {addComment, updateNewCommentText} from "../../Flux/actions";

export const Form = (props) => {

    const {author, newCommentText} = props.state

    const formSubmitHandler = (event) => {
        event.preventDefault();
        props.dispatch(addComment())
        console.log(props.state.comments)
    }


    const handleChange = (event) => {
        const { name, value } = event.target;
        props.dispatch(updateNewCommentText(value))
    };

    return (
        <form onSubmit={formSubmitHandler}>
            {alert && <Alert />}
            {/*<div className="form-group row">*/}
            {/*    <label*/}
            {/*        htmlFor="commentAuthor"*/}
            {/*        className="col-sm-2 col-form-label"*/}
            {/*        hidden*/}
            {/*    >*/}
            {/*        Имя*/}
            {/*    </label>*/}
            {/*    <div className="col-sm-12">*/}
            {/*        <input*/}
            {/*            id="commentAuthor"*/}
            {/*            name="author"*/}
            {/*            type="text"*/}
            {/*            className="form-control"*/}
            {/*            placeholder="Введите свое Имя..."*/}
            {/*            required*/}
            {/*            value={author}*/}
            {/*            onChange={handleChange}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="form-group row">
                <label
                    htmlFor="commentBox"
                    className="col-sm-2 col-form-label"
                    hidden
                >
                    Ваш комментарий
                </label>
                <div className="col-sm-12">
            <textarea
                id="commentBox"
                rows="3"
                name="newCommentText"
                type="text"
                className="form-control"
                placeholder="Оставьте свой комментарий..."
                required
                value={newCommentText}
                onChange={handleChange}
            />
                    <button type="submit" className="btn btn-primary mt-4">
                        Отправить
                    </button>
                </div>
            </div>
        </form>
    );
}

// class Fm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             author: "",
//             newCommentText: "",
//         };
//     }
//
//     formSubmitHandler = (e) => {
//         e.preventDefault();
//
//         const { author, newCommentText } = this.state;
//         const { showAlert, addComment } = this.props;
//         const date = Date.now();
//
//         if (!author.trim() || !newCommentText.trim()) {
//             showAlert();
//             this.setState({
//                 author: "",
//                 newCommentText: "",
//             });
//             setTimeout(() => {
//                 showAlert();
//             }, 2000);
//             return;
//         }
//
//         const newComment = {
//             id: date,
//             author,
//             newCommentText,
//             date: new Date(date).toLocaleString(),
//         };
//
//         addComment(newComment);
//
//         this.setState({
//             author: "",
//             newCommentText: "",
//         });
//     };
//
//     handleChange = (event) => {
//         const { name, value } = event.target;
//
//         this.setState((prevState) => ({
//             ...prevState,
//             [name]: value,
//         }));
//     };
//
//     render() {
//         const { author, newCommentText } = this.state;
//         const { alert } = this.props;
//         return (
//             <form onSubmit={this.formSubmitHandler}>
//                 {alert && <Alert />}
//                 <div className="form-group row">
//                     <label
//                         htmlFor="commentAuthor"
//                         className="col-sm-2 col-form-label"
//                         hidden
//                     >
//                         Имя
//                     </label>
//                     <div className="col-sm-12">
//                         <input
//                             id="commentAuthor"
//                             name="author"
//                             type="text"
//                             className="form-control"
//                             placeholder="Введите свое Имя..."
//                             required
//                             value={author}
//                             onChange={this.handleChange}
//                         />
//                     </div>
//                 </div>
//                 <div className="form-group row">
//                     <label
//                         htmlFor="commentBox"
//                         className="col-sm-2 col-form-label"
//                         hidden
//                     >
//                         Ваш комментарий
//                     </label>
//                     <div className="col-sm-12">
//             <textarea
//                 id="commentBox"
//                 rows="3"
//                 name="newCommentText"
//                 type="text"
//                 className="form-control"
//                 placeholder="Оставьте свой комментарий..."
//                 required
//                 value={newCommentText}
//                 onChange={this.handleChange}
//             />
//                         <button type="submit" className="btn btn-primary mt-4">
//                             Отправить
//                         </button>
//                     </div>
//                 </div>
//             </form>
//         );
//     }
// }
//
// export default Form;