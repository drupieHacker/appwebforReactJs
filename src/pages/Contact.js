export const Contact = ()=>{

    const styles={
        background:'#bdc3c7',
        padding:'10px',
        borderRadius:'10px'
    }
    return (
    <>
   <div class="container animate__animated animate__bounceIn" >
<div className="row justify-content-center ">
<div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" style={styles}>

<form >
  <div class="mb-3">
    <label for="nombre" class="form-label">Ingrese su nombre:</label>
    <input type="text" class="form-control" id="nombre" name="nombre"/>        
  </div>
  <div class="mb-3">
    <label for="clave" class="form-label">Ingrese su clave:</label>
    <input type="password" class="form-control" id="clave" name="clave"/>
  </div>
  <button type="submit" class="btn btn-primary">Confirmar</button>
</form>  
</div>

</div>
    

</div> 
    </>
    
        )
}
export default Contact;