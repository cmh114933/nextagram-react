import React, { useState, useEffect } from 'react';
import './App.css';
import HomePage from './page/HomePage';
import { Route, Link, Switch } from 'react-router-dom';
import UserProfilePage from './page/UserProfilePage';
import axios from 'axios';
import Navbar from './container/Navbar';
import Modal from './container/AuthModal';
import MyProfilePage from './page/MyProfilePage';
import ImageUploaderPage from './page/ImageUploaderPage';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Route path="/users/:id" component={UserProfilePage} />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/profile" component= {MyProfilePage} />
      <Route exact path="/upload" component= {ImageUploaderPage} />
    </div>
  );
}

export default App;
