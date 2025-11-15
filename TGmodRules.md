---
📜 Telegram Rules - Раздел для модераторов и стажёров
---

<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
    <script>
    document.addEventListener("DOMContentLoaded", function () {
      const correctPassword = "1218676";
      let tries = 0;

      function showAccessDenied() {
        alert("Доступ запрещён");
        // Подключаем CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'css/style.css';
        document.head.appendChild(link);

        document.body.innerHTML = `
      <div style="
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        text-align: center;
      ">
        <h2>Доступ запрещён</h2>
        <img src="https://github.com/GamzeeChert/gamzeechert.github.io/raw/main/assets/images/prank.gif" 
             alt="prank" style="max-width:300px; margin-top:20px;">
    <a href="./index.html" class="button-link">🌐 Главная страница</a>
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
    </script>

    <div id="content" style="display: none;">
        <h1>📝 Правила и шаблоны наказаний для чатов Telegram</h1>
        <h2>⚜️ Раздел с информацией для модераторов и стажёров.</h2>

        <a href="./index.html" class="button-link">🌐 Главная страница</a>
        <a href="./TGRules.html" class="button-link">🔙 Вернуться к правилам</a>

        <hr>

        <p><code>Команды /warn, /delwarn, /mute и т.д. должны обрабатываться по примеру: /warn @user(Или в ответ на сообщение) [time] [reason]</code></p>

        <h3>⏳ • Временные правила:</h3>
        <p>Запрещены <strong>политические дискуссии, агитация и провокационные темы</strong>, не относящиеся к проекту <em>[/warn 6h Политика]</em>;</p>

    <!--<p>За использование <strong>нецензурной лексики</strong> в чатах, а также <strong>попытку обхода фильтра запрещённых слов</strong> будет выдаваться <strong>предупреждение</strong> <em>[/warn 6h Обход фильтра]</em>.</p> -->

        <p>За <strong>чрезмерное использование нецензурной лексики</strong> будет выдаваться <strong>предупреждение</strong><em>[/warn 6h Нецензурная лексика]</em>.</p>

        <h3>🚫 • Запрещено:</h3>
        <ol>
            <li>Спам <em>[/ban Спам]</em>;</li>
            <li>ASCII графика <em>[/warn 3d ASCII]</em>;</li>
            <li>Флуд <em>[/warn 12h Флуд]</em>;</li>
            <li>Отправка <strong>материалов</strong> с тегом 18+ (Шок-контент) <em>[/ban 18+]</em>;</li>
            <li>Отправка <strong>стикеров</strong> с тегом 18+ <em>[/ban 18+]</em>;</li>
            <li>Отправка сообщений/материалов <strong>от имени канала</strong> (Разрешено только от личного аккаунта) <em>[/ban Скрытый пользователь]</em>;</li>
            <li>Прямые или косвенные <strong>оскорбления</strong> других участников <em>[/warn 3d Оскорбление]</em>;</li>
            <li><strong>Дискриминация</strong> по национальному, религиозному или иному признаку <em>[/warn 3d Дискриминация]</em>;</li>
            <li>Угрозы <em>[/warn 3d Угрозы]</em>;</li>
            <li>Действия, направленные на <strong>провокацию конфликтов, травлю или преследование участников</strong> <em>[/warn 3d Провокация]</em>;</li>
            <li><strong>Пропаганда</strong> насилия, оружия, наркотических средств, алкоголя, табачных изделий <em>[/warn 3d Пропаганда]</em>;</li>
            <li>Распространение сообщений/материалов, разглашающие <strong>любую информацию</strong> участника/модератора/администратора <strong>без его согласия</strong> <em>[/ban Конфиденциальность]</em>;</li>
            <li><strong>Размещение рекламы</strong> сторонних проектов/ресурсов/файлов <strong>без разрешения администрации</strong> <em>[/warn 3d Реклама]</em>;</li>
            <li><strong>Распространение программ</strong> с уязвимостями/вирусами <em>[/ban Программы]</em>;</li>
            <li><strong>Продажа</strong> игровых аккаунтов/карт <em>[/ban Продажа]</em>;</li>
            <li>Распространение <strong>ложной информации</strong>; <em>[/warn 1d Дизинформация]</em>;</li>
            <li>Попрошайничество <em>[/warn 1d Попрошайничество]</em>;</li>
            <li>Выдавать себя за <strong>модерацию/администрацию</strong> проектов <em>[/ban Фейк персонал]</em>;</li>
            <li><strong>Критика</strong> действий модерации/администрации <em>[/warn 1d Критика персонала]</em>;</li>
            <li><strong>Неадекватная критика</strong>. Даже если вам не нравится какой-то контент в игре, <strong>не стоит оскорблять чужой труд</strong> <em>[/warn 1d Неадекватная критика]</em>;</li>
            <li><strong>Использование дополнительных аккаунтов</strong> для обхода ограничений/блокировки <em>[/ban Обход ограничений]</em>;</li>
            <li>Использование команд /report и @admin <strong>без  весомой причины</strong> <em>[/warn 1d Пинг администрации без причины]</em>.</li>
        </ol>

        <h3>⚠️ • Не рекомендуется:</h3>
        <ol>
            <li>Злоупотребление Caps Lock <em>[/warn 12h CapsLock]</em>;</li>
            <li>Злоупотребление смайлами <em>[/warn 12h Злоупотребление смайлами]</em>;</li>
            <li>Злоупотребление реакциями под сообщениями <em>[/warn 6h Злоупотребление реакциями]</em>;</li>
            <li><strong>Игнорирование предупреждений</strong> от модерации/администрации <em>[/warn 1d Игнорирование предупреждений]</em>.</li>
        </ol>

        <h3>ℹ️ • Прочая информация:</h3>
        <ul>
            <li><strong>С 00:00 до 09:00</strong> (МСК) действует ограничение на отправку медиа во всех чатах.</li>
            <li>Каждый случай нарушения уникален - в шаблоне указаны <strong>минимальные</strong> сроки наказаний. Модераторы и стажёры вправе сами выбирать срок действия наказания, но срок не должен быть <strong>минимальнее шаблонному</strong> и быть <strong>длительнее одного месяца</strong>.</li>
            <li>С прочей информацией модераторы и стажёры могут ознакомиться непосредственно в чате Персонала.</li>
        </ul>

        <hr>

        <details>
          <summary style="padding-left: 10px; color: #75D2F2; font-size: 25px;">👥 Роли Персонала:</summary>
          <ul>
            <details>
              <summary style="padding-left: 30px; color: #AA97FF; font-size: 20px;">👑 <strong>Основатель</strong></summary>
              <ul>
                <li>Отображается первым в списке Персонала;</li>
                <li>Управляет всеми пользователями.</li>
              </ul>
            </details>
            <details>
              <summary style="padding-left: 30px; color: #AA97FF; font-size: 20px;">⚜ <strong>Соучредитель</strong></summary>
              <ul>
                <li>Отображается в списке Персонала;</li>
                <li>Управляет модераторами, помощниками, свободными пользователями и может их заблокировать;</li>
                <li>Не может управлять администраторами.</li>
              </ul>
            </details>
            <details>
              <summary style="padding-left: 30px; color: #AA97FF; font-size: 20px;">👮🏻‍♂️ <strong>Админ</strong></summary>
              <ul>
                <li>Отображается в списке Персонала;</li>
                <li>Может модерировать пользователей (через Telegram или с помощью команд таких как /ban);</li>
                <li>Может удалять сообщения (через Telegram или с помощью /del и /logdel).</li>
              </ul>
            </details>
            <details>
              <summary style="padding-left: 30px; color: #AA97FF; font-size: 20px;">👷🏻 <strong>Модератор</strong></summary>
              <ul>
                <li>Отображается в списке Персонала;</li>
                <li>Может использовать все команды модерации (ban, kick, unban, info, infopvt, mute, unmute);</li>
                <li>Не может удалять сообщения;</li>
                <li>Является свободным от бота.</li>
              </ul>
            </details>
            <details>
              <summary style="padding-left: 30px; color: #AA97FF; font-size: 20px;">🛃 <strong>Очиститель</strong></summary>
              <ul>
                <li>Отображается в списке Персонала;</li>
                <li>Может удалять сообщения с помощью /del или /logdel;</li>
                <li>Не имеет команд модерации;</li>
                <li>Не свободен от бота.</li>
              </ul>
            </details>
            <details>
              <summary style="padding-left: 30px; color: #AA97FF; font-size: 20px;">🙊 <strong>Ограничитель (Модератор на стажировке)</strong></summary>
              <ul>
                <li>Отображается в списке Персонала;</li>
                <li>Может накладывать и снимать ограничения с пользователей;</li>
                <li>Нет команд модерации или удаления сообщений;</li>
                <li>Является свободным от бота.</li>
              </ul>
            </details>
            <details>
              <summary style="padding-left: 30px; color: #AA97FF; font-size: 20px;">⛑ <strong>Помощник</strong></summary>
              <ul>
                <li>Отображается в списке Персонала;</li>
                <li>Не имеет дополнительных прав управления пользователями;</li>
                <li>Не освобожден от бота.</li>
              </ul>
            </details>
            <details>
              <summary style="padding-left: 30px; color: #AA97FF; font-size: 20px;">🔓 <strong>Свободный</strong></summary>
              <ul>
                <li>Бот будет игнорировать его флуд, спам.</li>
              </ul>
            </details>
          </ul>
        </details>

        <hr>

        <h2>🤖 Команды бота:</h2>

        <details>
          <summary style="padding-left: 10px; color: #75D2F2; font-size: 25px;">Основные команды</summary>
          <ul>
            <li><strong>help</strong> - (👥) Основные команды бота;</li>
            <li><strong>staff, elencoruoli</strong> - (❓|👥) Отобразить Персонал группы;</li>
            <li><strong>rules</strong> - (❓|👥) Отправить правила группы;</li>
            <li><strong>link</strong> - (❓|👥) Отправить ссылку на группу;</li>
            <li><strong>me, io</strong> - (❓|👥) Отправить в приватный чат сообщение с данными аккаунта;</li>
            <li><strong>report</strong> - (👥) Отправить репорт на пользователя;</li>
            <li><strong>reload</strong> - (👑⚜👮🏻‍♂️👷🏻) Перезагрузка бота;</li>
            <li><strong>del</strong> - (👑⚜👮🏻‍♂️👷🏻🛃) Удаление сообщения пользователя;</li>
            <li><strong>logdel</strong> - (👑⚜👮🏻‍♂️👷🏻🛃) Удаление сообщения пользователя с отправкой в лог;</li>
            <li><strong>log</strong> - (👑⚜👮🏻‍♂️👷🏻) Отправка сообщения в лог;</li>
            <li><strong>info</strong> - (👑⚜👮🏻‍♂️👷🏻) Отправка сообщения с информацией о пользователе;</li>
            <li><strong>infopvt</strong> - (👑⚜👮🏻‍♂️👷🏻) Отправка в приватный чат сообщения с информацией о пользователе;</li>
            <li><strong>list</strong> - (👑⚜👮🏻‍♂️) Отправка в приватный чат список всех пользователей;</li>
            <li><strong>listroles</strong> - (👑⚜👮🏻‍♂️) Отправка в приватный чат список ролей пользователей;</li>
            <li><strong>inactives</strong> - (👑⚜👮🏻‍♂️) Отправка в приватный чат список всех неактивных пользователей.</li>
          </ul>
        </details>

        <details>
          <summary style="padding-left: 10px; color: #75D2F2; font-size: 25px;">Команды управления пользователем</summary>
          <ul>
            <li><strong>kick</strong> - (👑⚜👮🏻‍♂️👷🏻) Выгнать пользователя;</li>
            <li><strong>delkick</strong> - (👑⚜👮🏻‍♂️👷🏻🛃) Выгнать пользователя и удалить его сообщение;</li>
          </ul>

          <details>
            <summary style="padding-left: 15px; color: #AA97FF; font-size: 20px;">Блокировка/разблокировка</summary>
            <ul>
              <li><strong>ban</strong> - (👑⚜👮🏻‍♂️👷🏻) Заблокировать пользователя;</li>
              <li><strong>unban</strong> - (👑⚜👮🏻‍♂️👷🏻) Разблокировать пользователя;</li>
              <li><strong>delban</strong> - (👑⚜👮🏻‍♂️👷🏻🛃) Заблокировать пользователя и удалить его сообщение;</li>
            </ul>
          </details>

          <details>
            <summary style="padding-left: 15px; color: #AA97FF; font-size: 20px;">Выдача/снятие предупреждений</summary>
            <ul>
              <li><strong>warn</strong> - (👑⚜👮🏻‍♂️👷🏻) Предупредить пользователя;</li>
              <li><strong>unwarn</strong> - (👑⚜👮🏻‍♂️👷🏻) Снять предупреждение с пользователя;</li>
              <li><strong>delwarn</strong> - (👑⚜👮🏻‍♂️👷🏻🛃) Предупредить пользователя и удалить его сообщение;</li>
              <li><strong>warns</strong> - (👑⚜👮🏻‍♂️👷🏻) Просмотр и управление предупреждениями пользователя;</li>
            </ul>
          </details>

          <details>
            <summary style="padding-left: 15px; color: #AA97FF; font-size: 20px;">Выдача/снятие мьютов</summary>
            <ul>
              <li><strong>mute</strong> - (👑⚜👮🏻‍♂️👷🏻🙊) Замьютить пользователя;</li>
              <li><strong>unmute</strong> - (👑⚜👮🏻‍♂️👷🏻🙊) Размьютить пользователя;</li>
              <li><strong>delmute</strong> - (👑⚜👮🏻‍♂️👷🏻🛃) Замьютить пользователя и удалить его сообщение;</li>
            </ul>
          </details>
        </details>

        <details>
          <summary style="padding-left: 10px; color: #75D2F2; font-size: 25px;">Команды управления несколькими пользователями</summary>
          <ul>
            <li><strong>multikick, mkick</strong> - (👑⚜👮🏻‍♂️👷🏻) Выгнать нескольких пользователей;</li>
          </ul>

          <details>
            <summary style="padding-left: 15px; color: #AA97FF; font-size: 20px;">Блокировка/разблокировка</summary>
            <ul>
              <li><strong>multiban, mban</strong> - (👑⚜👮🏻‍♂️👷🏻) Заблокировать нескольких пользователей;</li>
              <li><strong>multiunban, munban</strong> - (👑⚜👮🏻‍♂️👷🏻) Разбанить нескольких пользователей;</li>
            </ul>
          </details>

          <details>
            <summary style="padding-left: 15px; color: #AA97FF; font-size: 20px;">Выдача/снятие мьютов</summary>
            <ul>
              <li><strong>multimute, mmute</strong> - (👑⚜👮🏻‍♂️👷🏻) Замьютить нескольких пользователей;</li>
              <li><strong>multiunmute, munmute</strong> - (👑⚜👮🏻‍♂️👷🏻) Размьютить нескольких пользователей;</li>
            </ul>
          </details>
        </details>

        <details>
          <summary style="padding-left: 10px; color: #75D2F2; font-size: 25px;">Команды управления группой</summary>
          <ul>
            <li><strong>settings, config, pvtconfig</strong> - (👑⚜👮🏻‍♂️) Меню настроек группы;</li>
            <li><strong>backup</strong> - (👑) Получить резервную копию настроек в виде QR-кода;</li>
            <li><strong>importbackup</strong> - (👑) Импортировать резервную копию настроек, используя QR-код;</li>
            <li><strong>silence</strong> - (👑⚜👮🏻‍♂️) Включить глобальное молчание в группе;</li>
            <li><strong>unsilence</strong> - (👑⚜👮🏻‍♂️) Отключить глобальное молчание в группе;</li>
            <li><strong>ammoniti</strong> - (👑⚜👮🏻‍♂️) Список активных предупреждений всех пользователей в группе;</li>
            <li><strong>block</strong> - (👑⚜👮🏻‍♂️) Заблокировать стикер/стикерпак;</li>
            <li><strong>unblock</strong> - (👑⚜👮🏻‍♂️) Разблокировка стикера/стикерпака;</li>
            <li><strong>graphic</strong> - (👑⚜👮🏻‍♂️) Тренд количества участников в группе в графическом формате;</li>
            <li><strong>trend</strong> - (👑⚜👮🏻‍♂️) Тренд количества участников в группе в текстовом формате;</li>
            <li><strong>views, addviews</strong> - (👑⚜👮🏻‍♂️) Просмотр активных пользователей;</li>
            <li><strong>delall</strong> - (👑⚜👮🏻‍♂️🛃) Пуск от сообщения для удаления;</li>
            <li><strong>delallgo</strong> - (👑⚜👮🏻‍♂️🛃) Конец до сообщения для удаления.</li>
          </ul>
        </details>

        <hr>

        <details>
          <summary style="padding-left: 10px; color: #75D2F2; font-size: 25px;">Пояснение ролей</summary>
          <ul>
            <li>👑 - Команды, доступные основателю;</li>
            <li>⚜ - Команды, доступные соучредителю;</li>
            <li>👮🏻‍♂️ - Команды, доступные администратору;</li>
            <li>👷🏻 - Команды, доступные модератору;</li>
            <li>🛃 - Команды, доступные очистителю;</li>
            <li>🙊 - Команды, доступные ограничителю (модератору на стажировке);</li>
            <li>👥 - Команды, доступные всем пользователям группы;</li>
            <li>❓ - При условии, если не изменено в настройках группы через бота.</li>
          </ul>
        </details>

        <details>
          <summary style="padding-left: 10px; color: #75D2F2; font-size: 25px;">Обозначения времени</summary>
          <ul>
            <li>s или seconds - Секунды;</li>
            <li>m или minutes - Минуты;</li>
            <li>h или hours - Часы;</li>
            <li>d или days - Дни;</li>
            <li>w или week - Недели;</li>
            <li>M или month - Месяцы;</li>
            <li>u или years - Годы.</li>
          </ul>
        </details>
    </div>
</body>
