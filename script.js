function register() {

    let username = document.getElementById("newUsername").value;
    let password = document.getElementById("newPassword").value;

    if (username === "" || password === "") {
        alert("Please enter username and password.");
        return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Registration successful! Now login.");

    document.getElementById("username").value = username;

    window.location.href = "#login";
}


function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let savedUsername = localStorage.getItem("username");
    let savedPassword = localStorage.getItem("password");

    if (username === savedUsername && password === savedPassword) {

        localStorage.setItem("loggedIn", "true");

        window.location.href = "dashboard.html";

    } else {

        alert("Invalid username or password.");

    }
}


function logout() {

    localStorage.removeItem("loggedIn");

    window.location.href = "index.html";
}


function showLogin() {

    document.getElementById("login").scrollIntoView({
        behavior: "smooth"
    });

}


function register() {

    let username = document.getElementById("newUsername").value;
    let password = document.getElementById("newPassword").value;

    if (username === "" || password === "") {
        alert("Please enter username and password.");
        return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Registration successful! Now login.");

    document.getElementById("username").value = username;

    window.location.href = "#login";
}

function showLogin() {

    document.getElementById("login").scrollIntoView({
        behavior: "smooth"
    });

}
function joinCourse(courseName) {

    localStorage.setItem("selectedCourse", courseName);

    alert(
        "🎉 You joined " + courseName + " successfully!"
    );

}
function submitAssignment(assignmentName) {

    localStorage.setItem(
        "submittedAssignment",
        assignmentName
    );

    alert(
        "✅ " + assignmentName +
        " submitted successfully!"
    );

}
function submitQuiz() {

    let score = 0;

    let q1 = document.querySelector(
        'input[name="q1"]:checked'
    );

    let q2 = document.querySelector(
        'input[name="q2"]:checked'
    );

    let q3 = document.querySelector(
        'input[name="q3"]:checked'
    );

    if (!q1 || !q2 || !q3) {
        alert("Please answer all questions.");
        return;
    }

    score += Number(q1.value);
    score += Number(q2.value);
    score += Number(q3.value);

    document.getElementById("result").innerHTML =
        "🎉 Your Score: " + score + " / 3";

    localStorage.setItem("quizScore", score);
}