```                                                          


    (hh) 24-02-2026                            
    ▐▛▀▀▘▐▛▀▚▖▗▞▀▀▚▖▗▖  ▗▖▗▄▄▄▖▐▛▀▀▘▗▖  ▗▖▗▄▄▄ 
    ▐▙▄▄ ▐▌ ▐▌▐▌  ▐▌▐▛▚▖▐▌  █  ▐▙▄▄ ▐▛▚▖▐▌▐▌  █
    ▐▌   ▐▛▀▚▖▐▌  ▐▌▐▌ ▝▜▌  █  ▐▌   ▐▌ ▝▜▌▐▌  █
    ▐▌   ▐▌ ▐▌▝▚▄▄▞▘▐▌  ▐▌  █  ▐▙▄▄▖▐▌  ▐▌▐▙▄▄▀
                                 ИНФРАСТРУКТУРА

                                                          
```

😎 Иван Петропольский, фронтенд-разработчик, Монетизация

✅ Камера

🚫 Микрофон

✅ Вопросы — голосом

📣 Вопросы в чате — кто последит?

☕️ Перерыв — если надо

💬 После лекции: чат ~frontend

🔴 Включена запись 👀


# Всем привет!













## Содержание


### Введение

- [Что за инфраструктура](#what-is-it)
- [О чём поговорим](#frontend-infra)


### Окружение

- [Docker](#docker-logo) — воспроизводимое окружение
- [Shell](#shell-logo) — командная строка, терминал
- [Bash](#bash-logo) — скрипты автоматизации
- [SSH](#ssh-logo) — удалённый доступ
- [NodeJS](#nodejs-logo) — JavaScript вне браузера
- [NPM](#npm-logo) — менеджер пакетов
- [Git](#git-logo) — контроль версий


### Проект

- [Конфиги](#configs-logo) — настройка проекта
- [Линтеры и форматтеры](#linters-logo) — ESLint, Prettier
- [Скрипты](#scripts-logo) — npm-scripts, git-hooks
- [Сборка](#build-logo) — Vite, SWC, PostCSS
- [Деплой](#deploy-logo) — gh-pages, GitHub Actions
- [LLM Агенты](#llm-logo) — работа с AI
- [Рекомендую](#recommend-logo) — полезные сервисы


### Домашка!

- [Задание](#homework-logo)















---
<a id="what-is-it"></a>
# Что за инфраструктура

Начнём издалека, для общего понимания:
- Кто мы? Веб-разработчики!
- Что мы делаем? Разрабатываем веб-сервисы!















<a id="page-load"></a>
## Page Load Lifecycle

В общем случае задача любого веб-сервиса:
- Отдать по запросу HTML, CSS, JS или медиа

![internet](./internet.jpg)

Наш кусочек на этой схеме — `HTML + JS + CSS`.













<a id="http-request"></a>
### HTTP-запрос

- Метод: GET | POST | PUT | DELETE | ...
- URL: https://hh.ru/search/vacancy
- Параметры: `?areaId=1`
- Заголовки запроса (Accept, Cookie, ...)
- Тело запроса (опционально)



<a id="server-work"></a>
### Работа сервера

- Тут работает то, что накодил бэкенд



<a id="server-response"></a>
### Ответ сервера

- Статус (200 OK, 404 Not Found, ...)
- Заголовки ответа (Content-Type, Set-Cookie, ...)
- Тело ответа — то, что накодил фронтенд

> Демо












<a id="dev-layers"></a>
## Что вообще бывает в разработке

1) **Продуктовый код**             — ценность для пользователя
2) **Архитектура приложения**      — как всё связано между собой
3) **Дизайн-система, UI Kit**      — как всё выглядит и действует
4) **Тестовый слой**               — насколько правильно всё работает
5) **Аналитика и телеметрия**      — насколько всё живое
6) **Процессы разработки**         — как организована наша работа
7) **Документация, база знаний**   — как мы передаём знания
8) **Инфраструктура**              — как код становится продуктом















<a id="infra-definition"></a>
## Скучное определение (одно из)

Инфраструктура — это слой инструментов и автоматизаций,
который не виден пользователю, но делает возможной и удобной
разработку продукта.














<a id="frontend-roadmap"></a>
## Путь фронтендера

https://roadmap.sh/frontend

![frontend-roadmap](./frontend-roadmap-small.png)















<a id="frontend-infra"></a>
# Инфраструктура фронтенда (и не только)

> ⛳️ – есть отдельная лекция, не будем углубляться



<a id="env-section"></a>
## ⚙️ Окружение

- Infrastructure as Code, IaC (Docker, Ansible) ⛳️
- Настройка терминала (интерпретатор, промпт, переменные)
- Shell-скрипты (sh, bash, zsh)
- Удалённый доступ и синхронизация (SSH)
- NodeJS, системы модулей (NodeJS)
- Управление зависимостями (npm, package.json, lock-файлы)
- Системы контроля версий (Git) ⛳️



<a id="project-section"></a>
## 💻 Проект

- Конфигурация проекта (dot-файлы, rc-файлы, env-переменные)
- Линтеры, форматтеры, тайп-чекеры (ESLint, Prettier, tsc)
- Обслуживающие скрипты (npm-scripts, git-хуки, утилиты)
- Системы сборки (Webpack, Vite, Rollup)
- CI/CD пайплайны проверки, ревью, сборки, деплоя (GitHub Actions) ⛳️
- Средства отладки (dev-server, source maps, html-to-source)
- Системы документирования (README, CHANGELOG, Storybook, OpenAPI)



<a id="dev-tools"></a>
## 👀 Инструменты разработки

- Для написания кода (IDE)
- Для генерации кода (агенты, скиллы, MCP, codegen-утилиты)
- Для хостинга и ревью кода (GitHub, BitBucket, Forgejo) ⛳️














---
<a id="docker"></a>
```

  🟡 Окружение
     🟡 Docker   ← мы тут
     ⚫️ Shell
     ⚫️ Bash
     ⚫️ SSH
     ⚫️ NodeJS
     ⚫️ NPM
     ⚫️ Git
  ⚫️ Проект

```














<a id="docker-logo"></a>
```


    ██████╗  ██████╗  ██████╗██╗  ██╗███████╗██████╗
    ██╔══██╗██╔═══██╗██╔════╝██║ ██╔╝██╔════╝██╔══██╗
    ██║  ██║██║   ██║██║     █████╔╝ █████╗  ██████╔╝
    ██║  ██║██║   ██║██║     ██╔═██╗ ██╔══╝  ██╔══██╗
    ██████╔╝╚██████╔╝╚██████╗██║  ██╗███████╗██║  ██║
    ╚═════╝  ╚═════╝  ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
                                          Контейнеры


```

<a id="docker-intro"></a>
# Docker — воспроизводимое окружение

https://www.docker.com

- Контейнер = изолированное приложение + все его зависимости
- Окружение работает одинаково на любой машине
- Основа современной DevOps и CI/CD

![docker](./docker.webp)

![how-docker-works](./how-docker-works.png)












<a id="dockerfile"></a>
## Dockerfile — инструкции для создания образа

Дока:
https://docs.docker.com/reference/dockerfile

Примеры:
https://github.com/ipetropolsky/docker




















<a id="docker-demo"></a>
## Демо

1) Собираем и запускаем контейнер.

2) Меняем Dockerfile:
```bash
# Просто пример команды, выполняемой при сборке
RUN echo 'echo "Hello, $(whoami)"!' >> /home/hh/.bashrc
```

3) Собираем и запускаем снова, видим "Hello, hh!".
















<a id="docker-run"></a>
## Запуск с готовым образом

https://hub.docker.com — реестр образов

```bash
# Запуск контейнера с NodeJS
docker run -dit --name n1 node

# С кириллицей и монтированием папки внутрь
docker run -dit \
  -e LANG='C.UTF-8' \
  -e LC_ALL='C.UTF-8' \
  --name n1 \
  -v $(pwd)/codebase:/home/node/codebase \
  node

# Список контейнеров
docker ps -a | grep n1

# Вход
docker exec -it n1 /bin/bash

# Ошибка, нет less
less /etc/os-release

# Установить пакет
apt-get update
apt-get install less

# Что за система (Debian)
less /etc/os-release

# Заходим под юзером node
su node

# Идём в home-папку, смотрим где мы, что вокруг
cd
pwd
ls -la  # видим codebase

# Пишем в codebase
echo 'Hello from n1' > codebase/hello.txt

# Выходим из юзера node (^D)
exit

# Выходим из контейнера (^D)
exit

# Можно локально закоммитить изменения в системе,
# (но не в подключённых папках)
docker commit n1 node-local

# Проверяем
docker images | grep local

# Теперь можно запустить другой контейнер (n2)
docker run -dit \
  -e LANG='C.UTF-8' \
  -e LC_ALL='C.UTF-8' \
  --name n2 \
  -v $(pwd)/codebase:/home/node/codebase \
  node-local

# Вход
docker exec -it n2 /bin/bash

# Ошибки нет, less установлен в образе
less /etc/os-release

exit

# Удалить созданный образ
docker rmi node-local
```















---
<a id="shell"></a>
```

  🟡 Окружение
     ✅ Docker
     🟡 Shell    ← мы тут
     ⚫️ Bash
     ⚫️ SSH
     ⚫️ NodeJS
     ⚫️ NPM
     ⚫️ Git
  ⚫️ Проект

```















<a id="shell-logo"></a>
```

                                           
    Скрипты                                 
    ░██████   ░██                   ░██ ░██ 
  ░██    ░██  ░██                   ░██ ░██ 
  ░██         ░████████   ░███████  ░██ ░██ 
    ░██████   ░██    ░██ ░██    ░██ ░██ ░██ 
          ░██ ░██    ░██ ░█████████ ░██ ░██ 
  ░██     ░██ ░██    ░██ ░██        ░██ ░██ 
   ░███████   ░██    ░██  ░███████  ░██ ░██ 
                                            

                                            
```

<a id="shell-intro"></a>
# Shell, командная строка, CLI, терминал, консоль

## Shell

Интерпретатор команд:
```bash
# Введённых пользователем
echo $TERM  # xterm-256color

# Написанных в скриптах
source script.sh  # xterm-256color

# Указанных при запуске шелла
bash -c 'echo $TERM'  # xterm-256color
ssh host 'echo $TERM'  # dumb
```



<a id="cli"></a>
## CLI (Command Line Interface)

Набор команд для шелла, антоним GUI (например, git)



<a id="command-line"></a>
## Командная строка (Command Line)

Интерактивный интерфейс для ввода команд:
- Промпт: команда



<a id="terminal"></a>
## Терминал (консоль)

Чёрное окно с командной строкой:
- Windows 11: WSL2 + Ubuntu + Windows Terminal
- Mac, Linux: просто системный терминал

> ❓ Кто на Windows?















<a id="shell-chatgpt"></a>
## ChatGPT

```
    Шелл не требует человека.
    Он требует поток байтов с текстом команд.

    Человек — просто один из возможных источников этого потока.

    Красиво, если подумать. Почти минимализм.
```















<a id="shell-variants"></a>
## Варианты шелла (интерпретатора)

- `sh` — скорость и лёгкость за счёт функций
- `bash` — золотой стандарт, есть почти везде
- `zsh` — самый продвинутый, дефолт на Маках
- `ash`
- `dash`
- `ebash`
- `fish`
- ...

> ❓ Какой ненастоящий?



Текущий интерпретатор:
```bash
echo $0  # /bin/bash — путь к бинарнику
```















<a id="shell-setup"></a>
## Настройка командной строки

1) Переменные окружения (env-переменные):
- sh: `ENV=путь-к-файлу`
- bash: `~/.bashrc`
- zsh: `~/.zshrc`

> Демо

```bash
# Объявление переменных
FOO=bar
export FOO_EXPORT=bar

# Текущий шелл и скрипты в нём
echo $FOO  # bar

# Сабшелл
bash -c 'echo $FOO'  # пусто
bash -c 'echo $FOO_EXPORT'  # bar
```

2) Цветной терминал

3) Вывод контекста в промпте:
- Ветка git
- Статус предыдущей команды
- И ещё миллион вещей

4) Тюнинг истории

5) Алиасы для команд



Пример:
https://github.com/ipetropolsky/bash-setup

> Демо















<a id="shell-advanced-setup"></a>
### Настройка посерьёзнее

- https://ohmyz.sh (zsh)
- https://ohmyposh.dev (bash)
- https://starship.rs (all)















---
<a id="bash"></a>
```

  🟡 Окружение
     ✅ Docker
     ✅ Shell
     🟡 Bash     ← мы тут
     ⚫️ SSH
     ⚫️ NodeJS
     ⚫️ NPM
     ⚫️ Git
  ⚫️ Проект

```















<a id="bash-logo"></a>
```

                                  
          ▄▄                ▄▄    
  ▄▄      ██                ██    
   ▀█▄    ████▄  ▀▀█▄ ▄█▀▀▀ ████▄ 
    ▄█▀   ██ ██ ▄█▀██ ▀███▄ ██ ██ 
  ▄█▀     ████▀ ▀█▄██ ▄▄▄█▀ ██ ██ 
                Автоматизируй это 

                                  
```

<a id="bash-intro"></a>
# Bash — Bourne Again SHell

- Самый популярный шелл
- Есть переменные, условия, циклы, функции
- Основа большинства CI/CD-скриптов и DevOps-инструментов

⚠️ Важно: не программируйте на bash (и вообще в консоли)















<a id="bash-debug"></a>
## Справка и отладка

- `--version`
- `--help`, `man`
- `--verbose`, `-v`
- `which`, `type`
- `echo`, `printf`
- Кавычки `'` без подстановки $
- Кавычки `"` с подстановкой $

```bash
node --version
npm --version
git --help
man grep

which node
type cd

echo $RANDOM

# Подставится результат команды и значение переменной (")
echo "Hello from $(uname), #$UID"!

# Команда и переменная НЕ подставятся (')
echo 'Hello from $(uname), #$UID'!

# В printf подстановки указываются явно,
# в том числе перевод строки: \n
printf "Hello from %s, #%s!\n" "$(uname)" $UID
printf 'Hello from %s, #%s!\n' "$(uname)" $UID
```















<a id="bash-files"></a>
## Файлы и каталоги

- `~`, `.`, `..`, `/`
- `ls`, `cd`, `pwd`, `mkdir`
- `cp`, `mv`, `ln`, `rm`, `touch`

```bash
pwd
ls -la
mkdir -p src/components

cd src/components
touch component.tsx
mv component.tsx Component.tsx
cd ../..

cp .env.example .env
ln -s AGENTS.md CLAUDE.md
rm -rf dist
```















<a id="bash-io"></a>
## Чтение и запись

- `stdin` (0)
- `stdout` (1)
- `stderr` (2)
- `/dev/null`
- `|`, `>`, `>>`, `2>&1`
- `cat`, `tail`, `head`
- `less` + поиск: `/`, выход `q`
- `vim` + база: `i`, `Esc`, выход `:q`

```bash
ls .  # cписок файлов в stdout
ls . | less  # список файлов в stdin less
ls . | wc -l  # количество файлов
ls . | grep .png  # список PNG
ls . | grep .png | wc -l  # количество PNG

ls bubu  # No such file or directory
ls bubu 2>/dev/null  # Пусто

echo 'NODE_ENV=development' > .env
echo 'API_URL=http://localhost:3000' >> .env

cat package.json
head -n 20 tsconfig.json
tail -f logs/dev.log

npm run build > build.log 2>&1
less build.log
```















<a id="bash-search"></a>
## Поиск

- `find . -name "*.md"`
- `grep "текст" filename`
- `grep -r "текст" .`
- `grep -Eo '\$git[a-z0-9_]+' filename`

```bash
find . -name '*.ts'
find . -name '*.env*'

grep 'useEffect' src/App.tsx
grep -r 'TODO:' src

grep -REo 'process\.env\.[A-Z_]+' src
grep -REoh 'process\.env\.[A-Z_]+' src | sort -u
```















<a id="bash-exec"></a>
## Запуск и права

- `. filename`
- `source filename`
- `chmod`
- `chown`
- `sudo`

```bash
# Выполнить скрипт (может быть неисполняемым)
. ./scripts/env.sh
source .venv/bin/activate

# Выполнить с супер-правами
sudo ./evil-script-from-the-internet.sh

# Сделать исполняемым
chmod +x scripts/run_tests.sh

# Поменять владельца рекурсивно
sudo chown -R $USER:$USER node_modules
```















<a id="bash-requests"></a>
## Запросы

- `curl`
- `wget`

```bash
curl https://example.com
curl -v https://example.com

curl -X POST https://example.com/api \
     -H 'Content-Type: application/json' \
     -d '{"ping": true}'

curl -s https://example.com > example.html
curl -s https://example.com | grep -Eo '[a-z]+: ?#[a-z0-9]+'
```















<a id="bash-control"></a>
## Управление

- Комбинирование команд: `&&`, `||`, `if`, `for`, `while`
- Автодополнение: `↑`, `Tab`, `^R`
- Перемещение в строке: `Alt` + `←/→`, `^A`, `^E`, `^U`, `^K`
- Отмена и выход: `^C`, `^D`

```bash
# Цепочки команд
npm run lint && npm run test
npm run build || echo 'Build failed'

# if
if [ -f .env ]; then
    echo '.env exists'
fi

# for
for f in src/*.ts; do
    echo $f
done

# Составная цепочка типа if-else
SCORE=$RANDOM && [ "$SCORE" -gt 16384 ] && echo "$SCORE: You win"! || echo "$SCORE: You lose"!
```















---
<a id="ssh"></a>
```

  🟡 Окружение
     ✅ Docker
     ✅ Shell
     ✅ Bash
     🟡 SSH      ← мы тут
     ⚫️ NodeJS
     ⚫️ NPM
     ⚫️ Git
  ⚫️ Проект

```















<a id="ssh-logo"></a>
```

                                  
                        ██\       
     Удалённый доступ   ██ |      
     ███████\  ███████\ ███████\  
    ██  _____|██  _____|██  __██\ 
    \██████\  \██████\  ██ |  ██ |
     \____██\  \____██\ ██ |  ██ |
    ███████  |███████  |██ |  ██ |
    \_______/ \_______/ \__|  \__|
                                  
                                  
```

<a id="ssh-intro"></a>
# SSH — Secure SHell (данные шифруются)

- Управление удалёнными компьютерами через терминал
- Передача и синхронизация данных
- Работает во всех OS, используется на каждом сервере

Авторизация:
1) По логину и паролю (только если разово)
2) По паре ключей:
  - Приватный ключ на локальной машине
  - Публичный ключ на удалённой
  - При каждом использовании ключа вводим пароль
