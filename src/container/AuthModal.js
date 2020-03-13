import React, {useState} from 'react'
import LogInForm from './LogInForm'
import SignUpForm from './SignUpForm'
import { useHistory } from 'react-router-dom'

export default () => {
  const [modalOpen, changeModalState] = useState(false)
  const [isLogin, changeForm] = useState(true)
  const history = useHistory()

  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token") !== null)

  const modalStyle = {
    display: modalOpen ? "block" : "none",
    height: '100vh',
    width: '100vw',
    backgroundColor: 'rgba(0,0,0,.5)',
    position: 'fixed',
    top: 0,
    left: 0,
    color: 'white'
  }
  const buttonClick = () => {
    changeModalState(!modalOpen)
  }
  const toLogin = () => {
    changeForm(true)
  }
  const toSignUp = () => {
    changeForm(false)
  }
  const closeModal = () => {
    changeModalState(false)
  }

  return (
    <div>
      {
        loggedIn
          ? <button onClick={() => {
            localStorage.removeItem("token")
            setLoggedIn(false)
            history.push("/")

          }}>Sign Out</button>
          : <button onClick={buttonClick}>Login</button>
      }
      <div style={modalStyle}>
        {
          isLogin ? 
          <div style={{width: '50%', margin: 'auto', color: 'black', 'backgroundColor': 'white'}}>
            <button onClick={closeModal}>X</button>
            <h1>LoginForm</h1> 
            <LogInForm setLoggedIn={setLoggedIn} closeModal={closeModal}/>
            <button onClick={toSignUp}>Go Signup</button>
          </div>
          : 
          <div style={{width: '50%', margin: 'auto', color: 'black', 'backgroundColor': 'white'}}>
            <button onClick={closeModal}>X</button>
            <h1>SignUp</h1>
            <SignUpForm />
            <button onClick={toLogin}>Go Login</button>
          </div>
        }
      </div>
    </div>
  )
}