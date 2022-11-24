import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Navbar  from './Navbar';
import {Home} from './pages/Home';
import {Menu} from './pages/Menu';
import {Contact} from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
<Route path="/"  element={<Home/>}/>
<Route path="/menu"  element={<Menu/>}/>
<Route path="/contact"  element={<Contact/>}/>
{/* <Route path="*"  element={<h1>Bienvenido a xtnegocio</h1>}/> */}

        </Routes>
      </Router>
    </div>
  );
}

export default App;
