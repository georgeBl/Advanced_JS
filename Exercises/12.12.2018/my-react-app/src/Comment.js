import React from 'react';


class Comment extends React.Component {
  constructor(props){
    super(props);

    this.state = {flag: false };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState(
      prevState =>({
        flag: !prevState.flag
      }));
  }
  render(){
    let className = 'tile is-child box ';
    if (!this.state.flag) {
      className += 'has-background-primary';
  } else{
      className += 'has-background-danger';
  }
    return (
      <div className={className}>
        <p className="title">{this.props.name}</p>
        <p className="subtitle">{this.props.email}</p>
        <p>{this.props.body}</p>
        <br />
        <br />
        <button className="button" onClick={this.handleClick}>Flag this comment if is bad</button>
      </div>
    )}
}

export default Comment
