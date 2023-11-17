import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import NavbarContainer from './Components/Navbar/NavbarContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';

const App = () => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <NavbarContainer />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path="/dialogs" element={<DialogsContainer />}/>
          <Route path="/profile" element={<ProfileContainer/>} >
          <Route path= ":useId" element={<ProfileContainer/>}/> 
          </Route>
          <Route path="/news" Component={News} />
          <Route path="/music" Component={Music} />
          <Route path="/settings" Component={Settings} />
          <Route path="/users" element={<UsersContainer/>} />
          <Route path="/login" Component={Login} />
        </Routes>
      </div>
    </div>
  );
};

export default App;




