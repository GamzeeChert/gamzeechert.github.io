---
title: 💎 Fragment - Аукцион
---

<link rel="stylesheet" href="css/style.css">

# 💎 FRAGMENT

<a href="./index.html" class="button-link">🌐 Главная страница</a>
<a href="./links.html" class="button-link">🔗 Раздел ссылок</a>

- - - - -

## 🛒 Доступные аукционы


| Аукцион | Начальная ставка |
|:--------|:-----------------|
| 👾 [@cursed_vega](https://fragment.com/username/cursed_vega) | 13 TON |
| ⭐ [@tgstars_draw](https://fragment.com/username/tgstars_draw) | 50 TON |
| ✨ @kikakoki | N/A |
| 🏦 @tbank_vote | N/A |
| 🛒 @RuStoreSale | N/A |
| 🇷🇺 @indie_gamedev_russia | N/A |
| 🇷🇺 [@indie_gamedev_rus](https://fragment.com/username/indie_gamedev_rus) | 30 TON |
| 🇷🇺 @indie_gamedev_ru | N/A |
| 🇰🇿 @indie_gamedev_kazakhstan | N/A |
| 🇰🇿 @indie_gamedev_kz | N/A |
| 🇺🇦 @indie_gamedev_ukraine | N/A |
| 🇺🇦 @indie_gamedev_ua | N/A |
| 🇺🇸 @indie_gamedev_eng | N/A |
| 🇺🇸 @indie_gamedev_en | N/A |
| 🇩🇪 @indie_gamedev_germany | N/A |
| 🐶 @SnoopieDoopieDog | N/A |
| 🐕 @SnoopieDoopieDogg | N/A |
| 🐩 @SnoopieDoopieDoggy | N/A |
| 🐕‍🦺 @SnoopieDoopieDoggie | N/A |

[🗓️ Desk Calendar #294,086](https://t.me/nft/DeskCalendar-294086) - 2 TON

- - - - -

`Информация обновлена 13.09.2025`








<button id="fixedTopRightButton">
  🚧 Test Button 🚧
</button>

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
