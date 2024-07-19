document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("joinUs");

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const username = form.elements["username"].value;
      const email = form.elements["email"].value;
      const password = form.elements["password"].value;
      const confirmPassword = form.elements["confirm-password"].value;

      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      const emailBody = `
Someone is interested in joining Artelier!
      
Here are their following information:

-------------------------------------------------------------------
USERNAME:
${username}
-------------------------------------------------------------------
EMAIL ADDRESS:
${email}
-------------------------------------------------------------------
CREATE PASSWORD:
${password}
-------------------------------------------------------------------
CONFIRM PASSWORD:
${confirmPassword}
-------------------------------------------------------------------
      `;

      const mailToLink = `mailto:202310731@fit.edu.ph?subject=New Account&body=${encodeURIComponent(
        emailBody
      )}`;

      window.location.href = mailToLink;
    });
  });