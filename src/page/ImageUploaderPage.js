import React, { useState } from 'react'
import axios from 'axios'

export default () => {
  const [imageFile, setImageFile] = useState(null)
  const [previewImage, setPreviewImageUrl] = useState("")
  const onChange = (e) => {
    setPreviewImageUrl( URL.createObjectURL(e.target.files[0]))
    setImageFile(e.target.files[0])
  }

  const onSubmit = (e) => {
    e.preventDefault()

    let formData = new FormData()

    formData.append("image", imageFile)

    axios({
      method: "post",
      url: "https://insta.nextacademy.com/api/v1/images/",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      data: formData
    }).then(
      res => {
        console.log(res)
      }
    ).catch( 
      err => {
        console.log(err.response)
      }
    )
  }

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <h1>Your file is: {imageFile && imageFile.name}</h1>
      <img src={previewImage} height="200px" width="200px"/>
      <form onSubmit={onSubmit}>
      <input type="file" onChange={onChange}/>
      <input type="submit" disabled={!imageFile}/>
      </form>
    </div>
  )
}