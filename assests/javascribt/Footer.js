$(document).ready(function () {

  // Highlight footer links on hover
  $("footer a").hover(
    function () {
      $(this).css("color", "#f4b400");
    },
    function () {
      $(this).css("color", "#ccc");
    }
  );

  // Highlight social icons on hover
  $(".social-icons a").hover(
    function () {
      $(this).css("color", "#f4b400");
    },
    function () {
      $(this).css("color", "#ccc");
    }
  );
});