//import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
//import Login from './components/Login';
//import Register from './components/Register';
//import { ThemeProvider } from "@mui/material/styles";

function App() {
  //const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <div>
      <Router>
        <Routes>
          {/* <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} /> */}
          <Route path="/" element={<Home/>} />

          {/* <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} >
          </Route>
          <Route 
          path="/welcome" 
          element={isAuthenticated ? <Welcome 
            setIsAuthenticated={setIsAuthenticated} /> : 
            <Navigate to="/login" />} >
          </Route>*/}
      
          
        </Routes>
    </Router>
      </div>
    </>
  )
}

export default App
