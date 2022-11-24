import React from "react";
import "./Cards.css";
function Cards(props){
return(
    <>
   <div className="Group_Cards">
<article>
   <span></span>
   <h1>{props.title}</h1>
    <p>{props.subtitle}</p>
</article>
<article>
   <span></span>
   <h1>{props.types}</h1>
   <ul>
    <li>{props.type1}</li>
    <li>{props.type2}</li>
    <li>{props.type3}</li>
   </ul>
</article>
<article>
   <span></span>
   <h1>{props.certification}</h1>
    <p>{props.certification1}</p>
</article>
   </div>
    </>
)
}
export default Cards;