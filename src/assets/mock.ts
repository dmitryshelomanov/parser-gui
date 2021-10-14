export const html = `

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
  <link rel="stylesheet" href="style.css" />
  <title>CV</title>
</head>

<body>
  <canvas></canvas>
  <div class="container">
    <div class="bio">
      <img src="avatar.jpg" draggable="false" />
      <div class="position">
        <h1>Шеломанов Дмитрий</h1>
        <p>Frontend engineer</p>
        <div class="social">
          <a href="https://vk.com/dmitryshelomanov" target="_blank">vk</a>
          <a href="malito:dmitryshelomanov@mail.ru" target="_blank">email</a>
          <a href="https://github.com/dmitryshelomanov" target="_blank">github</a>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col production">
        <h2>Опыт работы</h2>

        <div class="expirience">
          <h3>ООО БК «Олимп»</h3>
          <p class="title">- Senior Frontend Developer (Июнь 2020 - по настоящее время)</p>
          <p>Обязанности:</p>
          <ul>
            <li>Разработка мобильной и десктопной версии сайта</li>
            <li>
              Разработка SDK для написания таких же букмекерских контор </br>
              (Можно подключать логику и кастомизировать, не важно что отвечает за рендер)
            </li>
            <li>Внедрил ревью кода и фиче бранчи</li>
            <li>Внедрил тестирование</li>
          </ul>
          <p>Достижения:</p>
          <ul>
            <li>Разработан гибкий SDK</li>
            <li>Разработана система компонентов</li>
            <li>Переписал старый код с использованием SDK</li>
            <li>Успешно внедрены новые архитектурные решения</li>
          </ul>
          <p>Используемые технологии:</p>
          <ul>
            <li>HTML, CSS</li>
            <li>JS, ES6</li>
            <li>React, Styled Components, Effector, Typescript</li>
            <li>Webpack</li>
          </ul>
        </div>
    
        <div class="expirience">
          <h3>ООО «Диалог»</h3>
          <p class="title">- Senior Frontend Developer (Май 2019 - Август 2020)</p>
          <p>Обязанности:</p>
          <ul>
            <li>Покрытие тестами ui кита.</li>
            <li>Покрытие тестами платформу (dialog-web-platform).</li>
            <li>Разработка модулей для платформы.</li>
            <li>Участие в разработке архитектуры.</li>
            <li>Участие в ревью кода.</li>
          </ul>
          <p>Достижения:</p>
          <ul>
            <li>
              Разработан модуль поиска групп и пользователей (локально плюс
              глобально).
            </li>
            <li>Разработана система настроек.</li>
            <li>Созданы компоненты для виртуализации и мульти селекта.</li>
            <li>Внедрен просмотрщик изображений.</li>
            <li>
              Внедрены решения по архитектуре (работа с браузерной бд плюс
              локальный стейт).
            </li>
          </ul>
          <p>Используемые технологии:</p>
          <ul>
            <li>HTML, CSS</li>
            <li>JS, ES6</li>
            <li>React, AstroTurf, RxJs, RxDb, Flow, Testing-library</li>
            <li>Webpack, Lerna</li>
          </ul>
        </div>
    
        <div class="expirience">
          <h3>Unitemp</h3>
          <p class="title">- Старший разработчик (Февраль 2018 - Май 2019)</p>
          <p>Обязанности:</p>
          <ul>
            <li>Написание кроссплатформенного приложения на React native.</li>
            <li>Разработка архитектуры с нуля для приложения.</li>
            <li>Поиск багов и форк сторонних библиотек.</li>
            <li>Написание собственных библиотек в open source.</li>
          </ul>
          <p>Используемые технологии:</p>
          <ul>
            <li>JS, ES6</li>
            <li>React Native</li>
            <li>redux, redux-thunk, recompose, нативные библиотеки</li>
          </ul>
        </div>
    
        <div class="expirience">
          <h3>ООО "Мир Идей"</h3>
          <p class="title">- Web developer (Июль 2017 - Февраль 2018)</p>
          <p>Обязанности:</p>
          <ul>
            <li>Верстка лендингов.</li>
            <li>Разработка spa на vue js.</li>
            <li>Поддержка существующих проектов.</li>
            <li>Разработка платформы для обработки баннеров.</li>
          </ul>
          <p>Используемые технологии:</p>
          <ul>
            <li>HTML, CSS</li>
            <li>JS, ES6, PHP</li>
            <li>Vue, React, laravel</li>
            <li>Webpack, redux, redux-thunk</li>
          </ul>
        </div>
      </div>

      <div class="col pet">
        <h2>О себе</h2>

        <p>
          Frontend Developer с опытом разработки мобильных приложений на React Native.
          Увлекаюсь новыми языками программирования (из последних Rust, Haskell, Reason).
          Изучаю Computer Science. Помогаю новичкам и пытаюсь писать статьи. В дальнейшем хотел бы попробовать вести курсы.
        </p>

        <div class="expirience">
          <h3>Explory (совместный стартап)</h3>
          <p class="title">-</p>
          <p>Обязанности:</p>
          <ul>
            <li>Разработка приложения на React Native</li>
          </ul>
          <p>Достижения:</p>
          <ul>
            <li>Написано большое приожения (порядка 80 экранов)</li>
            <li>Написано много интенесных решений внутри приложения</li>
            <li>Написано решение для сокетного апи</li>
            <li>Попробовался в роли лида в мобильной разработке</li>
          </ul>
          <p>Используемые технологии:</p>
          <ul>
            <li>React Native, Styled-components</li>
            <li>Effector</li>
            <li>Typescript</li>
          </ul>
          <a href="https://apps.apple.com/ru/app/explory/id1512117513" target="_blank">ios</a>
          <a href="https://play.google.com/store/apps/details?id=io.explory" target="_blank">andoid</a> 
        </div>
    
        <h3>Демо проекты (которые возможно было задеплоить)</h3>
    
        <div class="projects">
          <div>
            <a href="https://dmitryshelomanov.github.io/reason-game-of-life/" target="_blank">Game of Live</a>
            <p>
              Классическая игра жизнь. Написана на языке программирования Reason
            </p>
          </div>
          <div>
            <a href="https://dmitryshelomanov.github.io/tower_of_hanoi/" target="_blank">Towers of Hanoi</a>
            <p>
              Было интересно рассмотреть этот алгоритм. Задачу можно решить с помощью бота или самому (перетягивая кольца)
            </p>
          </div>
          <div>
            <a href="https://dmitryshelomanov.github.io/snake/" target="_blank">Snake AI</a>
            <p>
              В процессе разработке проекта я научился работать с графами.
              В этом проекте можно увидеть визуализацию алгоритмов поиска пути (A*, Дейкстра и другие).
              Визуализация в игровой форме - классическая змейка, так же можно поиграть против ботов
            </p>
          </div>
          <div>
            <a href="https://github.com/mobileFight" target="_blank">Мобитва next</a>
            <a href="http://imobitva.ru/" target="_blank">(референс)</a>
            <p>
              Зародыш клона очень старой игры. Пишется на React + NodeJs.
              Очень интересно реализовать систему квестов и систему боя (Pull requests are welcome)
            </p>
          </div>
          <div>
            <a href="https://dmitryshelomanov.github.io/music-player/" target="_blank">Музыкальный плеер</a>
            <p>
              Простенький плеер с визуализацией
            </p>
          </div>
        </div>

        <h2>Скилы</h2>

        <div class="skills">
          <div>
            <p>Языки</p>
            <ul>
              <li>HTML, CSS</li>
              <li>JS</li>
              <li>Reason</li>
              <li>Rust</li>
            </ul>
          </div>
          <div>
            <p>Технологии</p>
            <ul>
              <li>React, Vue</li>
              <li>Reason React</li>
              <li>React Native</li>
              <li>Webpack, gulp</li>
              <li>Node js</li>
              <li>Koa, Express</li>
              <li>RxJs, RxDb</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
`;
