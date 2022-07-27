// const express= require('express')
// const app = express()
// const bodyParser = require('body-parser')
// const {Avis}=require('./models/avis')
// const sequelize= require('./db/sequelize')
// sequelize.initDB()

// require('dotenv').config()
// app
//     .use(bodyParser.json())
//     .use(bodyParser.urlencoded({extended:true}))

// const PORT = process.env.PORT || 3000;
// app.listen(PORT)

const mysql = require("mysql");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const pug = require("pug");

//env
require("dotenv").config();
const HOST = process.env.DB_HOST;
const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
const PORT = process.env.PORT;

app.use(bodyParser.json()).use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//ouverture de la connexion à la bd
let mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: USER,
  password: PASSWORD,
  database: "Avis",
});

mysqlConnection.connect((err) => {
  if (err) console.log("probleme de conexion:" + err);
  else console.log("connexion à la BD etablie...");
});

//ouverture du serveur
app.listen(PORT);

//VIEW ENGINE SETUP
app.use(express.static("views"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/Home", (req, res) => {
  //consultation de la bd
  // mysqlConnection.query('select * from direction',(err,rows,fields)=>{
  //     if(err)console.log("Probleme de chargement de la BD");
  //     else{
  //         console.log(rows);
  //         res.render('user_index',{
  //             title:'DIRECTION TRAVAUX SCIENTIQUE',
  //             data:rows
  //         });
  //     }
  // });

  res.render("Home");
});
app.get("/Backend", (req, res) => {
  //consultation de la bd
  // mysqlConnection.query('select * from direction',(err,rows,fields)=>{
  //     if(err)console.log("Probleme de chargement de la BD");
  //     else{
  //         console.log(rows);
  //         res.render('user_index',{
  //             title:'DIRECTION TRAVAUX SCIENTIQUE',
  //             data:rows
  //         });
  //     }
  // });
  res.render("BackEnd");
});
app.get("/Contact", (req, res) => {
  //consultation de la bd
  // mysqlConnection.query('select * from direction',(err,rows,fields)=>{
  //     if(err)console.log("Probleme de chargement de la BD");
  //     else{
  //         console.log(rows);
  //         res.render('user_index',{
  //             title:'DIRECTION TRAVAUX SCIENTIQUE',
  //             data:rows
  //         });
  //     }
  // });
  res.render("Contact");
});
app.get("/FrontEnd", (req, res) => {
  //consultation de la bd
  // mysqlConnection.query('select * from direction',(err,rows,fields)=>{
  //     if(err)console.log("Probleme de chargement de la BD");
  //     else{
  //         console.log(rows);
  //         res.render('user_index',{
  //             title:'DIRECTION TRAVAUX SCIENTIQUE',
  //             data:rows
  //         });
  //     }
  // });
  res.render("FrontEnd");
});
app.get("/MarketingDigital", (req, res) => {
  //consultation de la bd
  // mysqlConnection.query('select * from direction',(err,rows,fields)=>{
  //     if(err)console.log("Probleme de chargement de la BD");
  //     else{
  //         console.log(rows);
  //         res.render('user_index',{
  //             title:'DIRECTION TRAVAUX SCIENTIQUE',
  //             data:rows
  //         });
  //     }
  // });
  res.render("MarketingDigital");
});
app.get("/singup", (req, res) => {
  //consultation de la bd
  // mysqlConnection.query('select * from direction',(err,rows,fields)=>{
  //     if(err)console.log("Probleme de chargement de la BD");
  //     else{
  //         console.log(rows);
  //         res.render('user_index',{
  //             title:'DIRECTION TRAVAUX SCIENTIQUE',
  //             data:rows
  //         });
  //     }
  // });
  res.render("singup");
});
app.get("/UX-UI", (req, res) => {
    //consultation de la bd
    // mysqlConnection.query('select * from direction',(err,rows,fields)=>{
    //     if(err)console.log("Probleme de chargement de la BD");
    //     else{
    //         console.log(rows);
    //         res.render('user_index',{
    //             title:'DIRECTION TRAVAUX SCIENTIQUE',
    //             data:rows
    //         });
    //     }
    // });
    res.render("UX-UI");
  });

app.post("/createAvis", (req, res) => {
  console.log(
    "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj"
  );
  //insertion du model : req.body
  const data = {
    fname: req.body,
    lname: req.body,
    avis: req.body,
    note: req.body,
    formation: req.body,
  };
 const sql = "CREATE TABLE Avis (fname VARCHAR(255) NOT NULL, lname VARCHAR(255) NOT NULL, avis VARCHAR(255) NOT NULL,note INT(1) NOT NULL, formation VARCHAR(255) NOT NULL)";
  mysqlConnection.query(sql, [data], (err, rows, fields) => {
    if (err) console.log("Echec d'enregistrement à BD");
    else {
      console.log("Enregistrement effectuee");
      res.render("Home");
    }
  });
});

module.exports = app;
