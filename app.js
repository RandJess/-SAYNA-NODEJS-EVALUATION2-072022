// http://localhost:5000/Home
//env
require("dotenv").config();
const mysql = require("mysql");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const pug = require("pug");
const { log } = require("console");
const { builtinModules } = require("module");

const HOST = process.env.DB_HOST;
const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
const PORT = process.env.PORT;

app.use(bodyParser.json()).use(bodyParser.urlencoded({ extended: true }));

//ouverture de la connexion à la bd
let mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: USER,
  password: PASSWORD,
  database: "Avis",
});

mysqlConnection.query(
  "create database if not exists Avis",
  function (err, result, fields) {
    if (err) throw err;
  }
);

//Cree la structure de la table Avis
mysqlConnection.query("USE Avis", function (err, result, fields) {
  if (err) throw err;
});

app.use(express.static("./public"));

//VIEW ENGINE SETUP
app.use(express.static("views"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/Home", (req, res) => {
  mysqlConnection.query(
    "select * from Avis where note>3 order by note desc",
    (err, result, fields) => {
      if (err) console.log("Probleme de chargement de la BD");
      res.render("Home", { result: result });
    }
  );
});

app.get("/Backend", (req, res) => {
  mysqlConnection.query(
    "select * from Avis where formation='Backend' order by formation desc",
    (err, result, fields) => {
      if (err) console.log(err);
      res.render("BackEnd", { result: result });
    }
  );
});

app.get("/Contact", (req, res) => {
  res.render("Contact");
});

app.get("/FrontEnd", (req, res) => {
  mysqlConnection.query(
    "select * from Avis where formation='Frontend' order by formation desc",
    (err, result, fields) => {
      if (err) console.log();
      res.render("FrontEnd", { result: result });
    }
  );
});

app.get("/MarketingDigital", (req, res) => {
  mysqlConnection.query(
    "select * from Avis where formation='Marketing' order by formation desc",
    (err, result, fields) => {
      if (err) console.log();
      res.render("MarketingDigital", { result: result });
    }
  );
});

app.get("/singup", (req, res) => {
  res.render("singup");
});

app.get("/UX-UI", (req, res) => {
  mysqlConnection.query(
    "select * from Avis where formation='UX-UI' order by formation desc",
    (err, result, fields) => {
      if (err) console.log();
      res.render("UX-UI", { result: result });
    }
  );
});

app.post("/createAvis", (req, res) => {
  const data = {
    fname: req.body.fname,
    lname: req.body.lname,
    avis: req.body.avis,
    note: req.body.note,
    formation: req.body.formation,
  };

  const sql =
    "CREATE TABLE IF NOT EXISTS Avis ( fname VARCHAR(255), lname VARCHAR(255), avis VARCHAR(255), note INT, formation VARCHAR(255) )";
  const inst = "insert into Avis set ?";
  mysqlConnection.query(sql, (err, results, fields) => {
    console.log("creation table reuusi");
  });

  mysqlConnection.query(inst, [data], (err, result, fields) => {
    if (err) {
      console.log(err);
    } else {
      res.render("Contact");
    }
  });
});

module.exports = app;

//ouverture du serveur
app.listen(PORT);
