---
title: 🌐 Главная
---
<link rel="stylesheet" href="css/style.css">

# 👋🏻 Добро пожаловать!

## <a href="./TGRules.html" class="button-link">📜 Правила Telegram</a>
## <a href="./GameRules.html" class="button-link">🎮 Игровые правила</a>
## <a href="./GameGuide.html" class="button-link">📚 Игровое руководство</a>

## <a href="./MGSMain.html" class="button-link">🛍️ Madness Games Store</a>
## <a href="./Fragment.html" class="button-link">💎 Fragment</a>

## <a href="./links.html" class="button-link">🔗 Социальные сети</a>

- - - - -

### ⚙️ Если вы видите этот текст, это значит, что сайт или сегменты сайта в настоящее время обновляются.

Обновление сайта от 14.09.2025

 - Обновлено:
   - Внешний вид сайта.

- - - - -

![MGSlogo](https://github.com/GamzeeChert/gamzeechert.github.io/blob/main/_madnessgamesstore%2F_pictures%2FMGSlogo.jpg?raw=true)

- - - - -

#### 💡 Предложить идею для улучшения сайта / ⚠️ Сообщить о проблеме на сайте: <a href="https://t.me/Gamzee_Chertanovskiy" class="button-link">GamzeeChert</a>

<button id="fixedTopRightButton" onclick="window.location.href='https://t.me/Gamzee_Chertanovskiy'">👀</button>

<script>
  const btn = document.getElementById('fixedTopRightButton');

  btn.style.position = 'fixed';
  btn.style.top = '10px';
  btn.style.right = '10px';
  btn.style.cursor = 'move';

  let isDragging = false;
  let offsetX, offsetY;

  btn.addEventListener('mousedown', function(e) {
    isDragging = true;
    offsetX = e.clientX - btn.getBoundingClientRect().left;
    offsetY = e.clientY - btn.getBoundingClientRect().top;
    btn.style.transition = 'none'; 
  });

  document.addEventListener('mouseup', function() {
    if(isDragging) {
      isDragging = false;
      btn.style.transition = ''; 
    }
  });

  document.addEventListener('mousemove', function(e) {
    if(isDragging) {
      let x = e.clientX - offsetX;
      let y = e.clientY - offsetY;

      // Ограничиваем движение по окну браузера
      const maxX = window.innerWidth - btn.offsetWidth;
      const maxY = window.innerHeight - btn.offsetHeight;
      if(x < 0) x = 0;
      if(y < 0) y = 0;
      if(x > maxX) x = maxX;
      if(y > maxY) y = maxY;

      btn.style.left = x + 'px';
      btn.style.top = y + 'px';
      btn.style.right = 'auto';  
    }
  });
</script>
