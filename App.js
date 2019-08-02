import React from "react";
import Popup from "reactjs-popup";
export default class extends React.Component {
  state = {person: null};
  async componentDidMount() {
    const url = "https://randomuser.me/api/?results=60";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results });}
  render() {
    if (!this.state.person) {return <div>loading...</div>;}
    return this.state.person.map(e => 
      <Popup trigger={
        <button className="btn-abrir-popup" position="right center">
          <div className="profile post" >
            <img src={e.picture.medium} className="img" alt={e.name.fisrt}/>
            <div className="name" >
            {e.name.first}&nbsp;
            {e.name.last }
            </div>
          </div> 
        </button>}>
        <div className="popup">
          <div className="profile-active" >
            <img src={e.picture.large} className="img-active" alt={e.name.fisrt}/>
            <div className="cont-name-active" >
              <div className="name-active" ><p><b >Name: </b>{e.name.first}&nbsp;{e.name.last }</p></div>
              <div className="name-active" ><p><b >State: </b>{e.location.city} &nbsp;{e.location.state}</p></div>
              <div className="name-active" ><p><b >Email: </b>{e.email}</p></div>
              <div className="name-active" ><p><b >Password: </b>{e.login.password}</p></div>
              <div className="name-active" ><p><b >Username: </b>{e.login.username}</p></div>
              <div className="name-active" ><p><b >Age: </b>{e.dob.age}</p></div>
            </div>
          </div>
        </div>
      </Popup>
    )
  }
}
