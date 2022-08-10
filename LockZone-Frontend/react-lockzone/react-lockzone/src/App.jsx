import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { Home, Update, Websites, Accounts, Login, SignUp } from './pages';
import { Navigation } from './component'
import { useCookies } from "react-cookie";
import axios from 'axios';
import {useEffect} from 'react';
import {Nav,Container,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


function App(){
  const[cookies, setCookie, removeCookie] = useCookies('Authority');
  axios.defaults.crossDomain=true
  axios.defaults.withCredentials = true
  
  const logout = async() =>{
    await fetch("http://localhost:8080/logout",{
      mode: "no-cors"
    })
    .then(res =>{
      removeCookie("Authority")
      setCookie("JSESSIONID", undefined)
      removeCookie("Master")
      removeCookie("username")
    })
  }

  useEffect(() =>{
    if(window.location.href.includes('/login') & cookies['Authority'] !== undefined) {
      window.location.href = "http://localhost:3000/home"
    }
  },[])

  if(cookies["Authority"] === "ROLE_USER"){
    return(
      <>
        <BrowserRouter>
          <Navigation>
            {/* <section className ='nav-section'> */}
            <Container fluid>
                <Nav as="h1" variants="tabs">
                  {/* <div className = 'nav-item'>
                    <Link className = 'nav-item' to='/'>Update</Link>
                  </div> */}
                  <div className = 'nav-item'>
                    <Link className = 'nav-item' to='/home'>Home</Link>
                  </div>
                  <div className = 'nav-item'>
                    <Link className = 'nav-item' to='/websites'>Websites</Link>
                  </div>
                  {/* <div className = 'nav-item'>
                    <Link className = 'nav-item' to='/accounts'>Accounts</Link>
                  </div> */}
                </Nav>
                <Nav>
                  <Button onClick={() => { logout()}} href="/home" variant="danger">Logout</Button>
                </Nav>
            </Container>
          </Navigation>
          <Routes>
            <Route path='/update' element={<Update/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/websites' element={<Websites/>}/>
            <Route path='/accounts' element={<Accounts/>}/>
          </Routes>
        </BrowserRouter>   
      </>
    );
  }else if(cookies["Authority"] === undefined){
    return(
      <>
      <BrowserRouter>
          <Navigation>
            {/* <section className ='nav-section'> */}
            <Container fluid>
                <Nav as="h1" variants="tabs">
                  {/* <div className = 'nav-item'>
                    <Link className = 'nav-item' to='/'>Update</Link>
                  </div> */}
                  <div className = 'nav-item'>
                    <Link className = 'nav-item' to='/home'>Home</Link>
                  </div>
                  
                  {/* <div className = 'nav-item'>
                    <Link className = 'nav-item' to='/websites'>Websites</Link>
                  </div> */}
                  {/* <div className = 'nav-item'>
                    <Link className = 'nav-item' to='/accounts'>Accounts</Link>
                  </div> */}
                </Nav>
                <Nav>
                <div classname = 'nav-item'>
                    <Link className = 'nav-item' to='/signup'>Sign Up</Link>
                  </div>
                  <div classname = 'nav-item'>
                    <Link className = 'nav-item' to='/login'>Login</Link>
                  </div>
                </Nav>
            </Container>
          </Navigation>
          <Routes>
            <Route path='/update' element={<Update/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/websites' element={<Websites/>}/>
            <Route path='/accounts' element={<Accounts/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
          </Routes>
        </BrowserRouter>   
      </>
    )
  }
}
export default App;