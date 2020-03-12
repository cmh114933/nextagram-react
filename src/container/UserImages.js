import React, { useEffect, useState } from 'react'
import axios from "axios"
import LoadingIndicator from '../component/LoadingIndicator'


const UserImages = (props) => {
  const {userId} = props
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios.get(`https://insta.nextacademy.com/api/v1/images?userId=${userId}`)
    .then((response) => {
      setIsLoading(false)
      setImages(response.data)
    })
  }, [])

  return (
    <div style={
      {
        flex: 1,
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap"
      }}>
        {
          isLoading 
            ? <LoadingIndicator height={150} width={150} color={`rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`}/>
            : images.map((img) => {
              return <img src={img} width={100} height={100}/>
            })
        }
    </div>
  )
}


export default UserImages