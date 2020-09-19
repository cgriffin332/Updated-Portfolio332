$(document).ready(function () {
  $(".submitBtn").on("click", function (event) {
    event.preventDefault();
    $("#name").val("");
    $("#email").val("");
    $("#message").val("");
  });
});