3) SSH-агент: хранит ключи и использует при подключении
  - Вводим пароль один раз при добавлении ключа















```bash
# Подключение
ssh user@server

# Подключение с дебагом (видно используемые ключи и т.п.)
ssh -v user@server

# Проверка доступа на github
ssh -T git@github.com

# Список ключей в агенте
ssh-add -l

# Добавить ключ
ssh-add ~/.ssh/my_key_ed25519
```















<a id="ssh-config"></a>
## SSH-конфиг

`~/.ssh/config`:
```bash
Host ts32
  HostName ts32.pyn.ru
  User hh
  IdentityFile ~/.ssh/i.petropolsky

  # Если нужны ssh-ключи на удалённой машине
  # ForwardAgent yes

  # Если хост постоянно меняет IP
  # UserKnownHostsFile=/dev/null
  # StrictHostKeyChecking no

Host *.pyn.ru
  User hh
  IdentityFile ~/.ssh/i.petropolsky
```

Подключение к хосту из конфига:
```bash
ssh ts32

# Посмотреть конфиг
ssh -G ts32
```















<a id="ssh-sync"></a>
## Синхронизация файлов

- `scp` для простых случаев
- `rsync` для сложных

```bash
# Копируем локальный файл на ts32
scp ./package.json ts32:~

# Копируем с ts32 в текущую папку локально
scp ts32:~/check_master_db.sh .

# Залить ./ в /var/www/app на сервере, исключив лишнее
rsync -av --delete \
    --exclude 'node_modules' \
    --exclude '.git' \
    --exclude 'dist' \
    ./ user@server:/var/www/app

# Залить только папку /dist
rsync -av --delete dist/ user@server:/var/www/app
```















