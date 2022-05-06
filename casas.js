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




//Pongo a escuchar el servidor
app.listen(3000,function(){
  console.log("Escuchando en puerto 3000");
});
