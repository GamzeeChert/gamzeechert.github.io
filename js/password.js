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
          <link rel="icon" type="image/x-icon" href="../assets/images/WSIcons/favicon.ico">
          <style>
              body, html {
                  margin: 0;
                  padding: 0;
                  height: 100%;
                  width: 100%;
                  overflow: hidden;
                  font-family: Monaco, "Bitstream Vera Sans Mono", "Lucida Console", Terminal, monospace;
                  background-color: #000;
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
              
              /* Оверлей для затемнения фона */
              .background-page::before {
                  content: '';
                  position: absolute;
                  top: 0;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  background: rgba(0, 0, 0, 0.6);
                  z-index: 1;
              }
              
              .background-content {
                  position: relative;
                  z-index: 2;
                  padding: 40px;
                  border-radius: 10px;
                  background: rgba(0, 0, 0, 0.7);
                  backdrop-filter: blur(10px);
                  -webkit-backdrop-filter: blur(10px);
                  max-width: 90%;
                  width: 600px;
                  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
                  border: 1px solid rgba(181, 232, 83, 0.2);
                  text-align: center;
                  box-sizing: border-box;
              }
              
              h2 {
                  color: #b5e853;
                  margin-bottom: 20px;
                  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1),
                               0 0 5px rgba(181, 232, 83, 0.1),
                               0 0 10px rgba(181, 232, 83, 0.1);
                  font-size: 24px;
                  font-weight: normal;
                  font-family: Monaco, "Bitstream Vera Sans Mono", "Lucida Console", Terminal, monospace;
                  letter-spacing: -0.03em;
              }
              
              p {
                  color: #eaeaea;
                  margin-bottom: 30px;
                  line-height: 1.5;
              }
              
              .button-link {
                  display: inline-block;
                  padding: 10px 24px;
                  margin: 8px 0;
                  color: #e3ffe3;
                  border-radius: 18px;
                  text-decoration: none;
                  font-size: 18px;
                  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
                  border: 2px dashed;
                  transition: box-shadow 0.3s, background-color 0.3s;
                  background: rgba(106, 176, 76, 0.25);
                  border-color: rgba(74, 124, 42, 0.4);
                  color: #e3ffe3;
                  font-family: Monaco, "Bitstream Vera Sans Mono", "Lucida Console", Terminal, monospace;
              }
              
              .button-link:hover {
                  box-shadow: 0 0 12px 4px rgba(140, 216, 94, 0.5);
                  background: rgba(140, 216, 94, 0.35);
              }
              
              /* Адаптивность для мобильных */
              @media (max-width: 768px) {
                  .background-content {
                      padding: 25px;
                      margin: 20px;
                      width: calc(100% - 40px);
                  }
                  
                  h2 {
                      font-size: 22px;
                  }
                  
                  .button-link {
                      padding: 10px 20px;
                      font-size: 16px;
                      width: 100%;
                      max-width: 250px;
                      margin: 15px auto 5px;
                      display: block;
                  }
              }
              
              @media (max-width: 480px) {
                  .background-content {
                      padding: 20px;
                      margin: 15px;
                      width: calc(100% - 30px);
                  }
                  
                  h2 {
                      font-size: 20px;
                  }
              }
          </style>
      </head>
      <body>
          <div class="background-page">
              <div class="background-content">
                  <h2>Доступ запрещён</h2>
                  <p>Вы превысили допустимое количество попыток ввода пароля.</p>
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