---
<a id="nodejs"></a>
```

  🟡 Окружение
     ✅ Docker
     ✅ Shell
     ✅ Bash
     ✅ SSH
     🟡 NodeJS   ← мы тут
     ⚫️ NPM
     ⚫️ Git
  ⚫️ Проект

```















<a id="nodejs-logo"></a>
```

                                                   
    ▄▄▄    ▄▄▄          ▄▄            ▄▄▄  ▄▄▄▄▄▄▄ 
    ████▄  ███          ██            ███ █████▀▀▀ 
    ███▀██▄███ ▄███▄ ▄████ ▄█▀█▄      ███  ▀████▄  
    ███  ▀████ ██ ██ ██ ██ ██▄█▀ ▄▄▄  ███    ▀████ 
    ███    ███ ▀███▀ ▀████ ▀█▄▄▄  ▀████▀  ███████▀ 
                                        JavaScript 
                                                   

```

<a id="nodejs-intro"></a>
# NodeJS — JavaScript вне браузера

- Основа npm и всей фронтенд-инфраструктуры
- Работает на движке V8 (тот же, что в Chrome)
- Даёт доступ к файлам, сети, процессам
- Бэкенд и SSR на том же языке, что и фронтенд

> ❓ Бэкенд VS SSR

```node
$ node

// Welcome to Node.js v25.6.1.
// Type ".help" for more information.

> console.log(`Hello, ${process.env.USER}!`);

Hello, ipetropolsky!
```













> ❓ Почему не Python, Go, Ruff?

NodeJS:
- npm
- Линтеры
- TypeScript
- Системы сборки
- dev-серверы
- Утилиты и скрипты
- Фронтенд + Бэкенд
- SSR

Другие рантаймы:
- Deno
- Bun (нет на Windows)















<a id="nvm"></a>
## `nvm` — менеджер версий NodeJS

https://github.com/nvm-sh/nvm

- Использует замену пути к бинарникам в `$PATH`
- Не требует `sudo`

Установка:
```bash
# Из доки https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash
```

Демо:
```bash
node -v  # 25

# Установить и использовать
nvm install 22  # только установит в ~/.nvm
nvm use 22  # заменит путь к node
node -v  # 22 только в этой сессии

# Показать установленные
nvm ls
#        v18.20.8
# ->     v20.20.0
#        v22.22.0
#          system (-> v22.22.0)

# Дефолтная версия
nvm alias default 22
node -v  # 22 во всех сессиях

# Записать в конфиг проекта
nvm use 22 --save  # > .nvmrc
cat .nvmrc  # v22.22.0
nvm use system
node -v  # 25
nvm use  # читает из .nvmrc: v22.22.0
node -v  # 22

# Системная версия (в этой сессии)
nvm use system
node -v  # 25
```















<a id="n-manager"></a>
## `n` — менеджер версий NodeJS

https://github.com/tj/n

- Физически меняет бинарник
- Требует `sudo`

Установка:
```bash
npm install -g n
```

Демо:
```bash
node -v # 25
npm -v

n 23
node -v # 23
npm -v

# Если версия не поменялась, нужно перезайти
# либо:
hash -r
node -v # 23
```















---
<a id="npm"></a>
```

  🟡 Окружение
     ✅ Docker
     ✅ Shell
     ✅ Bash
     ✅ SSH
     ✅ NodeJS
     🟡 NPM      ← мы тут
     ⚫️ Git
  ⚫️ Проект

```















<a id="npm-logo"></a>
```



     ████████   ████████  █████████████  
    ░░███░░███ ░░███░░███░░███░░███░░███ 
     ░███ ░███  ░███ ░███ ░███ ░███ ░███ 
     ░███ ░███  ░███ ░███ ░███ ░███ ░███ 
     ████ █████ ░███████  █████░███ █████
    ░░░░ ░░░░░  ░███░░░  Менеджер пакетов
                ░███                   
                █████                    
               ░░░░░                                                         


```

<a id="npm-intro"></a>
# NPM — Node Package Manager

https://www.npmjs.com

- Управление зависимостями
- The world's largest software registry ©
- Ставится вместе с NodeJS, но версия отличается

