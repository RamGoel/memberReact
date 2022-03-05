import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import React from 'react';
import App from './App';
import Form from './Form';

let id = 0;
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [{ email: 'ashok', password: 'pass' }],
      regView: '',
      loginView: 'none',
      homeView: 'none',
    };
  }

  //handling user regsitration
  registerUser = () => {
    const uName = document.getElementById('nameInput').value;
    const uContact = document.getElementById('contactInput').value;
    const uMail = document.getElementById('mailInput').value;
    const uPassword = document.getElementById('passInput').value;

    // if (
    //   uName.length != 0 &&
    //   uContact.length != 0 &&
    //   uMail.length != 0 &&
    //   uPassword.length != 0
    // ) {
      this.setState({
        users: [
          ...this.state.users,
          {
            name: uName,
            email: uMail,
            password: uPassword,
            phone: uContact,
            id: id++,
          },
        ],
      });

      console.log(this.state.users);
      this.hideAll();
    // } else {
    //   alert('All Fields are Required');
    // }
  };

  //handling view Login page
  showLogin = () => {
    if (this.state.loginView == 'none') {
      this.setState({
        loginView: '',
        regView: 'none',
      });
    } else {
      this.setState({
        loginView: 'none',
        regView: '',
      });
    }
  };

  //showinghomePage
  hideAll = () => {
    this.setState({
      regView: 'None',
      loginView: 'none',
      homeView: '',
    });
  };

  //handling user login
  loginUser = (id, pass) => {
    const user = this.state.users.find((element) => element.email == id);

    if (user != null && user.password == pass) {
      {
        this.hideAll();
      }
    } else {
      alert('No Users Found');
    }
  };

  render() {
    return (
      <div>
        <App view={this.state.homeView} />
        <div className="mainScreen" style={{ display: this.state.regView }}>
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

            <button
              type="submit"
              className="formBtn"
              onClick={() => this.registerUser()}
            >
              Register
            </button>
            <button type="button" className="formBtn">
              Cancel
            </button>
            <button
              className="formBtn"
              type="button"
              onClick={() => this.showLogin()}
            >
              Already Registered, Login
            </button>
          </form>
        </div>

        <div className="mainScreen" style={{ display: this.state.loginView }}>
          <form action="#" className="memberForm">
            <h1>Welcome Back, Login Now</h1>
            <input
              className="formInput"
              id="loginMailInput"
              type="text"
              placeholder="Enter E-mail"
            ></input>
            <input
              className="formInput"
              id="loginPassInput"
              type="password"
              placeholder="Enter Password"
            ></input>

            <button
              type="submit"
              className="formBtn"
              onClick={() =>
                this.loginUser(
                  document.getElementById('loginMailInput').value,
                  document.getElementById('loginPassInput').value
                )
              }
            >
              Login
            </button>
            <button type="button" className="formBtn">
              Cancel
            </button>
            <button
              className="formBtn"
              type="button"
              onClick={() => this.showLogin()}
            >
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
