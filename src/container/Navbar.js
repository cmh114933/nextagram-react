import React from 'react'
import { Link } from "react-router-dom"
import AuthModal from './AuthModal'

export default () => {
  
  return (
    <nav style={{display: "flex", justifyContent: "space-between", backgroundColor: "grey"}}>
      <Link to="/">
        <nav>
          <h3>Nextagram</h3>
        </nav>
      </Link>
      <AuthModal />
    </nav>
  )
}