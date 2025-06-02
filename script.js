function showStudentForm() {
  document.getElementById("studentForm").style.display = "block";
  document.getElementById("adminForm").style.display = "none";
}

function showAdminForm() {
  document.getElementById("studentForm").style.display = "none";
  document.getElementById("adminForm").style.display = "block";
}

function studentLogin() {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  fetch("http://localhost:4567/student/login", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ email, password })
  })
    .then(res => res.text())
    .then(data => document.getElementById("loginMsg").innerText = data)
    .catch(err => alert("Login failed: " + err));
}

function adminLogin() {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  fetch("http://localhost:4567/admin/login", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ email, password })
  })
    .then(res => res.text())
    .then(data => document.getElementById("loginMsg").innerText = data)
    .catch(err => alert("Login failed: " + err));
}

function studentRegister() {
  const email = document.getElementById("regEmail").value.trim();
  const phone = document.getElementById("regPhone").value.trim();
  const password = document.getElementById("regPassword").value.trim();
  const name = document.getElementById("regName").value.trim();

  if (!email || !phone || !password || !name) {
    alert("Please fill in all student registration fields.");
    return;
  }

  fetch("http://localhost:4567/student/register", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ email, phone, password, name })
  })
    .then(res => res.text())
    .then(data => document.getElementById("registerMsg").innerText = data)
    .catch(err => alert("Registration failed: " + err));
}

function adminRegister() {
  const email = document.getElementById("adminEmail").value.trim();
  const phone = document.getElementById("adminPhone").value.trim();
  const password = document.getElementById("adminPassword").value.trim();
  const clubId = document.getElementById("adminClubId").value.trim();
  const clubName = document.getElementById("adminClubName").value.trim();
  const description = document.getElementById("adminDescription").value.trim();
  const contactEmail = document.getElementById("adminContactEmail").value.trim();

  if (!email || !phone || !password || !clubId || !clubName || !description || !contactEmail) {
    alert("Please fill in all admin registration fields.");
    return;
  }

  fetch("http://localhost:4567/admin/register", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      email, phone, password, clubId, clubName, description, contactEmail
    })
  })
    .then(res => res.text())
    .then(data => document.getElementById("adminMsg").innerText = data)
    .catch(err => alert("Registration failed: " + err));
}
