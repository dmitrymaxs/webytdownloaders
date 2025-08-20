# Руководство разработчика

## Подготовка окружения

### Требования

- Git
- Современный веб-браузер
- Текстовый редактор или IDE

### Клонирование репозитория

```bash
git clone https://github.com/dmitrycema/dmitrycema.github.io.git
cd dmitrycema.github.io
```

## Структура проекта

```
dmitrycema.github.io/
├── README.md           # Основная документация
├── index.html          # Главная страница
├── docs/              # Техническая документация
│   ├── README.md
│   ├── deployment.md
│   └── developer-guide.md
├── assets/            # Статические ресурсы
│   ├── css/           # Стили
│   ├── js/            # JavaScript файлы
│   └── images/        # Изображения
└── .gitignore         # Git исключения
```

## Разработка

### Локальная разработка

1. Откройте `index.html` в браузере для предварительного просмотра
2. Для более продвинутой разработки используйте локальный веб-сервер:

```bash
# Python 3
python -m http.server 8000

# Node.js (если установлен)
npx http-server

# PHP (если установлен)
php -S localhost:8000
```

### Добавление стилей

1. Создайте CSS файл в папке `assets/css/`
2. Подключите его в `index.html`:
```html
<link rel="stylesheet" href="assets/css/styles.css">
```

### Добавление JavaScript

1. Создайте JS файл в папке `assets/js/`
2. Подключите его в `index.html`:
```html
<script src="assets/js/script.js"></script>
```

## Рабочий процесс

### Внесение изменений

1. Создайте новую ветку для фичи:
```bash
git checkout -b feature/new-feature
```

2. Внесите изменения

3. Зафиксируйте изменения:
```bash
git add .
git commit -m "Добавлена новая функция"
```

4. Отправьте изменения:
```bash
git push origin feature/new-feature
```

5. Создайте Pull Request

### Слияние с основной веткой

После ревью и одобрения изменения сливаются в ветку `main`, что автоматически запускает развертывание на GitHub Pages.

## Лучшие практики

- Используйте семантичные commit сообщения
- Тестируйте изменения локально перед отправкой
- Следуйте стандартам HTML5 и современного CSS
- Оптимизируйте изображения перед добавлением
- Проверяйте кроссбраузерную совместимость