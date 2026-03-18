import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Getproducts from './components/Getproducts';
import Addproducts from './components/Addproducts';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Notfound from './components/Notfound';
import 'bootstrap/dist/css/bootstrap.min.css'
import Makepayment from './components/Makepayment';

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <h1>Welcome to Sokogarden</h1>
      </header>

      <nav>
        <Link to="/" className='btn btn-primary btn-sm'>Home</Link>
        <Link to="/addproducts" className='btn btn-success btn-sm m-1'>Add Products</Link>
        <Link to="/signin" className='btn btn-danger btn-sm m-1'>Signin</Link>
        <Link to="/signup" className='btn btn-info btn-sm m-1'>Signup</Link>
      </nav>
      
      {/* Below are our different routes together with the rendered components */}
      <Routes>
        <Route path='/' element={<Getproducts />} />
        <Route path='/addproducts' element={<Addproducts />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='*' element={<Notfound />} />
        <Route path='/makepayment' element={<Makepayment />} />
        
      </Routes>
    </div>
    </Router>
  );
}

export default App;
// react on Axios module in reactjs
// In ReactJS, Axios is commonly used to fetch data from APIs, send data to servers, and communicate with backend services. It is easier, more powerful and easier to manage responses and errors.
// Like for us, we can use axios to send data to the API we had for the users table in our database in this signup component
// For installing, we use npm install axios
// After installing we import it to the component, that is the signup component where it will be used, import axios from "axios";
// Axios works by sending http requests to the server and receiving responses.
// Some of the request types include
// GET - Retrieve data from a server
// POST - Send new data to a server
// PUT -	Update existing data
// DELETE -	Remove data from a server

// React components usually call Axios inside React Hooks like useEffect() when fetching data.

// for example, this is for sending data to our API, let's say after a user signs up
// axios.post("https://jsonplaceholder.typicode.com/users", {
//   name: "John",
//   email: "john@example.com"
// })
// .then(response => {
//   console.log(response.data);
// })
// .catch(error => {
//   console.log(error);
// });


// For fetching data
// import axios from "axios";
// import { useEffect, useState } from "react";

// function Users() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/users")
//       .then(response => {
//         setUsers(response.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>User List</h2>
//       {users.map(user => (
//         <p key={user.id}>{user.name}</p>
//       ))}
//     </div>
//   );
// }

// export default Users;
//  Explanation
// axios.get() sends a request to the API.
// response.data contains the data returned from the server.
// setUsers() stores the data in React state.
// useEffect() ensures the request runs when the component loads

// response = {
//   data: {}, - the actual data from the server
//   status: 200, - http status code
//   statusText: "OK", - 
//   headers: {}, - response headers
//   config: {} - request configuration
// }

// Incase of erros, let's say the server is down, or the API endpoint is wrong, or the internet connection fails, we use .catch() which handles erros
// axios.get("https://api.example.com/data")
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.log("Error:", error);
//   }); 