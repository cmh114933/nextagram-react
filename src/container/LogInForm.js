import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

export default (props) => {

  const {setLoggedIn, closeModal} = props
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios({
      url: "https://insta.nextacademy.com/api/v1/login",
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        username,
        password
      }
    }).then(
      (response) => {
        console.log(response)
        localStorage.setItem("token", response.data.auth_token)
        setLoggedIn(true)
        history.push("/profile")
        closeModal()
      }
    ).catch(
      (err) => {
        console.log(err.response)
      }
    )
  }


  return (
    <form style={{display: "flex", flexDirection: "column"}} onSubmit={handleSubmit}>
      <label>Username</label>
      <input type="text" onChange={(e)=> {setUsername(e.target.value)}} value={username}></input>
      <label>Password</label>
      <input type="password" onChange={(e)=> {setPassword(e.target.value)}} value={password}></input>
      <input type="submit" />
    </form>
  )
}