const arrows = document.querySelectorAll(".arrow");
const movielist = document.querySelectorAll(".movie-list");

arrows.forEach((arrow,i)=>{
    const itemNumber = movielist[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click" , () => {
        const ratio = Math.floor(window.innerWidth/320);
        clickCounter++;
        if(itemNumber-(4 + clickCounter) + (4 - ratio)>= 0){
            movielist[i].style.transform = `translateX(${
                movielist[i].computedStyleMap().get("transform")[0].x.value -340
                }px)`;
        } else {
            movielist[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
    })

    console.log(movielist[i].querySelectorAll("img").length);
})


const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container, .movie-list-title, .navbar-container, .sidebar, .left-icon-menu, .toggle, .movie-list-item-title, .movie-list-item-description, .movie-list-item-button");

ball.addEventListener("click" , ()=>{
    items.forEach(item=>{
        item.classList.toggle("active")
    })
    ball.classList.toggle("active")
})


const watchButtons = document.querySelectorAll('.movie-list-item-button');
const featuredButton = document.querySelectorAll('.featured-button');



watchButtons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

featuredButton.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});





const profileContainer = document.querySelector('.profile-container');
const profileDropdown = document.querySelector('.toggle');
const profilePicture = document.querySelector('.profile-picture');
const profileTextContainer = document.querySelector('.profile-text-container');


profileDropdown.addEventListener('click', function() {
    profileTextContainer.classList.toggle('active');
});

profilePicture.addEventListener('click', function() {
    window.location.href = 'profile.html';
});


const homeIcon = document.getElementById("home-icon");

homeIcon.addEventListener("click" , function() {
    window.scrollTo({top: 0 , behavior: "smooth"});
});


    
    
  
  function playVideo(videoSrc) {
    const width = 800; 
    const height = 600;
    const left = (screen.width - width) ;
    const top = (screen.height - height) ; 

    const windowFeatures = `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`;
    window.open(videoUrl, 'VideoPlayer', windowFeatures);
  }

  document.getElementById('watch-therookie').addEventListener('click', function() {
    playVideo(videoPath ="therookie.mkv"); 
  });

  document.getElementById('watch-oppenheimer').addEventListener('click', function() {
    playVideo('spartacus.mkv'); 
  });





