import React from "react";
import ReactDOM from "react-dom";

const users = [
  {
    name: "John",
    age: 32,
    image: "http://gradshow.iadt.ie/assets/CC3/Headshot/N00153498_Profile.jpg"
  },
  {
    name: "Mary",
    age: 22,
    image: "http://gradshow.iadt.ie/assets/CC3/Headshot/N00153498_Profile.jpg"
  },
  {
    name: "Sue",
    age: 44,
    image: "http://gradshow.iadt.ie/assets/CC3/Headshot/N00153498_Profile.jpg"
  }
];

//User Component - FUNCTION
function User(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p style={{ color: "red" }}>{props.age}</p>
      <img src={props.image} width="100px" height="100px" />
    </div>
  );
}

//User Component - CLASS
class User2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p style={{ color: "red" }}>{this.props.age}</p>
        <img src={this.props.image} width="100px" height="100px" />
      </div>
    );
  }
}

const userList = users.map(u => (
  <User2 name={u.name} age={u.age} image={u.image} />
));

ReactDOM.render(<div>{userList}</div>, document.getElementById("root"));

function tick() {
  const element = (
    <div>
      <h1>Hello world</h1>
      <h2>It is {new Date().toLocaleString()}</h2>
    </div>
  );
  return element;
}
setInterval(tick, 100);
