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
function myalert(){
    alert( "Your order success. Get it as soon as possible ");
}

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
    <h3>Validity until :${cook.value}</h3>
    <h3>Shop locate at : ${loc.value}</h3>
    <br>
    <h3>Details:</h3>
    <p>  ${desc.value}</p>
    <button id="order" type="submit" style="font-size: medium; ">Order</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
function del(){
    //event.target.parentElement.remove()
}
function clr(){
    //document.form1.submit();
    //document.form1.reset();
    var addbook1=document.getElementById("add-food1")
    addbook1.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
    })

}
var popupoverlay1=document.querySelector(".popup-overlay1")
var popupbox1=document.querySelector(".popup-box1")
var addpopupbutton1=document.getElementById("order")
addpopupbutton1.addEventListener("click",function(){
    popupoverlay1.style.display="block"
    popupbox1.style.display="block"
    
})
var can=document.getElementById("cancel-popup1")
can.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay1.style.display="none"
    popupbox1.style.display="none"
})













