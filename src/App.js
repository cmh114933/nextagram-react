import React, { useState, useEffect } from 'react';
import './App.css';
import HomePage from './page/HomePage';
import { Route, Link, Switch } from 'react-router-dom';
import UserProfilePage from './page/UserProfilePage';
import axios from 'axios';


function App() {
  const [image, setImage] = useState(null)
  const [previewImage, setPreviewImage] = useState(null)

  const signIn = () => {
    axios({
      url: "https://insta.nextacademy.com/api/v1/login",
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        username: "testuser54321",
        password: "test1234",
      }
    }).then(response => {
      console.log(response)
      localStorage.setItem("token",response.data.auth_token)
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    let token = localStorage.getItem("token");
    // Formdata object to hold the image file to send to the server
    let formData = new FormData();
    // Append the key:value pair to the formData object
    formData.append("image", image);

    axios({
      method: "post",
      url: "https://insta.nextacademy.com/api/v1/images/", 
      data: formData,
      headers: {
        "Authorization": `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    }) 
  }

  const onUploadImage = (e) => {
    setImage(e.target.files[0])
    setPreviewImage(URL.createObjectURL(e.target.files[0]))
  }
  return (
    <div className="App">
      <Link to="/">
        <nav>
          <h3>Nextagram</h3>
        </nav>
      </Link>
      <button onClick={signIn}>Log In</button>
      <form onSubmit={onSubmit}>
        <input type="file" onChange={onUploadImage} />
        <input type="submit" value="upload" ></input>
      </form>
      <img src={previewImage} alt="preview"/>
      <Route path="/users/:id" component={UserProfilePage} />
      <Route exact path="/" component={HomePage} />
    </div>
  );
}

export default App;
