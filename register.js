function validateForm() {
    // Get form input values
    var email = document.forms["myForm"]["email"].value;
    var password = document.forms["myForm"]["password"].value;
    var zipcode = document.forms["myForm"]["zipcode"].value;

    // Regular expressions for validation  https://zparacha.com/validate-email-address-using-javascript-regular-expression
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    var zipPattern = /^\d{6}$/;

    // Validation
    var isValid = true;

    if (!email.match(emailPattern)) {
        isValid = false;
        alert("Please enter a valid email address.");
    }

    if (!password.match(passwordPattern)) {
        isValid = false;
        alert("Please enter a valid password. It must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number.");
    }

    if (!zipcode.match(zipPattern)) {
        isValid = false;
        alert("Please enter a valid 6-digit ZIP code.");
    }

    return isValid;
}
let captcha;
function generate() {

// Clear old input
document.getElementById("submit").value = "";

// Access the element to store
// the generated captcha
captcha = document.getElementById("image");
let uniquechar = "";

const randomchar =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

// Generate captcha for length of
// 5 with random character
for (let i = 1; i < 5; i++) {
uniquechar += randomchar.charAt(
    Math.random() * randomchar.length)
}

// Store generated input
captcha.innerHTML = uniquechar;
}

function printmsg() {
const usr_input = document
.getElementById("submit").value;

// Check whether the input is equal
// to generated captcha or not
if (usr_input == captcha.innerHTML) {
let s = document.getElementById("key")
    .innerHTML = "Matched";
generate();
}
else {
let s = document.getElementById("key")
    .innerHTML = "not Matched";
generate();
}
}