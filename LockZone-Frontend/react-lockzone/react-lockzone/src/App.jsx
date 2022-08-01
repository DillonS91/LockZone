import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { Home, Login, Websites, Accounts } from './pages';
import { Navigation } from './component'

export const  App = () => {
  return (
    <BrowserRouter>
      <Navigation>
        <section>
          <div>
            <Link to='/'>Login</Link>
          </div>
          <div>
            <Link to='/home'>Home</Link>
          </div>
          <div>
            <Link to='/websites'>Websites</Link>
          </div>
          <div>
            <Link to='/accounts'>Accounts</Link>
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


