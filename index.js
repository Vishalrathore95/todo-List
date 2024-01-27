const input = document.getElementById("input");
const list = document.getElementById("list");

function addTask() {
    if (input.value === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";

        li.appendChild(span);
        list.appendChild(li);
    }
    input.value = "";
    savedata();
}

list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") { // corrected tagName comparison
        e.target.parentElement.remove(); 
        savedata();// corrected typo and added semicolon
    }
}, false);


function savedata(){
    localStorage.setItem("data",list.innerHTML);
}
function show(){
    list.innerHTML=localStorage.getItem("data");
}
show();