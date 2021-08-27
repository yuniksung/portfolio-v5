let showMeBtn = document.getElementById("showMe");
const openEls = document.querySelectorAll("[data-open]");
const isVisible = "is-visible";


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


 
for(const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

showMeBtn.addEventListener("click", boxToggle);
window.onscroll = function() {scrollFunction()};