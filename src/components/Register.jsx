import React from 'react'
import { Link } from 'react-router-dom'
export default function Register() {
  return (
    <div>
      <h3>Register</h3>
      <p><input type="text" placeholder='Name' /></p>
      <p><input type="text" placeholder='Email' /></p>
      <p><input type="password" placeholder='Password'/></p>
      <p><button>Submit</button></p>
      <p>
        <Link to="/login">Already a memeber? Login here</Link>
      </p>
    </div>
  )
}
