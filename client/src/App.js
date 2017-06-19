import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      listMembers: '',
      msg: ''
    }
  }

  getMembers = () => {
    fetch("/api/memberList")
    .then((res) => {
      return res.json();
    }).then( (json) => {
      this.setState({
        listMembers: json.members
      });
    })
    .catch((err) => {
      console.log("error", err);
    });
  }

  testApiCall = () => {
    fetch("/api/genericCall")
    .then((res) => {
      return res.json();
    }).then ( (json) => {
      this.setState({
        msg: json.msg
      });
    })
  }

  render() {
    let members = this.state.listMembers;
    if(this.state.listMembers){
      return (
        <div>
          <h1>Mailing List Members</h1>
          <ul>
            {
              members.map((member, index) =>
                <li key={index}>{`${member.email_address}`}</li>
              )
            }
          </ul>
          <button onClick={this.getMembers}>Get Members</button>
          <hr/>
          <button onClick={this.testApiCall}>Test Api Call</button>
          <h1>{this.state.msg}</h1>
        </div>
      );
    }
    return (
      <div>
        <h1>Mailing List Members</h1>
        <button onClick={this.getMembers}>Get Members</button>
        <hr/>
        <button onClick={this.testApiCall}>Test Api Call</button>
        <h3>{this.state.msg}</h3>
      </div>
    );
  }
}

export default App;
