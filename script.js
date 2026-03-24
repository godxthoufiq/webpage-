function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    
    let validEmail = "admin@cbit.com";
    let validPassword = "12345";

    if (email === "" || password === "") {
        alert("Please fill all fields!");
        return;
    }

    if (email === validEmail && password === validPassword) {
        alert("Login Successful ✅");
        window.location.href = "index.html"; // or dashboard page
    } else {
        alert("Invalid Email or Password ❌");
    }
}
