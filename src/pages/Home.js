import Cards from "../Cards";
import Description from "../Description";
import Footer from "../Footer";
import Partnerts from "../Partnerts";
import Toast from "../Toast";
export const Home = ()=>{
    return (
       <>
        <div class="container">
		
    <div id="carousel1" class="carousel slide" data-bs-ride="carousel">
      <ol class="carousel-indicators">
        <li data-bs-target="#carousel1" data-bs-slide-to="0" class="active"></li>
        <li data-bs-target="#carousel1" data-bs-slide-to="1"></li>
        <li data-bs-target="#carousel1" data-bs-slide-to="2"></li>
      </ol>
    
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/cloud-94589.appspot.com/o/bf.jpg?alt=media&token=6365b360-6971-4e28-8e64-c1e3c162d335" alt=""/>
            <div class="carousel-caption">
          
            </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/cloud-94589.appspot.com/o/bf1.jpg?alt=media&token=ece38e15-1dbc-4960-b1f7-a3014960351e" alt=""/>
            <div class="carousel-caption">
           
          
            </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/cloud-94589.appspot.com/o/bf3.jpg?alt=media&token=d6007882-4c12-4cac-8099-a88c3edbec6c" alt=""/>
            <div class="carousel-caption">
            
            </div>
        </div>
      </div>
       
      <a class="carousel-control-prev" href="#carousel1" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only"></span>
      </a>
      <a class="carousel-control-next" href="#carousel1" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only"></span>
      </a>
    </div>
    
</div>
<Cards
title="Nivel internacional"
subtitle="Validez internacional"
types="Modalidades"
type1="Online"
type2="Videoconferencia"
type3="Presencial"
certification="Cobertura"
certification1="CDMX y Republíca Mexicana"
/>
<Description
card1="XTNEGOCIO"
card2="Capacítate con nosotros"
card3="Capacitate en metodologías ágiles"
cardPOne="En tecnologías de la información, nos posicionamos como la mejor empresa, debido al continuo aprendizaje y conocimiento experiencia. Procuramos complementar nuestra enseñanza con recursos tecnológicos adicionales manteniéndonos a la vanguardia"
cardPTwo="Buscamos integrar la experiencia de los clientes con las capacitaciones disponibles, a fin de lograr una rápida y eficiente implementación en las instituciones para llevar a la práctica los conocimientos adquiridos"
cardPThree="Asi como la seguridad de tu información, mesa de servicio, desarrolladores y operadores, cybersecurity, ISO 27001"
/>
<Partnerts/>
<Toast/>
<Footer
branding="XTNEGOCIO"
address="Dirección: Calle Holbein, #135, Col. Noche Buena, Beni Juarez, C.P. 03720, CDMX"
titleSocial="Redes Sociales"
item1="Facebook"
item2="Instagram"
item3="Twitter"
item4="Linkedin"
links="Enlaces"
item6="Scrum"
item7="Agile"
item8="ISO 27001"
item9="ISO 9001"
item10="APPS"
item11="Podcast"
item12="Blog"
/>


       </>
    )
    
}
export default Home;