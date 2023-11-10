$(document).ready(function() {
  var inputField = $("#myInput");

  inputField.on("focus", function() {
    inputField.css("border-color", "green");
  });

  inputField.on("blur", function() {
    var inputValue = inputField.val();

    // Check if the input is a valid email using a regular expression
    var emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

    if (!emailPattern.test(inputValue)) {
      // If it's not a valid email, change the border color to red
      inputField.css("border-color", "red");
    } else {
      // If it's a valid email, change the border color to green
      inputField.css("border-color", "green");
    }
  });
});

