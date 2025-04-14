
document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("faqHeader");
    const paragraph = document.getElementById("faqParagraph");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    header.classList.add("reveal", "typing");
                    paragraph.classList.add("reveal", "typing");

                    // Remove the blinking cursor after animation completes
                    setTimeout(() => {
                        header.classList.remove("typing");
                        header.classList.add("stable");
                        paragraph.classList.remove("typing");
                        paragraph.classList.add("stable");
                    }, 2000); // Match the typing animation duration

                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.5 }
    );

    observer.observe(header);
    observer.observe(paragraph);
});




document.querySelectorAll("#faqSection .accordion-button").forEach(button => {
    button.addEventListener("click", function () {
        const icon = this.querySelector(".toggle-icon");
        if (this.getAttribute("aria-expanded") === "true") {
            icon.textContent = "-";
        } else {
            icon.textContent = "+";
        }
    });
});