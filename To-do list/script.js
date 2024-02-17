const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function AddTask(){
    if(inputBox.value === ''){
        alert("You must write something")

    }
    else{
        // Creating elememt call li and adding that element value to the li 
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        // To display that content under that list container we use listconatiner.append
        listcontainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span);
    }
    inputBox.value ="";
    savedata();
}
// event listener is a function that waits for a specific event to occur and then performs an action in response to that event
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();

    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);

function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showlist(){
    listcontainer.innerHTML= localStorage.getItem("data");
}
showlist();