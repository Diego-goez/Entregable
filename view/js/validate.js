function validate(e){
    e.preventDefault();
    formulario  = document.getElementById('frmUsuario');
    nombre      = document.getElementById('txtNombre');
    apellido    = document.getElementById('txtApellido');
    usuario     = document.getElementById('txtUsuario');
    clave       = document.getElementById('txtClave');
    
    lVali = true;
    
    if (nombre.value==""){
        nombre.style.borderColor="red";
        ohSnap('Ingresar el nombre...', {color: 'red'});  // alert will have class 'alert-color'
        lVali = false;
    }
    if (apellido.value==""){
        apellido.style.borderColor="red";
        ohSnap('Ingresar el apellido...', {color: 'red'},{duration:1000});  // alert will have class 'alert-color'
        lVali = false;
    }
    if (usuario.value==""){
        usuario.style.borderColor="red";
        ohSnap('Ingresar el usuario...', {color: 'red'});  // alert will have class 'alert-color'
        lVali = false;
    }
    if (clave.value==""){
        clave.style.borderColor="red";
        ohSnap('Ingresar la clave...', {color: 'red'});  // alert will have class 'alert-color'
        lVali = false;
    }
    if (lVali == true){
        formulario.submit();
    }
    

}
function validateModify(e){
    e.preventDefault();
    formulario  = document.getElementById('frmUsuarioModificar');
    nombre      = document.getElementById('txtNombreM');
    apellido    = document.getElementById('txtApellidoM');
    usuario     = document.getElementById('txtUsuarioM');
    clave       = document.getElementById('txtClaveM');
    
    lVali = true;
    
    if (nombre.value==""){
        nombre.style.borderColor="red";
        ohSnap('Ingresar el nombre...', {color: 'red'});  // alert will have class 'alert-color'
        lVali = false;
    }
    if (apellido.value==""){
        apellido.style.borderColor="red";
        ohSnap('Ingresar el apellido...', {color: 'red'},{duration:1000});  // alert will have class 'alert-color'
        lVali = false;
    }
    if (usuario.value==""){
        usuario.style.borderColor="red";
        ohSnap('Ingresar el usuario...', {color: 'red'});  // alert will have class 'alert-color'
        lVali = false;
    }
    if (clave.value==""){
        clave.style.borderColor="red";
        ohSnap('Ingresar la clave...', {color: 'red'});  // alert will have class 'alert-color'
        lVali = false;
    }
    if (lVali == true){
        formulario.submit();
    }
    

}

function validateAprendiz(e){
    e.preventDefault();
    formulario    = document.getElementById('frmAprendiz');
    nombre        = document.getElementById('txtNombre');
    fechanaci     = document.getElementById('txtFechanaci');
    sexo          = document.getElementById('txtSexo');
    ciudad        = document.getElementById('txtCiudad');
    
    lVali = true;
    
    if (nombre.value==""){
        nombre.style.borderColor="red";
        ohSnap('Ingresar el nombre...', {color: 'red'});  // alert will have class 'alert-color'
        lVali = false;
    }
    if (fechanaci.value==""){
        fechanaci.style.borderColor="red";
        ohSnap('Ingresar la fecha de nacimiento...', {color: 'red'},{duration:1000});  // alert will have class 'alert-color'
        lVali = false;
    }
    if (sexo.value==""){
        sexo.style.borderColor="red";
        ohSnap('Ingresar el sexo...', {color: 'red'});  // alert will have class 'alert-color'
        lVali = false;
    }
    if (ciudad.value==""){
        ciudad.style.borderColor="red";
        ohSnap('Ingresar la ciudad...', {color: 'red'});  // alert will have class 'alert-color'
        lVali = false;
    }
    if (lVali == true){
        formulario.submit();
    }
    

}
function validateModifyAprendiz(e){
    e.preventDefault();
    formulario  = document.getElementById('frmAprendizModificar');
    nombre      = document.getElementById('txtNombreM');
    fechanaci   = document.getElementById('txtFechanaciM');
    sexo        = document.getElementById('txtSexoM');
    ciudad      = document.getElementById('txtCiudadM');
    
    lVali = true;
    
    if (nombre.value==""){
        nombre.style.borderColor="red";
        ohSnap('Ingresar el nombre...', {color: 'red'});  // alert will have class 'alert-color'
        lVali = false;
    }
    if (fechanaci.value==""){
        fechanaci.style.borderColor="red";
        ohSnap('Ingresar la fecha de nacimiento...', {color: 'red'},{duration:1000});  // alert will have class 'alert-color'
        lVali = false;
    }
    if (sexo.value==""){
        sexo.style.borderColor="red";
        ohSnap('Ingresar el sexo...', {color: 'red'});  // alert will have class 'alert-color'
        lVali = false;
    }
    if (ciudad.value==""){
        ciudad.style.borderColor="red";
        ohSnap('Ingresar la ciudad...', {color: 'red'});  // alert will have class 'alert-color'
        lVali = false;
    }
    if (lVali == true){
        formulario.submit();
    }
    

}

