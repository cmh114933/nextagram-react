import React, { useState, useEffect } from 'react';
import axios from "axios"
import LoadingIndicator from '../component/LoadingIndicator';
import UserImages from '../container/UserImages';
import { Link, Route } from 'react-router-dom';
import UserProfilePage from './UserProfilePage';


const HomePage = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios.get("https://insta.nextacademy.com/api/v1/users/")
    .then((response) => {
      setIsLoading(false)
      setUsers(response.data)
    })
  }, [])


  return (
    <div >
      {
        isLoading
          ? <LoadingIndicator width={400} height={400} color="#57f3a5"/>
          : users.map((user) => {
          return (
            <div style={{display:"flex", alignItems: "stretch"}}>
              <div>
                <Link to={`/users/${user.id}`}>
                  <h4>{user.username}</h4>
                </Link>
                <img src={user.profileImage} className="profile-avatar"/>
              </div>
              <UserImages userId={user.id}/>
            </div>
          )
        })
      }
    </div>
  )
}

export default HomePage