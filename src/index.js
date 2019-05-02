import React from 'react';
import { render } from 'react-dom';
import './style.css';

const profileData = {
  company: 'Progress',
  companyImage: 'https://svgshare.com/i/9ir.svg',
  url: 'https://www.telerik.com/kendo-react-ui/',
  userImage: 'https://i.imgur.com/Y1XRKLf.png',
  userName: 'Kendoken',
  fullName: 'Kendoken No Michi',
  team: 'KendoReact'
}

const App = () => (
  <Profile data={profileData} />
)

const Profile = (props) => (
  <div className="profile">
    <img src={props.data.companyImage}/>
    <User data={props.data} />
  </div>
)

const User = (props) => {
  return (
    <div className="user">
      <a href={props.data.url}>
        <img src={props.data.userImage} width="138px" />
      </a>
      <h1 className="profile-userName">{props.data.userName}</h1>
      <p className="profile-fullName">({props.data.fullName})</p>
      <Team data={props.data} />
    </div>
  )
}

const Team = (props) => {
  return (
    <div className="team">
      <p className="profile-team">{props.data.team}</p>
    </div>
  )
}

render(<App />, document.getElementById('root'));
