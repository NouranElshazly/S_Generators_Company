document.addEventListener("DOMContentLoaded", function () {

  async function loadContent(url, elementId) {
    try {
      const response = await fetch(url);
      const data = await response.text();
      document.getElementById(elementId).innerHTML = data;
    } catch (error) {
      console.error("Error loading content:", error);
    }
  }

  // Load navigation and footer, then initialize search functionality
  (async function () {
    await loadContent("header.html", "header");

    await loadContent("Footer.html", "footer");
    // Initialize search functionality after navigation content is loaded
  })();

});
