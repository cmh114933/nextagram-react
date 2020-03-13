import React, { useEffect, useState } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"

export default () => {
  const [user, setUser] = useState({})
  const [images, setImages] = useState([])
  let token = localStorage.getItem("token")
  let history = useHistory()

  useEffect(() => {
    if(token){
      axios({
        url: "https://insta.nextacademy.com/api/v1/users/me",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }).then((response) => {
        console.log(response)
        setUser(response.data)
      }).catch(err => {
        console.log(err.response)
      })
  
      axios({
        url: "https://insta.nextacademy.com/api/v1/images/me",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }).then((response) => {
        console.log(response)
        setImages(response.data)
      }).catch(err => {
        console.log(err.response)
      })
    } else {
      history.push("/")
    }
    
  }, [])

  return (
    <div>
      <h1>My Profile Page</h1>
      <input type="file" />
      <img src={user.profile_picture} height="200px" width="200px"/>
      <div>
        {
          images.map((img) => {
            return <img src={img}  height="100px" width="100px"/>
          })
        }
      </div>
    </div>
  )
}