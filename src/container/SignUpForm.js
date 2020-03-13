import React, { useState } from 'react'
import axios from 'axios'

export default () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
 

  const handleSubmit = (e) => {
    e.preventDefault()
    axios({
      url: "https://insta.nextacademy.com/api/v1/users/",
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        username,
        email,
        password
      }
    }).then(
      (response) => {
        console.log(response)
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
      <label>Email</label>
      <input type="text" onChange={(e)=> {setEmail(e.target.value)}} value={email}></input>
      <label>Password</label>
      <input type="password" onChange={(e)=> {setPassword(e.target.value)}} value={password}></input>
      <label>Confirm Password</label>
      <input type="password" onChange={(e)=> {setConfirmPassword(e.target.value)}} value={confirmPassword}></input>
      <input type="submit" />
    </form>
  )
}