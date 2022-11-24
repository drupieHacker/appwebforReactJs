import React from "react";
const bgCard="#01579b";
const bgCardSecond="#1e88e5";
const colorTitle="#e8eaf6";
const bgText="#01579b";
function Clientes(props){
const clientesStyle={
    background:`${bgCard}`,
 

}
const aparienceColor={
    color:`${colorTitle}`,
}
const colorCardSecond={
    background:`${bgCardSecond}`,
}
const bgParra={
    background:`${bgText}`,
    padding:'10px',
    color:'#fafafa',
    marginTop:'10px',
    textAlign:'Justify'
}
    return(
    <>
<div class="container">   
    <div class="card-group mt-3">

      <div class="card text-center " >
        <div class="card-body" style={clientesStyle}>
          <h4 class="card-title" style={aparienceColor}>{props.card1}</h4>
          <p class="card-text" style={bgParra}>{props.cardPOne} </p>
      
        </div>
      </div>          

      <div class="card text-center ">
        <div class="card-body" style={colorCardSecond}>
          <h4 class="card-title" style={aparienceColor}>{props.card2}</h4>
          <p class="card-text" style={bgParra}>{props.cardPTwo}</p>
        
        </div>
      </div>          
  
      <div class="card text-center ">
        <div class="card-body"  style={clientesStyle}>
          <h4 class="card-title" style={aparienceColor}>{props.card3}</h4>
          <p class="card-text" style={bgParra}>{props.cardPThree} </p>
         
        </div>
      </div>          

    </div>
  </div> 
</>
)
}
export default Clientes;