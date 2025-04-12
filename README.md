[![HTML CSS valid](https://github.com/Alecto/grid-template/actions/workflows/HTML5Validator.yml/badge.svg)](https://github.com/Alecto/grid-template/actions/workflows/HTML5Validator.yml)
[![Code style](https://github.com/Alecto/grid-template/actions/workflows/EditorConfig.yml/badge.svg)](https://github.com/Alecto/grid-template/actions/workflows/EditorConfig.yml)
[![Deploy](https://github.com/Alecto/grid-template/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/Alecto/grid-template/actions/workflows/pages/pages-build-deployment)

# GRID-TEMPLATE

Фінальна версія учбового проекту GRID-TEMPLATE. Цей проект демонструє один із варіантів верстання адаптивного сайту з використанням CSS Grid.

## Структура проекту

Проект має наступну структуру файлів і директорій:

```
project/
├── assets/
│   ├── css/         # скомпільовані CSS файли
│   ├── images/      # зображення
│   ├── js/          # JavaScript файли
│   └── vendors/     # зовнішні бібліотеки
└── src/
    └── scss/        # SCSS файли
```

## Про проект

### Автоматизація

Проект налаштований з використанням Gulp для автоматизації процесу розробки. Всі необхідні залежності вже встановлені.

Для роботи з проектом виконайте:

```
npm install
gulp watch
```

Більше інформації про налаштування Gulp: [Інструкції з налаштування Gulp](https://github.com/FomenkoAndrey/gulp-training/tree/master)

### Дизайн

Проект реалізований за макетом Figma:
[Figma макет GRID-TEMPLATE](https://www.figma.com/design/Xzmk5hBhdY8HsmcBkiuo1B/grid-template?m=auto&t=ytF7Gf4G7xPeQy7M-6)

## Використані технології

У проекті застосовано:

1. Семантичний HTML5
2. CSS Grid для створення адаптивних сіток
3. Методологія BEM для іменування класів
4. SCSS як препроцесор CSS
