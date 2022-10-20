
import {Routes, Route, Link} from 'react-router-dom'
import { Homepage} from './pages/Homepage'
import { Featurespage} from './pages/Featurespage'
import { Contactpage} from './pages/Contactpage'


function App() {
  return (
    <div className='app'>
    <header className='header'>
       <h3 className='masthead-brand'>Cover</h3>
       <nav className='nav'>
         <Link className='nav-link' to='/'>Home</Link>
            <Link className='nav-link' to='/features'>Features</Link>
            <Link className='nav-link' to='/contact'>Contact</Link>
       </nav>   
    </header>
   
   <Routes>
<Route path="/" element={<Homepage/>}/>
<Route path="/features" element={<Featurespage/>}/>
<Route path="/contact" element={<Contactpage/>}/>
   </Routes>
    </div>
  );
}

export default App;
