import React from "react";
import ReactDOM from "react-dom";
// import data from "./data";
import "bulma/css/bulma.css";
import axios from 'axios';
import Comment from './Comment';

class CommentGrid extends React.Component{
  constructor(props){
    super(props);

    this.state = {comments: []};
  }

  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/comments") //add link there
    .then(response =>{
      console.log(response);
      this.setState({comments: response.data});
    })
    .catch(error =>{console.log(error);});
  }

  render(){
    const commentList = this.state.comments.map(c => (
      <Comment key={c.id} name={c.name} email={c.email} body={c.body}/>
    ));
    return(
      <div className="columns is-centered"><div className="tile is-parent is-5 is-vertical">{commentList}</div></div>


    )
  }
}
ReactDOM.render(
  <CommentGrid />,
  document.getElementById("root")
);
