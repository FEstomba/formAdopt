function validar() {
    var elemento= document.getElementById("correo").value
  if (elemento == "")
  {
    alert("Debes llenar todos los campos")
    return false
  }
  else 
  {
    alert("Gracias por enviar tu formulario")
    return false
  }
}
/*La funcion se utiliza para validar el evento onclick, en caso de estar vacio te recuerda que debes completar
todos los campos, si esta completo lo envia.*/