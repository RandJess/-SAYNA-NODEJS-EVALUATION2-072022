// let card = '<div class="card"><h1>Card Title</h1><p>Duplicated Card Description</p>';

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

let StarOutSrc = './views/image/starOut.jpg';
let StarOnSrc = '/views/image/star.jpg';
const n = 5;

function out(nb){
    elemClassement = document.getElementById("note");
    tabImg = document.getElementsByTagName("img");
     
    for (i=0; i<nb; i++){
      tabImg[i].src = StarOutSrc;
    }
    for (i=0; i<n; i++){
      if (tabImg[i].getAttribute("value") == "on")
         tabImg[i].src = StarOnSrc;
    }
  }
  

  function on(nb){
    console.debug("nb"+nb);//affiche la valeur de nb dans la console JS "F12"
    elemClassement = document.getElementById("note");
    tabImg = document.getElementsByTagName("img");
      
    let imgSrc = StarOnSrc, imgValue="on";
    for(i = 0; i < n; i++)
    {
      if(i > nb)
      {
          imgSrc = StarOutSrc;
          imgValue="off";
      }
      tabImg[i].src = imgSrc;
      tabImg[i].setAttribute("value",imgValue); 
        
    }
    // ICI, on rempli l'input hidden avec la valeur
    document.getElementById('note').value = nb;
  }