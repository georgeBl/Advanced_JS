import React from "react";
import ReactDOM from "react-dom";
// import data from "./data";
// import "bulma/css/bulma.css";

class Clicky extends React.Component {
  constructor(props) {
    super(props);

    this.state = { clickCount: 0, text: "yoyo" }; //can have more variables in
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      clickCount: prevState.clickCount + 1,
      text: "clicked"
    }));
    console.log("clicked");
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.clickCount} times {this.state.text}{" "}
        </h1>
        <button onClick={this.handleClick}>
          My name is {this.props.name} click me I love to be clicked
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <Clicky name={"Click Jnr"} />
  </div>,
  document.getElementById("root")
);

//
// const users = data.results;
//
// const userList = users.map(u => (
//   <User key={u.name.first} name={u.name} quote={u.quote} picture={u.picture} />
// ));

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello world</h1>
//       <h2>It is {new Date().toLocaleString()}</h2>
//     </div>
//   );
//   return element;
// }
// setInterval(tick, 100);

//User Component - CLASS
// class User2 extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     return (
//       <div>
//         <h2>
//           {this.props.name.first} {this.props.name.last}
//         </h2>
//         <p style={{ color: "red" }}>{this.props.quote}</p>
//         <img src={this.props.picture.large} width="100px" height="100px" />
//       </div>
//     );
//   }
// }

// //User Component - FUNCTION
// function User(props) {
//   return (
//     <div className="column is-4">
//       <div className="card">
//         <div className="card-image">
//           <figure className="image is-4by3">
//             <img src={props.picture.large} alt="Profile picture" />
//           </figure>
//         </div>
//         <div className="card-content">
//           <div className="media">
//             <div className="media-left">
//               <figure className="image is-48x48">
//                 <img
//                   src={props.picture.thumbnail}
//                   alt="Thumbnail profile picture"
//                 />
//               </figure>
//             </div>
//             <div className="media-content">
//               <p className="title is-4">
//                 {props.name.first}
//                 {props.name.last}
//               </p>
//             </div>
//           </div>
//           <div className="content">
//             {props.quote}
//             <br />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
//
// ReactDOM.render(
//   <section>
//     <div className="container">
//       <div className="columns is-multiline">{userList}</div>
//     </div>
//   </section>,
//   document.getElementById("root")
// );
