import express from 'express'
import path from 'path'
import { readFileSync } from 'node:fs';

const app = express()
const port = 8000
const ROOT_DIR = path.dirname(import.meta.dirname)
const users = JSON.parse(readFileSync(path.join(ROOT_DIR, 'server', 'users.json'), 'utf8'));


app.use('/static', express.static(path.join(ROOT_DIR, 'public')))
// JSON: Content-Type: application/json
app.use(express.json())
// form-urlencoded: Content-Type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))
// plain text / Beacon API (отправляет text/plain)
app.use(express.text())


app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.sendFile(path.join(ROOT_DIR, 'public/default.html'))
})

app.get('/slow', (req, res) => {
    setTimeout(() => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        console.log(`${req.path}: ${JSON.stringify(req.query)}`)
        res.json('OK')
    }, 3000)
})

app.get('/cors', (req, res) => {
    // res.setHeader('Access-Control-Allow-Origin', 'https://example.com')
    // res.setHeader('Access-Control-Allow-Origin', '*')
    res.json({status: 'OK'})
})

app.get('/image', (req, res) => {
    res.sendStatus(200)
})

app.post('/analytics', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    console.log(`${req.path}: ${JSON.stringify(req.query)}`)
    res.sendStatus(200)
})

app.get('/server_set_cookies', (req, res) => {
    res.cookie('lecture', 'ajax');
    res.cookie('role', 'student', {path: '/'});
    res.cookie('auth', '123', {path: '/',
        maxAge: 30000,
        httpOnly: true});
    res.send(`
<h1>Сервер установит следующие куки:</h1>
<h2>Set-Cookie: role=student;path=/;</h2>
<h2>Set-Cookie: auth=123;path=/;max-age=3000;HttpOnly;</h2>
<h2>Браузер автоматически добавляет куки к каждому запросу на этот домен</h2>
`
    )
})

app.get('/with_cookies', (req, res) => {
    res.cookie('role', 'student', {path: '/'});
    res.cookie('auth', '123', {path: '/',
maxAge: 3000,
httpOnly: true});
    res.send(`
<h1>Сервер установит следующие куки:</h1>
<h2>Set-Cookie: role=student;path=/;</h2>
<h2>Set-Cookie: auth=123;path=/;max-age=3000;HttpOnly;</h2>
<h1>Неудобный API, так исторически сложилось</h1>
<pre>
    <code style="font-size: 20px">
document.cookie = 'lecture=js'; // добавить или перезаписать значение
document.cookie = 'lecture=js; max-age=0;' // простейший способ удалить - задать нулевое время жизни в секундах
    </code>
</pre>

`
    )
})

app.get('/local_storage', (req, res) => {
    const response =
        `
<h2>localStorage.setItem</h2>
<ul>
    <li><h3>Автоматическая конвертация строку</h3></li>
    <li><h3>JSON.stringify</h3></li>
</ul>
<h2>localStorage.getItem</h2>
<h2>localStorage.removeItem</h2>
<h2>localStorage.length</h2>
<h2>localStorage.hasOwnProperty</h2>
<h2>Object.keys</h2>
<h2>Object.values</h2>
<h2>Object.entries</h2>
<h2>localStorage.clear</h2>
<h2>Как подписаться на изменения (работает разных вкладках)</h2>
<h2>try catch (инкогнито, QuotaExceededError и т.д)</h2>
<script>window.addEventListener('storage', (storageEvent) => console.log(storageEvent))</script>
`
    res.send(response)
})

app.get('/fetch/then', (req, res) => {
    const response = `
<h2>Получаем Response => читаем тело через .json(), .text() и т.д.</h2>    
<h2>HTTP ошибки не отлавливаются через catch – обработка через if (!response.ok)</h2>    
<h2>DELETE, PUT, PATCH — по той же схеме, меняется только метод</h2>    
`
    res.send(response)
})

app.get('/fetch/async-await-get', (req, res) => {
    const response = `
<h2>Посылаем GET запрос</h2>    
<h2>Получаем Response</h2>    
<h2>Читаем статус ответа response.ok</h2>    
<h2>Читаем заголовки ответа response.headers</h2>    
<h2>Читаем тело ответа через .json(), .text()</h2>    
<h2>HTTP ошибки не отлавливаются через catch – обработка через if (!response.ok)</h2>    
`
    res.send(response)
})

app.get('/fetch/async-await-post', (req, res) => {
    const response = `
<h2>Посылаем POST запрос (+ заголовок + тело + JSON.stringify)</h2>     
<h2>Получаем Response</h2>    
<h2>Читаем тело ответа через .json(), .text()</h2>    
<h2>HTTP ошибки не отлавливаются через catch – обработка через if (!response.ok)</h2>    
`
    res.send(response)
})

app.get('/hello_world', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/iframe_with_json', (req, res) => {
    res.send(users)
})

app.get('/users', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.send(users)
})

app.get('/status500', (req, res) => {
    res.sendStatus(500)
})

app.post('/registration', (req, res) => {
    res.send({status: 'OK'})
})

app.get('/analytics/slow', (req, res) => {
    console.log(`request ${req.method} ${req.path} with query: ${JSON.stringify(req.query)}`)
    res.setHeader('Access-Control-Allow-Origin', '*')
    setTimeout(() => {
        console.log('response: OK')
        res.json('OK')
    }, 2000)
})

app.get('/data', (req, res) => {
    const data = {
        id: 1,
        name: 'Иван Иванов',
        email: 'ivan@example.com',
        role: 'student',
    }

    // res.format использует заголовок Accept для выбора формата ответа
    res.format({
        'application/json': () => {
            res.json(data)
        },
        'application/xml': () => {
            res.setHeader('Content-Type', 'application/xml')
            res.send(`<?xml version="1.0" encoding="UTF-8"?>
<user>
  <id>${data.id}</id>
  <name>${data.name}</name>
  <email>${data.email}</email>
  <role>${data.role}</role>
</user>`)
        },
        'text/plain': () => {
            res.send(Object.entries(data).map(([k, v]) => `${k}: ${v}`).join('\n'))
        },
        // если ни один из форматов не подошёл — 406 Not Acceptable
        default: () => {
            res.status(406).send('Not Acceptable')
        },
    })
})

app.post('/analytics/slow', (req, res) => {
    console.log(`request ${req.method} ${req.path} with query: ${JSON.stringify(req.query)}`)
    res.setHeader('Access-Control-Allow-Origin', '*')
    setTimeout(() => {
        console.log('response: OK')
        res.json('OK')
    }, 3000)
})


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

