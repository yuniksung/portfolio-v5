let showMeBtn = document.getElementById("showMe");

// Header, show my profile when clicked
function boxToggle(){
    const heroWrapper = document.querySelector(".hero-wrapper");
    heroWrapper.classList.toggle('active');
}

// Show projects when selected
function displayProjects(select){
    if(select.value=='showAll'){
        document.getElementById('frontEnds').style.display = "flex";
        document.getElementById('backEnds').style.display = "flex";
       } else if (select.value=='frontEnds'){
        document.getElementById('frontEnds').style.display = "flex";
        document.getElementById('backEnds').style.display = "none";
       } else {
        document.getElementById('frontEnds').style.display = "none";
        document.getElementById('backEnds').style.display = "flex";
       }
}


showMeBtn.addEventListener("click", boxToggle);