## Рабочая ссылка на приложение 
[52.56.104.238](http://52.56.104.238)

## Запуск в режиме разработки 
`yarn dev`   

## Сборка приложения 
`yarn build`   

## Запуск докер контейнера 
`docker-compose up`

____
Тестовое задание:
Необходимо разработать одностраничное приложение для возможности просмотра и редактирования данных сотрудников компании. Внешний вид приложения зависит от вас. Верстка должна быть адаптивной и корректно отображаться на разных устройствах. Стартовый набор данных для приложения находится в файле employees.json (db.json).
Срок выполнения задания не более 7 дней с момента его получения.

Логика работы
1. При открытии приложения мы должны увидеть список сотрудников и форму для их фильтрации. У каждого из сотрудников в списке должны отображаться его имя, должность и номер телефона. Должна существовать возможность сортировки списка сотрудников по имени и дате рождения. Фильтровать сотрудников нужно по их должности и их статусу. Должность - выпадающий список, содержащий (Повар, Официант, Водитель). Статус - чекбокс с лейблом "в архиве".
2. При нажатии в списке на одного из сотрудников должна появиться страница с формой редактирования данных сотрудника. Форма редактирования должна иметь поля: имя сотрудника - текстовое поле, телефон - текстовое поле с маской, дата рождения - текстовое поле с маской, должность - выпадающий список, содержащий (Повар, Официант, Водитель), статус - чекбокс с лейблом "в архиве".
3. Приложение должно предусматривать добавление новых сотрудников в систему.
4. Приложение так же должно поддерживать роутинг (browser history).

Требуемые технологии
1. Фронтенд фреймворк - ReactJS. Роутер - react-router, либо любой другой подходящий для вас (можно свой).  Если не знаете react, то можете взять любой другой фреймворк.
2. Применение css препроцессоров SASS(SCSS), PostCss, ...
3. CSS фреймворк на ваше усмотрение.
4. Большим плюсом будет использование в разработке webpack, webpack hot module replacement.
5. Использовать Redux при разработке.

Требования к исходному коду
1.	Код должен быть легко читаем.
2.	Особых требований к структуре проекта не предъявляется, требуется лишь чтобы присутствовала разбивка на модули.
3.	Приложение должно быть устойчиво к ошибкам пользователя и выдавать понятные и информативные сообщения об ошибках.
4.	Приложение должно поддерживать протоколирование (в консоль) основных событий, отладочных событий и сообщений об ошибках.
