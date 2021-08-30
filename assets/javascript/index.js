let showMeBtn = document.getElementById("showMe");
let modalBtn = document.getElementById("modalBtn");
let modalContainer = document.getElementById("modal");
let closeBtn = document.getElementById("closeBtn");
let copyBtn = document.getElementById("emailCopy");
// Navigation display when scroll down
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-50px";
    }
  }

// Header, show my profile when clicked
function boxToggle(){
  const heroWrapper = document.querySelector(".hero-wrapper");
  heroWrapper.classList.toggle('active');
  console.log("toggle");
}

// Copyboard
function copyToClipboard(elementId) {
  let aux = document.createElement("input");
  aux.setAttribute("value", document.getElementById(elementId).innerHTML);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);

  let copied = document.getElementById("copied");
  copied.style.display = "block";
}


// Show projects when selected
function displayProjects(select){
    if(select.value =='showAll'){
        console.log("show all")
        document.getElementById('frontEnds').style.display = "flex";
        document.getElementById('backEnds').style.display = "flex";
       } else if (select.value =='frontEnd'){
        console.log("frontEnds")
        document.getElementById('frontEnds').style.display = "flex";
        document.getElementById('backEnds').style.display = "none";
       } else if (select.value =='backEnd') {
        console.log("backEnds")
        document.getElementById('frontEnds').style.display = "none";
        document.getElementById('backEnds').style.display = "flex";
       } else {
        console.log("fullStacks")
        document.getElementById('frontEnds').style.display = "flex";
        document.getElementById('backEnds').style.display = "flex";
       }
}

// Pop up Modal
modalBtn.addEventListener("click", function(){
  modalContainer.style.display = "flex";
});

// Close Modal
closeBtn.addEventListener("click", function(){
  modalContainer.style.display = "none";
});

modalContainer.addEventListener("click", function(){
  modalContainer.style.display = "none";
});
 


showMeBtn.addEventListener("click", boxToggle);
window.onscroll = function() {scrollFunction()};

