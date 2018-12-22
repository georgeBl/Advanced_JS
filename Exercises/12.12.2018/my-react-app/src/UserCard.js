import React from 'react';

class UserCard extends React.Component{
  constructor(props){
    super(props);
    this.state = {likes: 0};
    this.handleClick = this.handlClick.bind(this);
  }

  handleClick(){
    this.setState(prevState=>({likes: prevState.likes +1}));
  }
  render(){
    return(
      <div className="column is-4">
                 <div className="card">
                   <div className="card-image">
                     <figure className="image is-4by3">
                       <img src={this.props.picture.large} alt="Profile picture" />
                     </figure>
                   </div>
                   <div className="card-content">
                     <div className="media">
                       <div className="media-left">
                         <figure className="image is-48x48">
                           <img
                             src={this.props.picture.thumbnail}
                             alt="Thumbnail profile picture"
                           />
                         </figure>
                       </div>
                       <div className="media-content">
                         <p className="title is-4">
                           {this.props.name.first}
                           {this.props.name.last}
                         </p>
                       </div>
                     </div>
                     <div className="content">
                       {this.props.quote}
                       <br />
                     </div>
                     <p>Likes: {this.state.likes}</p>
                     <button className="button is-primary" onClick={this.handleClick}>Like</button>
                   </div>
                 </div>
               </div>
    );
  }
}

export default UserCard
