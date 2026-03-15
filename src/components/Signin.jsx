import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signin = () => {

  // Define the two hooks for capturing/storing the users input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

// Declare 3 additional hooks
const [loading, setLoading] = useState("");
const [success, setSuccess] = useState("");
const [error, setError] = useState("");

// Below we have the useNavigate hook to redirect us to another page on successful login/signin
const navigate = useNavigate()

// Below is the function to add the signin function
const handleSubmit = async(e) =>{
  // Prevent the site from reloading
e.preventDefault()

//Update the loading hook with a message
setLoading("Please wait while we authenticate your account.")

try{
  // Create a formData object that will hold the email and the password
  const formdata = new FormData()

  // Insert/append the email and the password on the formData created.
  formdata.append("email", email);
  formdata.append("password", password)

  // interact with axios for the response
  const response = await axios.post("https://kbenkamotho.alwaysdata.net/api/signin", formdata);

  // Set the loading hook back to default
  setLoading("");

  // check whether the user exists as part of your response from the API
  if(response.data.user){
    // If user is there, definitely the details during signin are correct
    // setSuccess("Login successful")

     // Store user details in local storage
    localStorage.setItem("user", JSON.stringify(response.data.user));

    // If it is successful, let a person get redirected to another page
    navigate("/");
  }
  else{
    // User is not found, that means the credential entered on the form are incorrect
    setError("Login Failed: Please try again...")
  }
}
catch(error){
  // Set loading back to default
  setLoading("")

  // update the error hook with message
  setError("Oops, something went wrong. Try again...")
}
}

  return (
    <div className='row justify-content-center mt-4'>
        <div className="col-md-6 card shadow p-4">
          <h1 className='text-primary'>Sign In</h1>

          <h5 className='text-info'>{loading}</h5>
          <h3 className='text-success'>{success}</h3>
          <h4 className="text-danger">{error}</h4>

          <form onSubmit={handleSubmit}>
            <input type="email"
            placeholder='Enter the email address here...'
            className='form-control'
            required
            value={email} 
            onChange={(e) => setEmail(e.target.value)}/> <br />

            {/* {email} */}

            <input type="password"
            placeholder='Enter the password here...' 
            className='form-control'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)} /> <br />

            {/* {password} */}

            <input type="submit"
            value="Signin" 
            className='btn btn-primary'/>
          </form>
        </div>
    </div>
  )
}

export default Signin;

// How can you store the users details on the local storage
