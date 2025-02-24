document.addEventListener("DOMContentLoaded", function () {
    let alimarSection = document.getElementById("alimar");
  
    function revealOnScroll() {
      let sectionPos = alimarSection.getBoundingClientRect().top;
      let screenPos = window.innerHeight / 1.3;
  
      if (sectionPos < screenPos) {
        alimarSection.classList.add("show");
      }
    }
  
    window.addEventListener("scroll", revealOnScroll);
  });
  