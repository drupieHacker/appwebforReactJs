import React from "react";
import './Partnerts.css';
const img1='https://firebasestorage.googleapis.com/v0/b/cloud-94589.appspot.com/o/1000X1000-AGILE.png?alt=media&token=19eca42c-fba4-4ceb-afbd-e3798f115ade'
const img2='https://firebasestorage.googleapis.com/v0/b/cloud-94589.appspot.com/o/1000X1000-CERTIPROF.png?alt=media&token=92de5607-0f4f-44cb-b666-02fdadb96aee'
const img3='https://firebasestorage.googleapis.com/v0/b/cloud-94589.appspot.com/o/1000X1000-CERTJOIN.png?alt=media&token=ac61ebe3-016e-4acd-8b49-27e0c6094f39'
const img4='https://firebasestorage.googleapis.com/v0/b/cloud-94589.appspot.com/o/1000X1000-ICEM.png?alt=media&token=8d72c3eb-8535-49f8-a0af-983e4305c544'
const img5='https://firebasestorage.googleapis.com/v0/b/cloud-94589.appspot.com/o/1000X1000-PEOPLECERT.png?alt=media&token=317f9866-b441-4360-81dc-45ece0fd68b6'
const img6='https://firebasestorage.googleapis.com/v0/b/cloud-94589.appspot.com/o/ISACA.png?alt=media&token=d201ab39-7c81-476f-bb3d-a791b3bf1a04'
function Partnerts(){

    return(
<>
<div className="container titlePartnerts">
<h1>Partnerts</h1>
</div>
      <div className="cards_Partnerts">
      
        <figure>
<img src={img1}/>
        </figure>
        <figure>
        <img src={img2}/>
        </figure>
        <figure>
        <img src={img3}/>
        </figure>
        <figure>
        <img src={img4}/> 
        </figure>
        <figure>
        <img src={img5}/> 
        </figure>
        <figure>
        <img src={img6}/> 
        </figure>
        </div>  
</>
    )
}
export default Partnerts;