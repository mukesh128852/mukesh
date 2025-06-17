// Validation logics written in js
function check() {
    var a = document.getElementById("A1").value; // Name value
    var b = document.getElementById("B1").value; // Contact value
    var c = document.getElementById("C1").value; // Email value
    var d = document.getElementById("D1").value; // Password
    var e = document.getElementById("E1").value; // Conf Password

    // Validation for all fields are mandatory to fill a form
    if (a == "" || b == "" || c == "" || d == "" || e == "") {
        alert("All fields are mandatory");
        return false;
    } else if (b.length < 10 || b.length > 10) {
        alert("Number should be 10 digit !");
        return false;
    } else if (isNaN(b)) {
        alert("Only numbers are allowed in contact");
        return false;
    } else if (d != e) {
        alert("Please enter same password");
        return false;
    } else {
        alert("Your Form has been Submitted");
        return true;
    }
}