Аналоги:
- `yarn` (hh)
- `pnpm`
- `bun`

![npm-reliability](./npm-reliability.webp)












<a id="npm-config"></a>
## `npm config`

https://docs.npmjs.com/cli/v11/commands/npm-config
https://docs.npmjs.com/cli/v11/configuring-npm/npmrc

```bash
npm config --help

npm config ls
npm config ls -l
```


Уровень разработчика:
- `npm config set <name> '<value>'`
- `~/.npmrc`

> ❓ Наблюдаемость конфига


Уровень проекта (рекомендуется):
- `/path/to/my/project/.npmrc`















<a id="npm-init"></a>
## `npm init` — создание пустого проекта

```bash
mkdir npm-init
cd npm-init
npm init  # заполняем поля
```

Появляется `package.json`, паспорт проекта:
```json
{
  "name": "npm-init",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "description": ""
}
```















<a id="npm-packages"></a>
## Использование пакетов

Рандомный пакет с npmjs:
- https://www.npmjs.com/package/color-names

Экспортирует массив вида `['#d2f6de': 'Blue Romance']`.

`index.js` в нашем проекте:
```js
// Тут будет массив, который экспортируется из пакета
const colorNames = require('color-names');

// Выведем все чёрные цвета
console.log(
    Object.entries(colorNames).filter(([name, color]) => {
        return color.toLowerCase().includes('black');
    })
);
```

Запускаем:
```bash
node index.js  # ошибка, нет такого пакета
```

> ❓ В чём проблема?















<a id="npm-install"></a>
## `npm install` — установка зависимостей

- Запускаем каждый раз когда скачиваем или обновляем репозиторий
- Запускаем когда нужно добавить или обновить зависимость
- Запускаем когда нужно выполнить postinstall-сетап пакета
- В `node_modules` устанавливаются зависимости из `package.json`

```bash
npm install --help

npm install color-names
node index.js  # теперь работает
```

Другие варианты пакетов:
```bash
# В пакете один скрипт без зависимостей
npm install color-name  # без s

# Много кода без зависимостей и с неймспейсом @texel/
npm install @texel/color

# Много зависимостей
npm install color-namer

# Маленький, но злой
npm install camelcase

# Всё дерево зависимостей
npm ls --all 

# Удаляем, если пакет не нужен
npm remove @texel/color
```
















<a id="package-json"></a>
## `package.json` — паспорт пакета для экосистемы NodeJS

- https://nodejs.org/api/packages.html
- https://docs.npmjs.com/cli/v11/configuring-npm/package-json

Ключевые поля:
- `name`
- `version`
- `main`: `index.js` | `filename.json`
- `type`: `module` | `commonjs`
- `scripts`
- `dependencies`: зависимости для работы пакета
- `devDependencies`: зависимости для разработки
- `peerDependencies`
- `engines`














<a id="semver"></a>
## Система версий

https://semver.org

- `major.minor.path`
- `^`, `~`, `<`, `>`, `*`, `||`, `&&`, `x`, `X` 😱

npm version cheatsheet:
https://gist.github.com/jonlabelle/706b28d50ba75bf81d40782aa3c84b3e

![semver](./semver.png)

> ❓ hh.ru=26.9.2.1















```bash
# Поставится версия из package.json либо последняя
npm install package-name

# Последняя версия
npm install package-name@latest

# Посмотреть все версии и установить конкретную
npm info @hh.ru/eslint-config versions
npm install @hh.ru/eslint-config@18.1.1

# Установить меньше 18
npm install "@hh.ru/eslint-config@<18"
```















<a id="package-lock"></a>
## `package-lock.json` — фиксация версий

Проблема: версия в зависимостях: `^2.1.0`
- Сегодня `npm` резолвит в `2.1.0`
- Завтра `npm` резолвит в `2.3.0`

Решение:
- В первый раз `npm install` записывает версию в lock-файл
- В следующий раз `npm install` берёт версию из lock-файла
- Коммитим `package-lock.json` в репозиторий

Если нужно обновить версию:
```bash
npm install package-name@2.5.0
```















<a id="npm-exact-versions"></a>
## Ставить всегда фиксированные версии

С помощью `npm config`.

По дефолту ставится с `^`:
```bash
npm install color-names  # ^2.0.0

# Как минимум фиксируем minor
npm config set save-prefix '~'
npm install color-names  # ~2.0.0

# А лучше всегда точные версии (приоритетнее save-prefix)
npm config set save-exact true
npm install color-names  # 2.0.0 🤌
```

Конфиг `.npmrc` (уровень проекта, рекомендуется):
```toml
save-exact=true
```













<a id="npm-troubleshooting"></a>
## Решение проблем с зависимостями

Начните с последнего пункта. Если не поможет,
добавьте предпоследний. И так до верха:
```bash
# Заново скачаются все пакеты во всех репозиториях.
# Не нужно практически никогда
npm cache clean --force

# Зарезолвятся версии, скачаются новые пакеты
rm package-lock.json

# Заново установятся версии из lock-файла
rm -rf node_modules

# Установятся пакеты из package.json
npm install
```















<a id="npx-logo"></a>
```

     _____
    < NPX >
     -----
          \   ^__^
           \  (oO)\_______
              (__)\░▚░█░▞▀)\/\
                  ||-▀--w░|
                  ||     ||
                                    

```

<a id="npx"></a>
## NPX — запуск пакетов без установки

https://docs.npmjs.com/cli/v11/commands/npx

- Если пакет установлен в node_modules, запустится оттуда
- Иначе установится во временную папку и запустится оттуда

Топ-пакет для тестов:
https://www.npmjs.com/package/cowsay

```bash
npx cowsay --help
npx cowsay NPX
```















---
<a id="git"></a>
```

  🟡 Окружение
     ✅ Docker
     ✅ Shell
     ✅ Bash
     ✅ SSH
     ✅ NodeJS
     ✅ NPM
     🟡 Git      ← мы тут
  ⚫️ Проект

```














<a id="git-logo"></a>
```


     Version Control
     ██████╗ ██╗████████╗
    ██╔════╝ ██║╚══██╔══╝
    ██║  ███╗██║   ██║    
    ██║   ██║██║   ██║   
    ╚██████╔╝██║   ██║   
     ╚═════╝ ╚═╝   ╚═╝   
                                                                  

```

<a id="git-intro"></a>
# Git — контроль версий

- Git — лучшее изобретение человечества после Linux (это не точно).
- Git — один из основных инструментов разработчика (это точно).

> ❓ Что там по лекции Никиты















<a id="git-signing"></a>
## Подпись коммитов

https://docs.github.com/en/authentication/managing-commit-signature-verification

![git-signature](./git-signature.png)

```bash
# Включаем для всех коммитов
git config --global commit.gpgsign

# Проверяем подпись коммита
git verify-commit HEAD
# Или
git show HEAD --show-signature

# Если что-то не подписывается
gpgconf --kill all
```















Удобно всегда видеть при коммите, что подпись в порядке:
```bash
# ~/bin/gc:
git commit -m "${git branch --show-current} $1" \
  && git verify-commit HEAD

# Коммит с выводом подписи
gc 'Message'
```















<a id="git-config"></a>
## Git config

Нельзя хранить в репозитории, только локально.

```bash
# Все настройки с указанием источника
git config --list --show-origin

# Получение
git config user.name  # ipetropolsky

# Установка локально (в gitconfig репозитория)
git config core.ignorecase false
# Установка глобально (в gitconfig пользователя)
git config --global core.ignorecase false
```















Глобальный конфиг Git (`~/.gitconfig`):
```bash
[user]
  name = 'Ivan Petropolsky'
  email = ...
  signingkey = 3A5...49F
[core]
  excludesfile = ~/.gitignore
  ignorecase = false
[rebase]
  autoSquash = true
[commit]
  gpgsign = true
[gpg]
  program = gpg
[includeIf "gitdir:~/repos/"]
  path = .gitconfig_hh  
[includeIf "gitdir:~/sites/"]
  path = .gitconfig_personal
[init]
  defaultBranch = master
```

В `~/.gitconfig_hh` оверрайд для рабочей папки:
```bash
[user]
  name = 'ipetropolsky'
  email = ...@hh.ru
  signingkey = 639...37F
```

