import ReactDOM from 'react-dom';
import React from 'react';
import PopUp from './PopUp';
import Member from './Member';
import './style.css';

let id = 0;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
      dropDown: 'none',
      popDisplay: 'none',
    };
  }

  addMembers = () => {
    const pName = document.getElementById('nameInput').value;
    const pCompany = document.getElementById('companyInput').value;
    const pStatus = document.getElementById('statusInput').value;
    const pUpdate = document.getElementById('updateInput').value;
    const pNote = document.getElementById('noteInput').value;

    if (
      pName != '' &&
      pCompany != '' &&
      pStatus != '' &&
      pUpdate != '' &&
      pNote != ''
    ) {
      document.getElementById('overLay').style.display = 'none';
      this.setState({
        members: [
          ...this.state.members,
          {
            name: pName,
            company: pCompany,
            status: pStatus,
            lUpdate: pUpdate,
            note: pNote,
            id: id++,
          },
        ],
        popDisplay: 'none',
      });
    } else {
      alert('All Fields are Required');
    }
  };

  showPop = () => {
    if (this.state.popDisplay == 'none') {
      document.getElementById('overLay').style.display = 'block';

      this.setState({
        popDisplay: 'block',
      });
    } else {
      document.getElementById('overLay').style.display = 'none';
      this.setState({
        popDisplay: 'none',
      });
    }
  };

  hideDrop = () => {
    if (this.state.dropDown == 'none') {
      this.setState({
        dropDown: 'block',
      });
    } else {
      this.setState({
        dropDown: 'none',
      });
    }
  };

  sortStatus = (value) => {
    this.setState({
      members: this.state.members.filter((members) => members.status == value),
    });
  };

  deleteMember = (key) => {
    this.setState({
      members: this.state.members.filter((member) => member.id != key),
    });
  };

  render() {
    return (
      <div className="mainScreen">
        <div id="overLay"></div>
        <div className="header">
          <h2>{this.state.members.length} Team Members</h2>
          <button onClick={() => this.showPop()}>
            Add Members <i className="fa fa-plus"></i>
          </button>
        </div>
        <PopUp
          hidePop={() => this.showPop()}
          addMember={() => this.addMembers()}
          display={this.state.popDisplay}
        />
        <hr></hr>

        <div className="dashBoard">
          <div className="menuBar">
            <button className="optionBtn" onClick={() => this.hideDrop()}>
              Company<i className="fa fa-angle-down"></i>
            </button>
            <button
              className="sortBtn"
              onClick={() => this.sortStatus('Active')}
            >
              Status <i className="fa fa-angle-down"></i>
            </button>

            <div className="dropDown" style={{ display: this.state.dropDown }}>
              <ul className="dropList">
                {this.state.members.map((member) => (
                  <li className="dropItem">{member.company}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <table>
          <tbody>
            <tr className="dashHead">
              <th>
                <input type="checkbox"></input>
              </th>
              <th>Name</th>
              <th>Company</th>
              <th>Status</th>
              <th>Last Updated</th>
              <th>Notes</th>
            </tr>

            {this.state.members.map((members) => (
              <Member
                members={members}
                onDelete={() => this.deleteMember(members.id)}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
