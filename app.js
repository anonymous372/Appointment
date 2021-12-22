const uList = document.getElementById("list")
const submitBtn = document.getElementById("submit")

submitBtn.addEventListener("click", function(){
    var name = document.getElementById("name").value
    var email =document.getElementById("email").value
    var date =document.getElementById("date").value
    var state =document.getElementById("state").value
    var city =document.getElementById("city").value

    var newListItem = document.createElement("div");

    var d1 = document.createElement("div");
    var d2 = document.createElement("div");
    var d3 = document.createElement("div");
    var d4 = document.createElement("div");
    var d5 = document.createElement("div");
    
    d1.appendChild(document.createTextNode(name))
    d2.appendChild(document.createTextNode(email))
    d3.appendChild(document.createTextNode(date))
    d4.appendChild(document.createTextNode(state))
    d5.appendChild(document.createTextNode(city))
    
    newListItem.appendChild(d1)
    newListItem.appendChild(d2)
    newListItem.appendChild(d3)
    newListItem.appendChild(d4)
    newListItem.appendChild(d5)

    newListItem.classList.add("items")

    uList.appendChild(newListItem)
})