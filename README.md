# Перечень авто и их модели

## Описание

    Фронт и бэк энд простого приложения на DRF и React
 
## Технологии:

    python==3.7.9
    Django==3.2.13
    django-cors-headers==3.12.0
    djangorestframework==3.13.1
    pytz==2022.1
    sqlparse==0.4.2
    typing_extensions==4.2.0
    asgiref==3.5.2
    React.js
    
## Запуск проекта в dev-режиме:

клонируйте проект на локальный компьютер командой:

    git clone https://github.com/Pavelkalininn/test_task_drf_react

### Django 

Установите зависимости из файла requirements.txt
    
        pip install -r requirements.txt
    
В папке с файлом manage.py выполните команду:
    
        python manage.py runserver

### React 

установите пакеты node модулей (если не установлены) командой

    npm install

в папке frontend выполните команду для запуска сервера в режие разработчика

    npm start

Вбраузере откроется приложение по адресу: http://localhost:3000

Для сборки production версии используйте 

    npm run build

## В ближайшее время допишу Docker-compose файл для централизованного запуска

# Автор: __Паша Калинин__