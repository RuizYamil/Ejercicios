
function validar() {
    let usuario = document.getElementById("usuario");
    let contraseña = document.getElementById("contraseña");
    let arroba = /\@/;

    if(usuario.value=="" && contraseña.value==""){
        alert("Debe completar los campos obligatorios");     
    }else if(usuario.value=="" || contraseña.value==true){
        alert("El campo usuario esta vacio");
    }else if(usuario.value==true || contraseña.value==""){
        alert("El campo Contraseña esta vacio");
    }else if(!arroba.test(usuario.value)){
        alert("No se ingreso un arroba");
    }else{
        alert("Se envio correctamente");
    }
}