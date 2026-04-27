// ===== LOGIN SYSTEM =====

function loginUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "therapist1" && password === "therapistpass") {
        localStorage.setItem("role", "therapist");
        window.location.href = "index.html";
    } 
    else if (username === "patient1" && password === "patientpass") {
        localStorage.setItem("role", "patient");
        window.location.href = "index.html";
    } 
    else {
        alert("Invalid login credentials");
    }
}

function logout() {
    localStorage.removeItem("role");
}

// ===== ACCESS CONTROL =====

function checkAccess(requiredRole) {
    const role = localStorage.getItem("role");

    if (!role) {
        window.location.href = "login.html";
        return;
    }

    if (requiredRole && role !== requiredRole) {
        alert("Access denied");
        window.location.href = "index.html";
    }
}

function setupHomePage() {
    const role = localStorage.getItem("role");

    if (!role) {
        window.location.href = "login.html";
        return;
    }

    const welcomeText = document.getElementById("welcomeText");
    const searchBtn = document.getElementById("searchBtn");
    const sessionBtn = document.getElementById("sessionBtn");

    if (role === "therapist") {
        welcomeText.innerText = "Welcome, Therapist";
    } 
    else if (role === "patient") {
        welcomeText.innerText = "Welcome, Patient";

        // Hide therapist-only features
        searchBtn.style.display = "none";
        sessionBtn.style.display = "none";
    }
}

// ===== PAGE LOAD LOGIC =====

window.onload = function () {
    const path = window.location.pathname;

    if (path.includes("index.html")) {
        setupHomePage();
    }

    if (path.includes("search.html") || path.includes("session.html")) {
        checkAccess("therapist");
    }

    if (path.includes("appointments.html")) {
        checkAccess(); // both roles allowed
    }
};