Проверяем:
```bash
cd ~/repos
git config user.name  # рабочая подпись

cd ~/sites
git config user.name  # личная подпись
```















---
<a id="project"></a>
```

  ✅ Окружение
     ✅ Docker
     ✅ Shell
     ✅ Bash
     ✅ SSH
     ✅ NodeJS
     ✅ NPM
     ✅ Git
     🍾🥳🎉
  🟡 Проект      ← мы тут

```














<a id="project-intro"></a>
# Проект

Пример проекта без бэкенда:
- https://ipetropolsky.github.io/continuous-calendar
- https://github.com/ipetropolsky/continuous-calendar

Обсудим:
- Конфигурацию проекта (dot-файлы, rc-файлы, env-переменные)
- Линтеры, форматтеры, тайп-чекеры (ESLint, Prettier, tsc)
- Обслуживающие скрипты (npm-scripts, git-хуки, утилиты)
- Системы сборки (Vite, Rollup, Webpack)
- CI/CD пайплайны проверки, ревью, сборки, деплоя (GitHub Actions) ⛳️
- Средства отладки (dev-server, source maps, html-to-source)
- Системы документирования (README, CHANGELOG, Storybook, OpenAPI)














---
<a id="configs"></a>
```

  ✅ Окружение
  🟡 Проект
     🟡 Конфиги  ← мы тут
     ⚫️ Линтеры
     ⚫️ Скрипты
     ⚫️ Сборка
     ⚫️ Деплой
     ⚫️ Агенты
     ⚫️ Сервисы

```
<a id="configs-logo"></a>
```

                                       
                      ▄▄                 
                     ██  ▀▀              
  ▄████ ▄███▄ ████▄ ▀██▀ ██  ▄████ ▄█▀▀▀ 
  ██    ██ ██ ██ ██  ██  ██  ██ ██ ▀███▄ 
  ▀████ ▀███▀ ██ ██  ██  ██▄ ▀████ ▄▄▄█▀ 
                                ██ .env      
                              ▀▀▀        


```

<a id="configs-intro"></a>
# Конфиги

- Конфиги приложения — в основном для бэкенда
- Конфиги инструментов

Для бэкенда:
```bash
cp .env.example .env
```














<a id="npmrc-project"></a>
## `.npmrc`

Ставить точные версии:
```
save-exact=true
registry=https://...
```















<a id="lockfile-diff"></a>
## Убрать страшный дифф от lock-файлов

`.gitattributes`:
```bash
package-lock.json  binary
```















<a id="editorconfig"></a>
## `.editorconfig`

Настройки, которые подхватывают большинство редакторов и IDE:
https://editorconfig.org

```
root = true

[*]
charset = utf-8
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
indent_style = space
indent_size = 4

[*.json]
indent_size = 2
```

Обычно не меняется примерно никогда.














---
<a id="linters"></a>
```

  ✅ Окружение
  🟡 Проект
     ✅ Конфиги
     🟡 Линтеры  ← мы тут
     ⚫️ Скрипты
     ⚫️ Сборка
     ⚫️ Деплой
     ⚫️ Агенты
     ⚫️ Сервисы

```
<a id="linters-logo"></a>
```

  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  ░░░█░░░▀█▀░█▀█░▀█▀░█▀▀░█▀▄░█▀▀░░░░
  ░░░█░░░░█░░█░█░░█░░█▀▀░█▀▄░▀▀█░░░░
  ░░░▀▀▀░▀▀▀░▀░▀░░▀░░▀▀▀░▀░▀░▀▀▀░░░░ 
  ░░░░░░░░░░░░░░░░░░░░formatters░░░░ 

```

<a id="linters-intro"></a>
# Линтеры и форматтеры

Работают после (или в процессе) написания кода, до сборки.

Большая тройка:
- TypeScript — типизация ⛳️
- ESLint — правила кода
- Prettier — форматирование кода

Есть ещё Biome, линтер и форматтер 2 в 1:
https://biomejs.dev/ru

Но он чёто сложный какой-то.















<a id="eslint"></a>
## ESLint

https://eslint.org

Ставьте 9-й, 10-й пока сырой.

Пример конфига:
```js
import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    js.configs.recommended,

    // Тут можно вставить готовые конфиги, в том числе HH:
    // https://www.npmjs.com/package/@hh.ru/eslint-config
    // ...

    ...tseslint.configs.recommended,
    {
        rules: {
            curly: 'error',
        },
    },
    {
        ignores: [
            'build/**',
            'dist/**',
            'tools/**',
            '**/*.cjs',
            'package-lock.json',
        ],
    }
);
```

В rules добавляем правила из доки ESLint:
https://eslint.org/docs/latest/rules

Посмотреть конфиг для конкретного файла:
```bash
npx eslint --print-config src/main.tsx
npx eslint --print-config src/main.tsx | jq .rules.curly
```

> Демо



### Плагин для IDE

Сильно упрощает жизнь.














<a id="import-sorting"></a>
### Сортировка импортов

https://www.npmjs.com/package/eslint-plugin-simple-import-sort

- Разделяет импорты на группы и сортирует по алфавиту
- Удобно, наглядно, нет бардака, а главное: не надо думать
- В двух ветках добавляется одинаковый импорт => нет конфликта
- Есть такая функция в IDE, но у коллеги выключено или другая IDE

Пример отсортированных импортов (только без комментов):
```ts
// Frameworks
import { ReactNode, useCallback } from 'react';

// Libs
import classnames from 'classnames';
import { Button, Card, Text, Title, VSpacing } from '@hh.ru/magritte-ui';

// Project
import { AnimatedPrice } from 'src/components/AnimatedPrice';
import { translation } from 'src/components/translation';
import { useSelectorNonNullable } from 'src/hooks/useSelector';
import { MINUS, NON_BREAKING_SPACE } from 'src/utils/constants/symbols';
```

Установка:
```bash
npm install --save-dev eslint-plugin-simple-import-sort
```

Пример конфига (настройте группы как нравится):
```js
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default tseslint.config(
    // ...
    {
        plugins: {
            'simple-import-sort': simpleImportSort,
        },
        rules: {
            // ...
            'simple-import-sort/imports': [
                'error',
                {
                    groups: [
                        // React и экосистема:
                        //   import React from 'react'
                        //   import ReactDOM from 'react-dom'
                        //   import { createStore } from 'redux'
                        //   import { configureStore } from '@reduxjs/toolkit'
                        ['^react', '^react-', '^redux', '^redux-', '^@reduxjs/'],

                        // Внешние пакеты (npm-модули):
                        //   import lodash from 'lodash'
                        //   import axios from 'axios'
                        //   import Button from '@mui/Button'
                        ['^@?\\w'],

                        // Внутренние алиасы и абсолютные пути:
                        //   import { utils } from '@/utils'
                        //   import Header from 'components/Header'
                        ['^@', '^'],

                        // Относительные импорты (избегайте этого, используйте алиасы: '@/src/config' или 'src/config'):
                        //   import config from './config'
                        //   import styles from './styles.less'
                        //   import { helper } from '../utils'
                        ['^\\./'],

                        // Сторонние импорты с побочными эффектами:
                        //   import 'polyfills' (без присваивания)
                        ['^\\u0000'],
                    ],
                },
            ],
            'simple-import-sort/exports': 'off',
        },
    },
    // ...
);
```










<a id="prettier"></a>
## Prettier

https://prettier.io

Форматтер кода с минимальными настройками.
Подключается во все редакторы.

```bash
yarn add -D prettier
```

Конфиг в `.prettierrc.js`:
```js
module.exports = {
    singleQuote: true,
    trailingComma: 'es5',
    arrowParens: 'always',
    printWidth: 120,
    tabWidth: 4,
    overrides: [
        {
            files: ['*.json'],
            options: {
                semi: true,
                tabWidth: 2,
            },
        },
    ],
};
```

> Демо



### Плагин для IDE

Сильно упрощает жизнь.
















