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





<button id="menuButton" aria-label="Открыть меню" title="Меню"></button>

<nav id="sideMenu" class="hidden">
  <ul>
    <li><a href="./index.html">Главная страница</a></li>
    <li><a href="./links.html">Раздел ссылок</a></li>
    <li><a href="#">Тест</a></li>
  </ul>
</nav>

<script>
  const button = document.getElementById('menuButton');
  const menu = document.getElementById('sideMenu');

  button.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !button.contains(e.target)) {
      menu.classList.add('hidden');
    }
  });
</script>
