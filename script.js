/* ========= LOGIN ========= */
function login() {
  // Dummy login (frontend only)
  const email = document.querySelector("input[type='text']").value;
  const password = document.querySelector("input[type='password']").value;

  if (email === "" || password === "") {
    alert("Please enter email and password");
  } else {
    // Store user session (temporary)
    localStorage.setItem("edunovaUser", email);
    window.location.href = "dashboard.html";
  }
}

/* ========= LOAD USER NAME ========= */
function loadUser() {
  const user = localStorage.getItem("edunovaUser");
  if (user) {
    const name = user.split("@")[0];
    document.getElementById("username").innerText = name;
  }
}

/* ========= LOGOUT ========= */
function logout() {
  localStorage.removeItem("edunovaUser");
  window.location.href = "login.html";
}

/* ========= DASHBOARD ACTIONS ========= */
function continueLearning() {
  alert("Continue Learning clicked");
}

function attemptQuiz() {
  alert("Quiz page will open");
}

function openNotes() {
  alert("Cheat Notes page will open");
}

/* ========= PROGRESS DEMO ========= */
function setProgress(value) {
  const bar = document.querySelector(".progress-bar");
  bar.style.width = value + "%";
}

/* ========= AUTO LOAD ========= */
window.onload = function () {
  if (document.querySelector(".progress-bar")) {
    setProgress(40); // demo progress
  }
};