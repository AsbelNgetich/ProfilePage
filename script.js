
function changeName(){

    var newName = prompt("Enter your name : ", "first and last name");

    document.querySelector("#profileName").textContent = newName;
    
}

var count =2;
function removeRequest(id){
    count--
    var x = document.getElementById(id).parentElement;
    alert(x);
    x.remove();
    document.querySelector("#connectionsBtn").textContent =  count;
}