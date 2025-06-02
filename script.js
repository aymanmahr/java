function showStudentForm() {
  document.getElementById("studentForm").style.display = "block";
  document.getElementById("adminForm").style.display = "none";
}

function showAdminForm() {
  document.getElementById("studentForm").style.display = "none";
  document.getElementById("adminForm").style.display = "block";
}

function studentLogin() {
  fetch("/student/login", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      email: document.getElementById("loginEmail").value,
      password: document.getElementById("loginPassword").value
    })
  })
    .then(res => res.text())
    .then(data => document.getElementById("loginMsg").innerText = data);
}

function adminLogin() {
  fetch("/admin/login", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      email: document.getElementById("loginEmail").value,
      password: document.getElementById("loginPassword").value
    })
  })
    .then(res => res.text())
    .then(data => document.getElementById("loginMsg").innerText = data);
}

function studentRegister() {
  fetch("/student/register", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      email: document.getElementById("regEmail").value,
      phone: document.getElementById("regPhone").value,
      password: document.getElementById("regPassword").value,
      name: document.getElementById("regName").value
    })
  })
    .then(res => res.text())
    .then(data => document.getElementById("registerMsg").innerText = data);
}

function adminRegister() {
  fetch("/admin/register", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      email: document.getElementById("adminEmail").value,
      phone: document.getElementById("adminPhone").value,
      password: document.getElementById("adminPassword").value,
      clubId: document.getElementById("adminClubId").value,
      clubName: document.getElementById("adminClubName").value,
      description: document.getElementById("adminDescription").value,
      contactEmail: document.getElementById("adminContactEmail").value
    })
  })
    .then(res => res.text())
    .then(data => document.getElementById("adminMsg").innerText = data);
}
