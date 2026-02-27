//navbar
document.addEventListener("DOMContentLoaded",()=>{
  // Highlight Active Link
  const links = document.querySelectorAll(".nav-link");
  const current = location.pathname.split("/").pop();
  links.forEach(link=>{
    if(link.getAttribute("href")===current) link.classList.add("active");
  });
});


//hero

const videos = document.querySelectorAll(".hero-video");
  let current = 0;

  setInterval(() => {
    videos[current].classList.remove("active");
    current = (current + 1) % videos.length;
    videos[current].classList.add("active");
  }, 6000); // change every 6 seconds


  const cinVideos = document.querySelectorAll(".cin-video");
  const cinTitle = document.getElementById("cinTitle");
  const cinText = document.getElementById("cinText");

  const slides = [
    {
      title: "Crafted With Passion",
      text: "Experience flavor beyond expectations"
    },
    {
      title: "From Our Kitchen",
      text: "Fresh ingredients. Expert chefs."
    },
    {
      title: "Delivered With Care",
      text: "Fast delivery, unforgettable taste"
    }
  ];

  let index = 0;

  function resetFade() {
    document.querySelectorAll(".fade-up").forEach(el => {
      el.style.animation = "none";
      el.offsetHeight;
      el.style.animation = "";
    });
  }

  setInterval(() => {
    cinVideos[index].classList.remove("active");
    index = (index + 1) % cinVideos.length;
    cinVideos[index].classList.add("active");

    cinTitle.textContent = slides[index].title;
    cinText.textContent = slides[index].text;

    resetFade();
  }, 7000);