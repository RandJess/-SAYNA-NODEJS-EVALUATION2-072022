// let card = '<div class="card"><h1>Card Title</h1><p>Duplicated Card Description</p>';

// const { Json } = require("sequelize/types/utils");

// // jQuery(document).ready(function() {
// //   jQuery('.new-card').click(function() {
// //     jQuery('body').append(card);
// //   });
// // });


// const btn= document.getElementById('btn')
// btn.addEventListener('click', event=>{
//     // const comms = document.getElementById('comms')
//     // comms.append(card)
// const card= document.getElementById('card')
//     const boxS = [document.querySelectorAll('#box')]
//     boxS.forEach ((box, i)=>{
//         box.append(card)
//     })
// })

// let StarOutSrc = './views/image/starOut.jpg';
// let StarOnSrc = '/views/image/star.jpg';
// const n = 5;

// function out(nb){
//     elemClassement = document.getElementById("note");
//     tabImg = document.getElementsByTagName("img");
     
//     for (i=0; i<nb; i++){
//       tabImg[i].src = StarOutSrc;
//     }
//     for (i=0; i<n; i++){
//       if (tabImg[i].getAttribute("value") == "on")
//          tabImg[i].src = StarOnSrc;
//     }
//   }
  

//   function on(nb){
//     console.debug("nb"+nb);//affiche la valeur de nb dans la console JS "F12"
//     elemClassement = document.getElementById("note");
//     tabImg = document.getElementsByTagName("img");
      
//     let imgSrc = StarOnSrc, imgValue="on";
//     for(i = 0; i < n; i++)
//     {
//       if(i > nb)
//       {
//           imgSrc = StarOutSrc;
//           imgValue="off";
//       }
//       tabImg[i].src = imgSrc;
//       tabImg[i].setAttribute("value",imgValue); 
        
//     }
//     // ICI, on rempli l'input hidden avec la valeur
//     document.getElementById('note').value = nb;
//   }

  // llllllllllllllllllllllllllllllllllllllllllllllllllllllll
const fname= document.getElementById("fname")
const lname= document.getElementById("lname")
const avis= document.getElementById("avis")
const note= document.getElementById("note")
const formation= document.getElementById("formation")

// function getdata(err){
//   console.log(err);
//    if(!err)
//    {
//     $.ajax({
//       type: 'post',
//       url: '/Home',
//       data: {
//         fname:fname,
//         lname:lname,
//         avis:avis,
//         note:note,
//         formation:formation
//       },
//       // success: function (response) {
//         //    $('#res').pug(response);
//         // }
//       });
//       console.log("heuyyyyyyyyyyyyyyyyyyy")
//    }
//    else
//    {
//     // $('#res').pug(console.log("Erreur fetch"));
//    }
// }
// getdata()



function send(event){
  event.preventDefault()
  const data = {
    fname: fname.value,
    lname: lname.value,
    avis: avis.value,
    note: note.value,
    formation: formation.value,
  }
  fetch('/createAvis', {
    headers: {'Content-type': 'application/json'},
    method: 'post',
    data: JSON.stringify(data)
  }).then(res=>res.json().then(
    resultat=>console.log(resultat)
  ))
}

const btn = document.querySelector("form");
btn.addEventListener('submit', send);
