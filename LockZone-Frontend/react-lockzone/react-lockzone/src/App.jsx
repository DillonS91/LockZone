import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { Home, Login, Websites, Accounts } from './pages';
import { Navigation } from './component'
import 'bootstrap/dist/css/bootstrap.min.css'

export const  App = () => {
  return (
    <BrowserRouter>
      <Navigation>
        <section className ='nav-section'>
          <div class= "float-container">
          <div className = 'nav-item'>
            <Link className = 'nav-item' to='/'>Login</Link>
          </div>
          <div className = 'nav-item'>
            <Link className = 'nav-item' to='/home'>Home</Link>
          </div>
          <div className = 'nav-item'>
            <Link className = 'nav-item' to='/websites'>Websites</Link>
          </div>
          <div className = 'nav-item'>
            <Link className = 'nav-item' to='/accounts'>Accounts</Link>
          </div>
          </div>
        </section>
      </Navigation>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/websites' element={<Websites/>}/>
        <Route path='/accounts' element={<Accounts/>}/>
      </Routes>
    </BrowserRouter>    
  );
}


