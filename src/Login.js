import ReactDOM from 'react-dom';
import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="mainScreen">
        <form action="#" className="memberForm">
          <h1>Welcome Back, Login Now</h1>
          <input
            className="formInput"
            id="nameInput"
            type="text"
            placeholder="Enter Name"
          ></input>
          <input
            className="formInput"
            id="mailInput"
            type="text"
            placeholder="Enter E-mail"
          ></input>
          <input
            className="formInput"
            id="passInput"
            type="password"
            placeholder="Enter Password"
          ></input>

          <button type="submit" className="formBtn">
            Login
          </button>
          <button type="button" className="formBtn">
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
