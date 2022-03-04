import ReactDOM from 'react-dom';
import { Outlet, Link } from 'react-router-dom';
import React from 'react';
import App from './App';
import Form from './Form';

class Register extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     loginArray: [
  //       {
  //         formTitle: 'Welcome Back, Login Now',
  //         formBtnTitle: 'Login Now',
  //         placeHolders: [
  //           { name: 'Name', value: 'Enter Name' },
  //           { name: 'Password', value: 'Enter Password' },
  //         ],
  //       },
  //     ],
  //   };
  // }

  render() {
    return (
      <div className="mainScreen">
        <form action="#" className="memberForm">
          <h1>Register Now</h1>
          <input
            className="formInput"
            id="nameInput"
            type="text"
            placeholder="Enter Name"
          ></input>
          <input
            className="formInput"
            id="contactInput"
            type="text"
            placeholder="Enter Contact No."
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
            Register
          </button>
          <button type="button" className="formBtn">
            Cancel
          </button>
          <Link to="/login" style={{ color: 'white', margin: '5px' }}>
            Login
          </Link>
          <Link to="/home" style={{ color: 'white', margin: '5px' }}>
            Home
          </Link>
        </form>
      </div>
    );
  }
}

export default Register;
