import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';




//Add Member PopUp
const PopUp = (props) => (
  <div style={{ display: props.display }}>
    <form action="#" className="memberForm">
      <h1>Add Member</h1>
      <input
        className="formInput"
        id="nameInput"
        type="text"
        placeholder="Enter Name"
      ></input>
      <input
        className="formInput"
        id="companyInput"
        type="text"
        placeholder="Enter Company"
      ></input>
      <input
        className="formInput"
        id="statusInput"
        type="text"
        placeholder="Enter Status"
      ></input>
      <input
        className="formInput"
        id="updateInput"
        type="date"
        placeholder="Enter Last Updated"
      ></input>
      <input
        className="formInput"
        id="noteInput"
        type="text"
        placeholder="Enter Notes"
      ></input>

      <button type="submit" className="formBtn" onClick={props.addMember}>
        Add Member
      </button>
      <button type="button" className="formBtn" onClick={props.hidePop}>
        Cancel
      </button>
    </form>
  </div>
);

export default PopUp;
