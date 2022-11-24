import { Link } from "react-router-dom";

function Navbar(){

return(
 
      <>
      
      <nav class="navbar navbar-expand-sm navbar-light bg-light">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#opciones">
      <span class="navbar-toggler-icon"></span>
    </button>
    

    <a class="navbar-brand" href="#">
      <img src="https://firebasestorage.googleapis.com/v0/b/cloud-94589.appspot.com/o/logo.png?alt=media&token=dbf1c7a5-7009-4a6e-b4b8-ea46501d7771" width="30" height="30" alt=""/>
    </a>
    

    <div class="collapse navbar-collapse" id="opciones">   
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link to="/" class="nav-link">Home</Link>
        
        </li>
        <li class="nav-item">
        <Link to="/menu" class="nav-link">DevOps</Link>
      
        </li>
        <li class="nav-item">
        <Link to="/contact" class="nav-link">Contact</Link>
        </li>
               
      </ul>
    </div>
  </nav>

      </>
)
}
export default Navbar;