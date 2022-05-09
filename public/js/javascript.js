var tipoCasa=formulario.tipo;
tipoCasa.addEventListener("change",function(){
  var nuevaCasa=formulario.tipo.value;
  var foto=document.querySelector(".imagen");

  switch(nuevaCasa){
    case "0":
      alert("Selecciona un tipo de vivienda válido");
      break;
    case "piso":
      foto.src="../imagenes/piso.jpg";
      break;
    case "chalet":
      foto.src="../imagenes/chalet.jpg";
      break;
    case "duplex":
      foto.src="../imagenes/duplex.jpg";
      break;
  }
});
var boton=formulario.boton;

boton.addEventListener("click",function(){
  //let es una variable que se destruye cuando se cierran las llaves donde está ubicada
  let annos=formulario.annos.value;
  let tipo=formulario.tipo.value;
  let interes=formulario.interes.value;
  if (tipo=="0"){
    alert("Selecciona un tipo de vivienda válido");
    return false;
  }
  if(annos=="0"){
      alert("Selecciona un nº de años válido");
      return false;
  }
  if (interes=="0"){
    alert("Selecciona un tipo de interés válido");
    return false;
  }
  formulario.submit();//Envío el formulario porque está completo
});
