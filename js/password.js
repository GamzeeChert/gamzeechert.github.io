// password.js
document.addEventListener("DOMContentLoaded", function () {
  const correctPassword = "1218676";
  let tries = 0;

  function showAccessDenied() {
    document.body.innerHTML = `
      <div class="background-page" style="
        background: url('../assets/videos/prank.gif') no-repeat center center fixed;
        background-size: cover;
      ">
        
        <div class="center-content">
          <div class="background-content">
            <h2 style="
              color: #b5e853;
              margin-bottom: 20px;
              text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1),
                           0 0 5px rgba(181, 232, 83, 0.1),
                           0 0 10px rgba(181, 232, 83, 0.1);
            ">
              Доступ запрещён
            </h2>
            
            <a href="../index.html" class="button-link">
              🌐 Главная страница
            </a>
          </div>
        </div>
      </div>
    `;
  }

  function requestPassword() {
    let pwd = prompt("Введите пароль для доступа к странице:");

    if (pwd === null) {
      showAccessDenied();
      return;
    }

    if (pwd === correctPassword) {
      document.getElementById("content").style.display = "block";
    } else {
      tries++;
      if (tries < 3) {
        alert("Неверный пароль, попробуйте снова.");
        requestPassword();
      } else {
        showAccessDenied();
      }
    }
  }

  requestPassword();
});