---
<a id="scripts"></a>
```

  ✅ Окружение
  🟡 Проект
     ✅ Конфиги
     ✅ Линтеры
     🟡 Скрипты  ← мы тут
     ⚫️ Сборка
     ⚫️ Деплой
     ⚫️ Агенты
     ⚫️ Сервисы

```
<a id="scripts-logo"></a>
```


    #!/bin/sh                                      
    █████████                      ███             █████           
   ███░░░░░███                    ░░░             ░░███            
  ░███    ░░░   ██████  ████████  ████  ████████  ███████    █████ 
  ░░█████████  ███░░███░░███░░███░░███ ░░███░░███░░░███░    ███░░  
   ░░░░░░░░███░███ ░░░  ░███ ░░░  ░███  ░███ ░███  ░███    ░░█████ 
   ███    ░███░███  ███ ░███      ░███  ░███ ░███  ░███ ███ ░░░░███
  ░░█████████ ░░██████  █████     █████ ░███████   ░░█████  ██████ 
   ░░░░░░░░░   ░░░░░░  ░░░░░     ░░░░░  ░███░░░     ░░░░░  ░░░░░░  
                                        ░███                       
                                        █████                      
                                       ░░░░░                          


```

<a id="scripts-intro"></a>
# Скрипты

> ❓ В какой момент и как запускаются линтеры и форматтеры?


















<a id="npm-scripts"></a>
## npm-скрипты

Пример из `package.json` (команды могут отличаться):
```bash
    # Обычный набор
    "dev": "vite",
    "build": "vite build",
    "deploy": "npm run build && gh-pages -d build",
    "test": "bash tools/run-tests.sh",
    "postinstall": "cp tools/githooks/* .git/hooks || true"

    # Линтеры
    "ts-check": "tsc --noEmit",
    "lint": "eslint --fix .",
    "lint-files": "eslint --fix",
    "format": "prettier --write --ignore-unknown .",
    "format-files": "prettier --write --ignore-unknown",
    "check": "npm run ts-check && npm run lint && npm run format",
    "lint-staged": "lint-staged",
```

```bash
npm run check && npm run deploy
```

> Демо











> ❓ Можно не запускать это для всех файлов?














<a id="lint-staged"></a>
## `lint-staged`

⚠️ Код, не прошедший проверки, не может быть закоммичен.

https://github.com/lint-staged/lint-staged

```bash
npx lint-staged --help
```

Конфиг в `.lintstagedrc.js`:
```js
export default {
    '*.{ts,tsx}': [
        // Функция, ts-check запустился БЕЗ параметров
        () => 'npm run ts-check',
        'npm run lint-files',
    ],
    '*.{js,jsx}': ['npm run lint-files'],
    '*': ['npm run format-files'],
};
```

- Запускает указанные в конфиге команды для тех файлов,
которые помечены в Git как staged (собираемся коммитить).
- Передаёт в них список файлов параметрами.
- Если там функция, передаёт в аргументах.

> ❓ Зачем список файлов?



Для `src/App.tsx` и `README.md` будет запущено:
```bash
npm run ts-check  # без параметров, потому что функция
npm run lint-files src/App.tsx  # маска исключает *.md
npm run format-files src/App.tsx README.md
```

Проверка:
```bash
git add .
npx lint-staged -v
```

> Демо

```bash
$ git commit -m 'HH-12345 Change button color'

✔ Preparing...
⚠ Running tasks...
  ❯ eslint --fix [FAILED]
    ✖ eslint --fix [FAILED]
  ✔ Running tasks for *.{ts,tsx,d.ts}
  ↓ No staged files match *.less [SKIPPED]
  ↓ No staged files match package.json [SKIPPED]
  ✔ Running tasks for *.py
  ↓ No staged files match scripts/sql/trans/*.sql [SKIPPED]
  ↓ No staged files match *.md [SKIPPED]
  ✔ Running tasks for *
  ↓ No staged files match *.xsl [SKIPPED]
  ↓ No staged files match pyproject.toml [SKIPPED]
↓ Skipped because of errors from tasks. [SKIPPED]
✔ Reverting to original state because of errors...
✔ Cleaning up...

✖ eslint --fix:

src/components/ProductSection/Product/index.tsx
  24:47  error  'Variant' is defined but never used. Allowed unused vars must match /^_/u  @typescript-eslint/no-unused-vars

✖ 1 problem (1 error, 0 warnings)

```









> ❓ Можно не запускать это руками?














<a id="auto-linting"></a>
## Автолинтинг и форматирование при коммите

Нам потребуется git-hook `pre-commit`:
https://git-scm.com/book/ms/v2/Customizing-Git-Git-Hooks

> ❓ Как установить его каждому разработчику?















В `package.json` есть скрипт `postinstall`, он ставит хук:
```json
  "scripts": {
    "postinstall": "cp tools/githooks/* .git/hooks || true",
  }
```

> ❓ Зачем true?



Хук запускает `lint-staged` перед коммитом:
```bash
#!/bin/sh
set -e
npx lint-staged
```

Хук нужно сделать исполняемым файлом:
```bash
chmod +x tools/githooks/pre-commit
```















---
<a id="build"></a>
```

  ✅ Окружение
  🟡 Проект
     ✅ Конфиги
     ✅ Линтеры
     ✅ Скрипты
     🟡 Сборка   ← мы тут
     ⚫️ Деплой
     ⚫️ Агенты
     ⚫️ Сервисы

```
<a id="build-logo"></a>
```
 


    ██████╗ ██╗   ██╗███╗   ██╗██████╗ ██╗     ███████╗██████╗ ███████╗
    ██╔══██╗██║   ██║████╗  ██║██╔══██╗██║     ██╔════╝██╔══██╗██╔════╝
    ██████╔╝██║   ██║██╔██╗ ██║██║  ██║██║     █████╗  ██████╔╝███████╗
    ██╔══██╗██║   ██║██║╚██╗██║██║  ██║██║     ██╔══╝  ██╔══██╗╚════██║
    ██████╔╝╚██████╔╝██║ ╚████║██████╔╝███████╗███████╗██║  ██║███████║
    ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═╝╚══════╝



```

<a id="build-intro"></a>
# Сборка

Зачем собирать проект?

![building-frontend](./building-frontend.jpg)
















<a id="build-problem-1"></a>
## Проблема №1: стандарты и фичи

- Хотим писать код по новым классным стандартам.
- Хотим новые браузерные фичи, которые не везде работают.
- Хотим TypeScript и JSX (в принципе невозможно в браузере).
- Хотим препроцессоры CSS с удобными функциями.

Нужно транспилировать код в более старый и добавить полифиллов.

> ❓ Что такое полифилл?










<a id="build-problem-2"></a>
## Проблема №2: импорты

- Хотим дробить код на мелкие модули.
- Хотим загружать модули не по одному, а бандлами.
- Хотим иногда подгружать бандлы динамически.
- Хотим шарить модули между бандлами.
- Хотим шарить библиотеки между микрофронтами.

Управлять этим вручную — близко к невозможному.

Небольшая часть проекта (≈1%):

![js-imports](./js-imports.png)









<a id="build-problem-3"></a>
## Проблема №3: размер

- Не хотим грузить лишнего на клиенте.
- Хотим обфускацию, манглинг и другие слова.
- Хотим писать так:
  ```js
  if (employerIds.length > 0) {
      displayBanner({
          name: PROMO_BANNER_NAME,
          variant: BannerVariant.HalfSize,
      });
  }
  ```
- А на проде чтобы было так: `if(!!a)f(b,c.d);`



Нужно сжимать всё автоматом и применять оптимизации.















<a id="bundler"></a>
## Решение: бандлер

В 2026-м лидер на рынке — Vite.

https://vite.dev/guide

Создать проект:
```bash
npm create vite@latest
```















<a id="build-demo"></a>
## Посмотрим на тестовом проекте

Запустить dev-server:
```bash
npm run dev
```

Собрать проект:
```bash
npm run build
```

Что в папке:
```
$ tree
.
├── assets
│   ├── index-B7cEdw9c.css
│   └── index-xQDg6Kg0.js
└── index.html

2 directories, 3 files
```


### Проверим 🧐

Соберём в dev-режиме и запустим обычный сервер:
```bash
NODE_ENV=development npm run build

cd build
python -m http.server
```

Идём на http://localhost:8000















<a id="swc"></a>
## Решение для JS: SWC

