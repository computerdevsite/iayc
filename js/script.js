  const navLinks = document.getElementById("navLinks");
  const hamburger = document.getElementById("hamburger");

  function toggleMenu() {
    navLinks.classList.toggle("show");
    hamburger.textContent = navLinks.classList.contains("show") ? "✖" : "☰";
  }

  document.addEventListener("click", function (event) {
    const isClickInside = navLinks.contains(event.target) || hamburger.contains(event.target);
    if (!isClickInside && navLinks.classList.contains("show")) {
      navLinks.classList.remove("show");
      hamburger.textContent = "☰";
    }
  });

  /* CAROUSEL SCRIPT */
  let slideIndex = 1;
  showSlide(slideIndex);

  function moveSlide(n){ showSlide(slideIndex += n); }
  function currentSlide(n){ showSlide(slideIndex = n); }

  function showSlide(n){
    let slides = document.getElementsByClassName("carousel-slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    for (let i=0; i<slides.length; i++){ slides[i].style.display = "none"; }
    for (let i=0; i<dots.length; i++){ dots[i].className = dots[i].className.replace(" active", ""); }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }

  setInterval(() => { moveSlide(1); }, 4000);


  /* LOADING SCRIPT */
  const links = document.querySelectorAll("a");

    links.forEach(link => {
      link.addEventListener("click", function(e) {
        if (link.target === "_blank") return;
        document.getElementById("loading-spinner").style.display = "flex";
      });
    });