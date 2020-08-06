import React from "react";
import {Form} from "./Components/Form/Form";
import CommentList from "./Components/Comment/CommentList";
import { Header } from "./Components/Header";

const App = (props) => {
    debugger
  return (
      <main className="container">
        <Header />
        <Form state={props.state}
            dispatch={props.dispatch}
        />
        <CommentList comments={props.state.comments}/>
      </main>
  );
}

export default App;
