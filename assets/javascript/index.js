let showMeBtn = document.getElementById("showMe");

// Header, show my profile when clicked
function boxToggle(){
    const heroWrapper = document.querySelector(".hero-wrapper");
    heroWrapper.classList.toggle('active');
}


showMeBtn.addEventListener("click", boxToggle);