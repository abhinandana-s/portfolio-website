console.log("Portfolio Loaded Successfully!");

// Resume Button

const resumeBtn = document.getElementById("resumeBtn");

resumeBtn.addEventListener("click", function () {
    alert("Thank you for downloading my resume!");
});

// Theme Toggle

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeBtn.textContent = "☀️ Light";
    } else {
        themeBtn.textContent = "🌙 Dark";
    }

});