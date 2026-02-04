document.addEventListener("DOMContentLoaded", function () {
  const correctPassword = "1218676";
  let tries = 0;

  const isProtectedPage = window.location.pathname.includes("TGmodRules.html");
  
  if (!isProtectedPage) {
    return;
  }

  const loadingOverlay = document.getElementById("loading-overlay");
  const bodyElement = document.body;
  const contentElement = document.getElementById("content");

  if (loadingOverlay) {
    loadingOverlay.style.display = "flex";
  }
  
  if (contentElement) {
    contentElement.style.display = "none";
  }
  
  const mainContent = document.querySelector('.container, .center-content, .buttons-container, hr, p, h3, ol, ul, details');
  if (mainContent) {
    mainContent.style.visibility = "hidden";
    mainContent.style.opacity = "0";
    mainContent.style.position = "absolute";
    mainContent.style.left = "-9999px";
  }

  function showAccessDenied() {
    if (loadingOverlay) {
      loadingOverlay.style.display = "none";
    }
    
    document.documentElement.innerHTML = `
      <!DOCTYPE html>
      <html lang="ru">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Доступ запрещён</title>
          <style>
              body, html {
                  margin: 0;
                  padding: 0;
                  height: 100%;
                  width: 100%;
                  overflow: hidden;
                  font-family: Monaco, "Bitstream Vera Sans Mono", "Lucida Console", Terminal, monospace;
              }
              
              .background-page {
                  background: url('../assets/videos/prank.gif') no-repeat center center fixed;
                  background-size: cover;
                  height: 100vh;
                  width: 100vw;
                  position: fixed;
                  top: 0;
                  left: 0;
                  display: flex;
                  justify-content: center;
                  align-items: center;
              }
              
              .background-content {
                  background-color: rgba(0, 0, 0, 0.8);
                  padding: 40px;
                  border-radius: 10px;
                  text-align: center;
                  max-width: 600px;
                  width: 90%;
              }
              
              h2 {
                  color: #b5e853;
                  margin-bottom: 20px;
                  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1),
                               0 0 5px rgba(181, 232, 83, 0.1),
                               0 0 10px rgba(181, 232, 83, 0.1);
              }
              
              .button-link {
                  display: inline-block;
                  padding: 10px 20px;
                  background-color: #333;
                  color: #b5e853;
                  text-decoration: none;
                  border-radius: 5px;
                  border: 1px solid #b5e853;
                  font-size: 16px;
                  transition: all 0.3s;
              }
              
              .button-link:hover {
                  background-color: #444;
                  box-shadow: 0 0 10px rgba(181, 232, 83, 0.3);
              }
          </style>
      </head>
      <body>
          <div class="background-page">
              <div class="background-content">
                  <h2>Доступ запрещён</h2>
                  <p style="color: #eaeaea; margin-bottom: 30px;">Вы превысили допустимое количество попыток ввода пароля.</p>
                  <a href="../index.html" class="button-link">
                      🌐 Главная страница
                  </a>
              </div>
          </div>
      </body>
      </html>
    `;
  }

  function requestPassword() {
    let pwd = prompt("Введите пароль для доступа к странице:");

    if (pwd === null) {
      showAccessDenied();
      return;
    }

    if (pwd === correctPassword) {
      if (loadingOverlay) {
        loadingOverlay.style.display = "none";
      }
      
      if (contentElement) {
        contentElement.style.display = "block";
      }
      
      const mainContent = document.querySelector('.container, .center-content, .buttons-container, hr, p, h3, ol, ul, details');
      if (mainContent) {
        mainContent.style.visibility = "visible";
        mainContent.style.opacity = "1";
        mainContent.style.position = "static";
        mainContent.style.left = "auto";
      }
      
      bodyElement.classList.add("password-verified");
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

  setTimeout(() => {
    requestPassword();
  }, 300);
});