[SWC Playground](https://swc.rs/playground
https://play.swc.rs/?version=1.15.13&code=H4sIAAAAAAAAA21Qu27DMAzc9RVEFieD492O6xTZs%2FUDFJl2hdqkQUlFAcP%2FXklJ06HlQPBxvCNp54XFwwoXJm8pcHAXPSH1WmCDQXiG4lwZjjBC8q76iysapSx5lEEbhDeHAquCaIvwYCfs6keejPSMNTgvlsYmVze1KYVfeY0eBx0mD0Mg4y0TvC7LPkTGOvMeHkSGyflMBS2k9vFH6piLXQfFlVNY3DUEfRCC%2FXONU28%2FwUzauWtEtbvZUvleOiOIBLexvGnzMQoH6ncvz6E8%2BM%2BfklC7Jr9B9Qs%2FVVHknh6aeOQ3HTd01WsBAAA%3D&config=H4sIAAAAAAAAA32UO3LjMAyG%2B5zCozpFJsUWOcB2ewYOLYIysxShIUDHmozvviAlPzaG3En48AMkAOL7ZbfrPqnvPnbf8ik%2Fk80E%2BfovFpoT25NYOp4noD6HibvXC2WqiHOBZjkvoGObB%2BAqAnp%2Fe39bBV1EJFgFq2kMKfj5PmOP45SB6M4mVolYRkhczd5Ggtd7lvGL%2Fovb7HvECDY9IcaSCYlhgKwF7jFGOxGYo81KlHpSmwOhlqLCwuDMlHFSeXKBAybJ%2BUgdWGd6dKCgkKHncARNJrlElkiup9ynYQf7Mgytyz%2FUcLSxWFZywqm1RE6rRD1gIDa%2BJK2EC9yowQLX4v5UBm8ycMnpUfeJIW305C%2BAVCBaomRH0OI2Dy%2FztKX2T5UheRlZnhUu463dMsEgRTUheKWytTKQOWjdzOBKD7WyvXacFW%2BUj4IDA97LrCih6Stwf9CS1meOXgHSX%2Bu1qVqAub7CDV4fxBP8W27J%2BoCtHqPlwzaledxjfJJgBD6ge%2BIgrWDcxlm2xGna5iU5kNEAp7oUauBxCcgDYDSxrcuH2ZDnIRHNEHF%2FWxOrw%2Fm6hUebhtt7Xzbxy%2BrQjehKg%2BuKr%2F1dNvOv7uZ02cKXE3SB%2FlyELef5HwwXgCstBgAA)

SWC — Speedy Web Compiler:
- Транспилирует новый JS / TS / JSX в JS указанного стандарта
- Смысл — получить совместимый с браузерами код
- Написан на Rust (обычно это значит быстро)

В прошлом использовали Babel, и сейчас он ещё много где.

В `vite.config.js`:
```js
    build: {
        // Всё что уже принято или почти принято в стандарт
        target: 'esnext',
        outDir: 'build',
    },
```

Трансформация (требует полифил regenerator ~2KB gzip):
```js
// Было (ES2017)
async function fetchUser() {
  const res = await fetch('/api/user');
  return res.json();
}

// Стало (ES5) — regeneratorRuntime
function fetchUser() {
  return regeneratorRuntime.async(function(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.next = 2;
        return regeneratorRuntime.awrap(fetch('/api/user'));
      case 2:
        return _context.abrupt("return", _context.sent.json());
      case 3:
    }
  }, null, null, null, Promise);
}
```















<a id="postcss"></a>
## Решение для CSS: Browserslist, PostCSS, Autoprefixer

https://browsersl.ist
https://browsersl.ist/#q=last+2+versions%0A%3E+0.5%25%0Anot+dead%0A%0A

Указываем в `.browserslistrc` версии браузеров:
```
last 2 versions
> 0.5%
not dead
```

Проверка:
```bash
npm ls browserslist
npm ls postcss
npm ls autoprefixer

# Список точных версий браузеров по конфигу
npx browserslist
```














<a id="how-postcss-works"></a>
### Как это работает

- PostCSS реализует систему плагинов и постпроцессинга для CSS
- Autoprefixer делает код совместимым с браузерами из конфига
- Caniuse: https://caniuse.com/?search=appearance

В основном добавляются вендорные префиксы:
```css
/* Было */
.custom-select {
  appearance: none;
}

/* Стало */
.custom-select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
```



<a id="check-transforms"></a>
### Что реально трансформировалось

```bash
grep -Eo '\-(webkit|moz|ms)-[a-z-]+' build/assets/*.css | head -20

-webkit-hyphens
-moz-orient
-webkit-text-size-adjust
-moz-tab-size
-webkit-tap-highlight-color
-webkit-text-decoration
-webkit-text-decoration
-moz-focusring
-moz-placeholder
-webkit-appearance
-moz-placeholder
-moz-placeholder
-webkit-search-decoration
-webkit-appearance
-webkit-date-and-time-value
-webkit-datetime-edit
-webkit-datetime-edit-fields-wrapper
-webkit-datetime-edit
-webkit-datetime-edit-year-field
-webkit-datetime-edit-month-field
```














---
<a id="deploy"></a>
```

  ✅ Окружение
  🟡 Проект
     ✅ Конфиги
     ✅ Линтеры
     ✅ Скрипты
     ✅ Сборка
     🟡 Деплой   ← мы тут
     ⚫️ Агенты
     ⚫️ Сервисы

```
<a id="deploy-logo"></a>
```


    ░███████                         ░██                       
    ░██   ░██                        ░██                       
    ░██    ░██  ░███████  ░████████  ░██  ░███████  ░██    ░██ 
    ░██    ░██ ░██    ░██ ░██    ░██ ░██ ░██    ░██ ░██    ░██ 
    ░██    ░██ ░█████████ ░██    ░██ ░██ ░██    ░██ ░██    ░██ 
    ░██   ░██  ░██        ░███   ░██ ░██ ░██    ░██ ░██   ░███ 
    ░███████    ░███████  ░██░█████  ░██  ░███████   ░█████░██ 
                          ░██                              ░██ 
                          ░██                        ░███████  
                                                                                                                  

```

<a id="deploy-intro"></a>
# Деплой



<a id="gh-pages"></a>
## Деплой в Github-pages

https://pages.github.com

Суперудобный вариант деплоя статического проекта.

Установка пакета:
```bash
npm install -D gh-pages
```

Скрипт в `package.json`:
```json
  "scripts": {
    "deploy": "npm run build && gh-pages -d build"    
  },
```

Запуск:
```bash
npm run deploy
```

- Статика из папки `build` заливается в ветку `gh-pages`
- Ветка пушится на GitHub, где настроен урл именно на неё
- На эту ветку смотрит адрес вида `USERNAME.github.io/REPO_NAME`



















<a id="github-actions"></a>
## GitHub Actions

https://github.com/features/actions

- Очень мощный инструмент автоматизации.
- Умеет всё что можно сделать в консоли.
- Умеет всё что можно напрограммировать.
- Для маленьких реп условно бесплатно и безлимитно.
- Кладём в `.github/workflows/any-name.yml`, работает само.
- ⚠️ Работает только из мастера, надо пушить сразу туда.















<a id="workflow-example"></a>
### Пример воркфлоу

Деплой в gh-pages при появлении коммита в master:
```yaml
name: Build & Deploy to GitHub Pages

on:
    push:
        branches: ['master']

permissions:
    contents: read
    pages: write
    id-token: write

concurrency:
    group: 'pages'
    cancel-in-progress: true

jobs:
    build:
        runs-on: ubuntu-latest
        steps:
            - name: Checkout
              uses: actions/checkout@v4

            - name: Setup Node
              uses: actions/setup-node@v4
              with:
                  node-version: '20'
                  cache: 'npm'

            - name: Install
              run: npm ci

            - name: Build
              run: npm run build

            - name: Upload Pages artifact
              uses: actions/upload-pages-artifact@v4
              with:
                  path: 'build'

    deploy:
        runs-on: ubuntu-latest
        needs: build
        environment:
            name: github-pages
            url: ${{ steps.deployment.outputs.page_url }}
        steps:
            - name: Deploy to GitHub Pages
              id: deployment
              uses: actions/deploy-pages@v4
```

Для работы воркфлоу нужно дать ему доступ к мастеру:
- `Repo` → `Settings` → `Environments`
- `Environment` → `github-pages`
- `Deployment branches and tags`
- Поставить `No restriction` либо `Add rule` → `master`















<a id="claude-action"></a>
### Изюминка на вашем торте 🤌

✨ Claude Code GitHub Actions:
https://code.claude.com/docs/en/github-actions















---
<a id="llm"></a>
```

  ✅ Окружение
  🟡 Проект
     ✅ Конфиги
     ✅ Линтеры
     ✅ Скрипты
     ✅ Сборка
     ✅ Деплой
     🟡 Агенты   ← мы тут
     ⚫️ Сервисы

```
<a id="llm-logo"></a>
```


     GPTs          ?         Agents   Chats
     █████       █████       ██████   ██████  
    ▒▒███       ▒▒███       ▒▒██████ ██████   
     ▒███        ▒███        ▒███▒█████▒███   
     ▒███        ▒███        ▒███▒▒███ ▒███   
     ▒███        ▒███        ▒███ ▒▒▒  ▒███   
     ▒███      █ ▒███      █ ▒███      ▒███   
     ███████████ ███████████ █████     █████  
    ▒▒▒▒▒▒▒▒▒▒▒ ▒▒▒▒▒▒▒▒▒▒▒ ▒▒▒▒▒     ▒▒▒▒▒   
                                              
                                              

```

<a id="llm-intro"></a>
# LLM Агенты

Пара советов, как организовать работу.


<a id="llm-docs"></a>
## Документация

- В AGENTS.md критический минимум + ссылки на остальное
- Симлинк с CLAUDE.md на AGENTS.md, если у вас Claude
- Всё что формализуется выносите в доку и скиллы



<a id="llm-workflow"></a>
## Процесс

- Набор env-файлов с разными ключами и моделями
- Для незнакомой задачи всегда отдельное планирование
- Не обязательно добиваться идеального результата
- Часто проще зарезетить и начать заново с лучшим контекстом
- Коммитить лучше руками после обзора изменений
- Посмотрите на claude-action для GitHub, если есть возможность
- Обязательно пропишите правила и команды для запуска линтеров
- Всё что можно сделать скриптом, лучше сделать скриптом



<a id="llm-models"></a>
## Модели

- Они реально отличаются, и не ЧБ, а оттенками
- Планировать лучше более умной, делать по плану можно простой
- Anthropic, GLM, из чат-ботов ChatGPT (личное мнение)














---
<a id="recommend"></a>
```

  ✅ Окружение
  🟡 Проект
     ✅ Конфиги
     ✅ Линтеры
     ✅ Скрипты
     ✅ Сборка
     ✅ Деплой
     ✅ Агенты
     🟡 Сервисы  ← мы тут

```
<a id="recommend-logo"></a>
```


                          REPOST
    ┃  ╻╻┏ ┏━╸   ┏━┓╻ ╻┏━┓┏━┓┏━╸
    ┃  ┃┣┻┓┣╸    ┗━┓┣━┫┣━┫┣┳┛┣╸
    ┗━╸╹╹ ╹┗━╸,  ┗━┛╹ ╹╹ ╹╹┗╸┗━╸


```

<a id="recommend-intro"></a>
# Рекомендую



<a id="github-gist"></a>
## GitHub Gist

Для заметок и хранения кода:
https://gist.github.com/ipetropolsky/e711303b9f6fb7a169d51988006f18bf



<a id="codepen"></a>
## CodePen или аналоги

Для тестирования связки HTML+CSS+JS:
https://codepen.io/ipetropolsky-hh/pen/gOVXavR 
 ↑↑↑
Если видно только код, надо снизу вытянуть панель preview.

Пропроцессоры, TS, всё есть, даже npm-пакеты.



<a id="sublime"></a>
## Sublime Text

https://www.sublimetext.com

Простой редактор для разработчиков с киллер-фичами:
- Несохранённое хранится, пока не закроешь сам (даже после ребута)
- Настройки в виде JSON-конфигов (system + user level)
- Дофига настроек и плагинов на все случаи жизни
- Можно что-то допиливать на Питоне
- Minimap-скроллбар справа
- ✨ Просто красиво

![sublime](./sublime.png)



<a id="regex"></a>
## Регулярные выражения

Поиск с безграничными возможностями:
- [Регулярные выражения. Всё проще, чем кажется](https://habr.com/ru/articles/567106/) (habr)
- [Руководство JavaScript → Регулярные выражения](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Regular_expressions) (MDN)
- [33 самые полезные регулярки для веб-разработчика](https://proglib.io/p/33-regexp)

Простые примеры:
```regexp
^\d{2}-\d{2}-\d{4}$
\-(webkit|moz|ms)-[a-z-]+
[a-z]+: ?#[a-z0-9]+
```

- Супер удобная вещь, которой многие избегают
- Используется повсеместно в grep, sed, find, IDE, etc.
- Тестировать можно тут: https://regex101.com



<a id="ascii"></a>
## ░░ ASCII-шрифты ░░

https://patorjk.com/software/taag















---
<a id="homework"></a>
```

  ✅ Окружение
  ✅ Проект
     ✅ Конфиги
     ✅ Линтеры
     ✅ Скрипты
     ✅ Сборка
     ✅ Деплой
     ✅ Агенты
     ✅ Сервисы
     🍾💃🕺

```
<a id="homework-logo"></a>
```



    █████   █████                                                                      █████
    ░░███   ░░███                                                                      ░░███
     ░███    ░███   ██████  █████████████    ██████  █████ ███ █████  ██████  ████████  ░███ █████
     ░███████████  ███░░███░░███░░███░░███  ███░░███░░███ ░███░░███  ███░░███░░███░░███ ░███░░███
     ░███░░░░░███ ░███ ░███ ░███ ░███ ░███ ░███████  ░███ ░███ ░███ ░███ ░███ ░███ ░░░  ░██████░
     ░███    ░███ ░███ ░███ ░███ ░███ ░███ ░███░░░   ░░███████████  ░███ ░███ ░███      ░███░░███
     █████   █████░░██████  █████░███ █████░░██████   ░░████░████   ░░██████  █████     ████ █████
    ░░░░░   ░░░░░  ░░░░░░  ░░░░░ ░░░ ░░░░░  ░░░░░░     ░░░░ ░░░░     ░░░░░░  ░░░░░     ░░░░ ░░░░░




```

<a id="homework-intro"></a>
# Домашка

Создайте репозиторий, в котором:
- Настроены editorconfig, ESLint, Prettier
- Настроен TS и проверка типов _(опционально)_ 
- При коммите запускаются линтеры, при ошибке коммит не делается
- Ваши коммиты подписаны
- Основная ветка — master
- Работает React JSX
- Используется хотя бы один npm-пакет из dependencies (не react)
- Настроен деплой в gh-pages npm-скриптом
- Настроен GitHub Action для деплоя изменений из ветки master

💡 Код проекта (папка `src`) не будет оцениваться,
но лучше не оставляйте код из шаблона или `Hello, World!`,
напишите или сгенерите любой самый простой, но интерактивный
статический сервис, хоть рандомные цитаты Джейсона Стэтхема,
хоть «Какой ты сегодня пирожок».



## Результат

- Ссылка на PR в вашей репе, в котором добавляется всё что нужно.
- На ветке нельзя закоммитить код с присвоением значения константе
(правило https://eslint.org/docs/latest/rules/no-const-assign).

Пример кода:
```js
const foo = 'bar';
foo = 'baz';
```

```bash
git add .
git commit -m 'hehe'  # Ошибка ESLint
```
После исправления ошибки коммит проходит.



## Сроки

📅 [Календарь](https://ipetropolsky.github.io/continuous-calendar/?dates=260305-260313&dates=260225-260305)

- Софт-дедлайн: 5 марта включительно
- Хард-дедлайн: 13 марта включительно



<a id="previous-lectures"></a>
## Предыдущие лекции

Другой контент, возможно что-то пригодится:
- [2023](https://docs.google.com/presentation/d/1j6F5u9gmMLEtCdvZKA4-7HZ-C2OYHj8iHfzP4bfwpEs/edit?usp=sharing) (презентация)
- [2024](https://gist.github.com/ipetropolsky/de00874119d6622be969b6af265da3aa) (gist)

