import React from "react";
function Footer(props){
    const bgFooter='#0d47a1';
    const colorTextForFooter='#fafafa';
    const backgroundParragraphFooter="#1e88e5";
 const bgFooterAparience={
    background:`${bgFooter}`,
 }
 const pColor={
    color:"#fafafa",
    textDecoration:"none"
    
 }


 const colorText='#fafafa';


const bgParr={
     background:'#1a237e',
     padding:'10px',
    
}
const items={
    textDecoration:'none',
}
 return(
        <>

<footer  class="mt-5"style={bgFooterAparience}>
  <div class="container">
    <div class="row">
      <div class="col-xl-3 col-lg-4 col-md-6">
        <div>
          <h3 style={pColor}>{props.branding}</h3>
          <p class="mb-30 footer-desc" style={pColor}>
        {props.address}
          </p>
        </div>
      </div>
      <div class="col-xl-2 offset-xl-1 col-lg-2 col-md-6">
        <div class="">
          <h4 style={pColor}>{props.titleSocial}</h4>
          <ul class="list-unstyled">
            <li>
              <a href="#" class="text-decoration-none" style={pColor}>{props.item1}</a>
            </li>
            <li>
              <a href="#" class="text-decoration-none" style={pColor}>{props.item2}</a>
            </li>
            <li>
              <a href="#" class="text-decoration-none" style={pColor}>{props.item3}</a>
            </li>
            <li>
              <a href="#" class="text-decoration-none" style={pColor}>{props.item4}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-6">
        <div>
          <h4 style={pColor}>{props.links}</h4>
          <ul class="list-unstyled">
            <li>
              <a href="#" class="text-decoration-none" style={pColor}>{props.item6}</a>
            </li>
            <li>
              <a href="#" class="text-decoration-none" style={pColor}>{props.item7}</a>
            </li>
            <li>
              <a href="#" class="text-decoration-none" style={pColor}>{props.item8}</a>
            </li>
            <li>
              <a href="#" class="text-decoration-none" style={pColor}>{props.item9}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-6">
        <div>
          <h4 style={pColor}>{props.item10}</h4>
          <ul class="list-unstyled">
            <li>
              <p style={bgParr}><a href="#" style={pColor}>{props.item11}</a></p>
            </li>
            <li>
              <p style={bgParr}><a href="#" style={pColor}>{props.item12}</a>
              </p>
            </li>
            <li>
              <p>
              {props.item13}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center">

      <div class="copyright">
        <p> {props.copy}</p>
      </div>
    </div>
  </div>
</footer>

        </>
    )
}
export default Footer;