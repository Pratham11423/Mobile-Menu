// const btn = document.querySelector('.add');
// const cont = document.getElementsByClassName("container");

// console.log(cont[0].childNodes[1])
// console.log(cont[0].children[2])

// btn.addEventListener("click",() =>{
//     // console.log("clicked");
//    let value = prompt("enter the branch you want to add:");
// //    console.log(value);
//    let addValue = cont[0].childNodes[1];
//    addValue.innerHTML += `<p>${value}</p>`
// })

const list = document.getElementById("list");

const btn = document.querySelector('.add');


btn.addEventListener("click",()=>{
   let value = prompt("enter the branch you want to add:");
   

   const div = `<div class="item" id="newAdd">
                  <div class="items">
                    <i class="ri-arrow-right-line"></i>
                     <p>${value}</p>
                  </div>
                     <i id="rmbtn" class="ri-close-large-line"></i>
                 </div>`
   list.innerHTML += div;


   const rmbtn = document.getElementById("rmbtn");

   if(rmbtn){
      rmbtn.addEventListener("click",(e)=>{
         // console.log("deleted");
         e.target.parentNode.remove();
      });
   }
});






