import React, { useState, useContext } from 'react';
import { render } from 'react-dom';
import './style.css';

const ProfileContext = React.createContext();
const ProfileProvider = (props) => {
  const profileData = {
    company: 'Progress',
    companyImage: 'https://svgshare.com/i/9ir.svg',
    url: 'https://www.telerik.com/kendo-react-ui/',
    userImage: 'https://i.imgur.com/Y1XRKLf.png',
    userName: 'Kendoken',
    fullName: 'Kendoken No Michi',
    team: 'KendoReact',
    changeTeam: (team) => (
      setProfile((profileData) => (
        {...profileData, team: `Kendo${team}`}
      ))
    )
  }
  const [profile, setProfile] = useState(profileData);
  return (
    <ProfileContext.Provider value={profile}>
      {props.children}
    </ProfileContext.Provider>
  )
}

const App = () => (
  <ProfileProvider>
    <Profile />
  </ProfileProvider>
);

const Profile = () => {
  const context = useContext(ProfileContext);
  return (
    <div className="profile">
      <img src={context.companyImage} />
      <User />
    </div>
  )
}

const User = () => {
  const context = useContext(ProfileContext);
  return (
    <div className="user">
      <a href={context.url}>
        <img src={context.userImage} width="138px" />
      </a>
      <h1 className="profile-userName">{context.userName}</h1>
      <p className="profile-fullName">({context.fullName})</p>
      <Team />
      <button className="profile-button"
        onClick={() => context.changeTeam('Angular')}>Angular</button>
      <button className="profile-button"
        onClick={() => context.changeTeam('Vue')}>Vue</button>
      <button className="profile-button"
        onClick={() => context.changeTeam('React')}>React</button>
    </div>
  )
}

const Team = () => {
  const context = useContext(ProfileContext);
  return (
    <div className="team">
      <p className="profile-team">{context.team}</p>
    </div>
  )
}

render(<App />, document.getElementById('root'));
