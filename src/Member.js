import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';

const Member = (props) => (
  <tr className="dashRow">
    <td>
      <input type="checkbox"></input>
    </td>
    <td>{props.members.name}</td>
    <td>{props.members.company}</td>
    <td>{props.members.status}</td>
    <td>{props.members.lUpdate}</td>
    <td>{props.members.note}</td>
    <td>
      <i className="fa fa-trash" onClick={props.onDelete}></i>
    </td>
  </tr>
);

export default Member;
