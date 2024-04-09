var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})
var can=document.getElementById("cancel-popup")
can.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
var container=document.querySelector(".container")
var nam=document.getElementById("food-name")
var cook=document.getElementById("food-cook")
var quantity=document.getElementById("food-quantity")
 
var desc=document.getElementById("food-description")
var loc=document.getElementById("food-loc")
var addbook=document.getElementById("add-food")
addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h1>${nam.value}</h1>
    <h3>Quantity : ${quantity.value}</h3>
    <h3>Food cooked on :${cook.value}</h3>
    <h3>Food available at : ${loc.value}</h3>
    <p>Details : ${desc.value}</p>
    <button onclick="del(event)">Order</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"


})
function del(event){
    event.target.parentElement.remove()
}
function clr(){
    document.form1.submit();
    document.form1.reset();
}





