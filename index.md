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

<button id="fixedTopRightButton">Test Button</button>

<script>
  const btn = document.getElementById('fixedTopRightButton');

  btn.style.position = 'fixed';
  btn.style.top = '10px';
  btn.style.right = '10px';
  btn.style.cursor = 'move';

  let isDragging = false;
  let offsetX, offsetY;
  let startX, startY;

  function openLink() {
    window.location.href = 'https://t.me/Gamzee_Chertanovskiy';
  }

  btn.addEventListener('click', function(e) {
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    openLink();
  });

  function dragStart(e) {
    e.preventDefault();
    isDragging = false;
    const rect = btn.getBoundingClientRect();
    if (e.type === 'mousedown') {
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;
      startX = e.clientX;
      startY = e.clientY;
    } else if (e.type === 'touchstart') {
      offsetX = e.touches[0].clientX - rect.left;
      offsetY = e.touches[0].clientY - rect.top;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }
    btn.style.transition = 'none';
  }

  function dragMove(e) {
    if (e.type === 'mousemove' && e.buttons === 0) {
      isDragging = false;
      return;
    }
    if (e.type === 'touchmove' && e.touches.length === 0) {
      isDragging = false;
      return;
    }
    let clientX, clientY;
    if (e.type === 'mousemove') {
      clientX = e.clientX;
      clientY = e.clientY;
    } else if (e.type === 'touchmove') {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      return;
    }
    const moveX = Math.abs(clientX - startX);
    const moveY = Math.abs(clientY - startY);

    if (moveX > 5 || moveY > 5) {
      isDragging = true;
    } else {
      isDragging = false;
    }

    if (!isDragging) return;

    e.preventDefault();
    let x = clientX - offsetX;
    let y = clientY - offsetY;

    const maxX = window.innerWidth - btn.offsetWidth;
    const maxY = window.innerHeight - btn.offsetHeight;
    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x > maxX) x = maxX;
    if (y > maxY) y = maxY;

    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
    btn.style.right = 'auto';
  }

  function dragEnd(e) {
    if (!isDragging) return;
    e.preventDefault();
    isDragging = false;
    btn.style.transition = 'left 0.3s ease, top 0.3s ease';

    const rect = btn.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distances = {
      left: centerX,
      right: window.innerWidth - centerX,
      top: centerY,
      bottom: window.innerHeight - centerY
    };

    const closestEdge = Object.keys(distances).reduce((a, b) => distances[a] < distances[b] ? a : b);

    let finalLeft = rect.left;
    let finalTop = rect.top;

    switch(closestEdge) {
      case 'left':
        finalLeft = 10;
        break;
      case 'right':
        finalLeft = window.innerWidth - rect.width - 10;
        break;
      case 'top':
        finalTop = 10;
        break;
      case 'bottom':
        finalTop = window.innerHeight - rect.height - 10;
        break;
    }

    btn.style.left = finalLeft + 'px';
    btn.style.top = finalTop + 'px';
  }

  btn.addEventListener('mousedown', dragStart);
  btn.addEventListener('touchstart', dragStart, {passive: false});
  document.addEventListener('mousemove', dragMove);
  document.addEventListener('touchmove', dragMove, {passive: false});
  document.addEventListener('mouseup', dragEnd);
  document.addEventListener('touchend', dragEnd);
</script>
