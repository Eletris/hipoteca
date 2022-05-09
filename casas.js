//jshint esversion:6
//Inicializo los módulos
const express=require("express");
const app=express();
app.use(express.static("public"));

const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

//Muestro la raiz
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
  //Recojo los datos del formulario
  var tipoCasa=req.body.tipo;
  var annos=req.body.annos;
  var interes=Number(req.body.interes);

  var precio;
  switch(tipoCasa){
    case "0":
      alert("Selecciona un tipo de vivienda válido");
      break;
    case "piso":
      precio=180000;
      break;
    case "chalet":
      precio=300000;
      break;
    case "duplex":
      precio=220000;
      break;
  } //fin del switch

//Calculo la cuota mensual
var meses=annos*12;
var cuota=precio/(((1-Math.pow(1+interes,-meses))/interes));
cuota=cuota.toFixed(2);

res.send("<h1>La cuota mensual es: "+cuota+" €</h1>");
});

//Pongo a escuchar el servidor
app.listen(3000,function(){
  console.log("Escuchando en puerto 3000");
});
