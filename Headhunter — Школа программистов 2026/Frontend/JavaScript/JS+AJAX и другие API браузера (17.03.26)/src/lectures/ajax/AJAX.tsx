import React, {FC, MouseEvent, useState} from 'react';
import {
    Appear,
    FlexBox,
    Link,
    ListItem,
    OrderedList,
    Slide,
    Text,
    UnorderedList
} from 'spectacle';
import {Button, Loader, VSpacing} from '@hh.ru/magritte-ui';
import {H1, H3} from '../../components/typography'
import CodePaneJS from '../../components/CodePaneJS';
import CodeExampleButton from '../../components/CodeExampleButton';
import PresentationButton from '../../components/PresentationButton';
import SlideQuestions from '../../components/SlideQuestions';
import {
    // exampleIframeAjaxRequest,
    // exampleXhrRequest,
    exampleXhrOnloadHandler,
    exampleFetchRequest,
    exampleFetchRequestAsyncAwait,
    exampleFetchRequestPostBody,
    exampleJSONData, exampleXhrGet, exampleXhrPost, exampleInvalidJSONData,
} from '../../examples/ajax';
import SlideUsefulLinks from '../../components/SlideUsefulLinks';
import CodeContainer from '../../components/CodeContainer';


const AJAX: FC = () => {
    const [iframeType, setIframeType] = useState<'content' | 'data' | undefined>();
    const [isAsyncLoading, setIsAsyncLoading] = useState(false);
    const [isSyncLoading, setIsSyncLoading] = useState(false);

    return (
        <>
            <Slide>
                <H1>AJAX</H1>
                <UnorderedList>
                    <Appear><ListItem>Что это такое? Как работает?</ListItem></Appear>
                    <Appear><ListItem>Зачем нужен?</ListItem></Appear>
                    <Appear><ListItem>Разберем на примерах</ListItem></Appear>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>Что это?</H3>
                <Text>Асинхронный JavaScript и XML</Text>
                <Appear><Text>Подход к построению веб приложений</Text></Appear>
                <OrderedList>
                    <Appear><ListItem>JS делает запрос к серверу в фоновом режиме</ListItem></Appear>
                    <Appear><ListItem>Получаем данные из ответа</ListItem></Appear>
                    <Appear><ListItem>Обновляем UI без перезагрузки страницы</ListItem></Appear>
                </OrderedList>
            </Slide>
            <Slide>
                <H3>Почему Асинхронный? Почему XML?</H3>
                <OrderedList>
                    <Appear><ListItem>Синхронный запрос блокирует поток выполнения</ListItem></Appear>
                    <Appear><ListItem>Изначально данные передавались в XML формате</ListItem></Appear>
                    <Appear><ListItem>Название закрепилось исторически, хотя технология эволюционировала</ListItem></Appear>
                </OrderedList>
                <Appear>
                    <FlexBox justifyContent="start" pt={24} style={{ gap: '12px' }}>
                        <Button style="neutral" mode="secondary" onClick={() => {
                            setIsAsyncLoading(true);
                            const asyncRequest = new XMLHttpRequest();
                            asyncRequest.open('GET', 'http://localhost:8000/slow', true);
                            asyncRequest.onload = () => {
                                setIsAsyncLoading(false);
                            }
                            asyncRequest.send();
                        }}>Асинхронный запрос {isAsyncLoading && <Loader size={16} />}</Button>
                        <Button style="neutral" mode="secondary" onClick={() => {
                            setIsSyncLoading(true);
                            const syncRequest = new XMLHttpRequest();
                            syncRequest.open('GET', 'http://localhost:8000/slow', false);
                            syncRequest.onload = () => {
                                setIsSyncLoading(false);
                            }
                            syncRequest.send();
                        }} >Синхронный запрос {isSyncLoading && <Loader size={16} />}</Button>
                        <Button style="neutral" mode="secondary" onClick={console.log}>Просто кнопка</Button>
                    </FlexBox>
                </Appear>
            </Slide>
            <Slide>
                <H3>Как работали сайты до AJAX?</H3>
                <Text>Сайт без AJAX <Link href="https://ru.wordpress.org/themes">Wordpress</Link></Text>
                <Text>Сайт с AJAX <Link href="https://hh.ru/mentors">HeadHunter</Link></Text>
            </Slide>
            <Slide>
                <H3>Основные достоинства</H3>
                <UnorderedList>
                    <Appear><ListItem>Интерфейс становится интерактивным и отзывчивым</ListItem></Appear>
                    <Appear><ListItem>Можно смотреть видео и писать в чат без перезагрузки</ListItem></Appear>
                    <Appear><ListItem>Частичное обновление — меньше трафика и нагрузки</ListItem></Appear>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>Основные недостатки</H3>
                <UnorderedList>
                    <Appear><ListItem>Усложнение клиентского приложения</ListItem></Appear>
                    <Appear><ListItem>Контент может быть недоступен поисковикам (SEO)</ListItem></Appear>
                    <Appear><ListItem>Не будет работать без включенного JS в браузере</ListItem></Appear>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>Про локальный сервер на nodejs + express</H3>
                <UnorderedList>
                    <Appear><ListItem><Link href="http://localhost:8000/users">GET http://localhost:8000/users</Link></ListItem></Appear>
                    <Appear><ListItem><Link href="http://localhost:8000/slow">GET http://localhost:8000/slow</Link></ListItem></Appear>
                    <Appear><ListItem>POST http://localhost:8000/registration</ListItem></Appear>
                </UnorderedList>
                <Appear>
                    <FlexBox justifyContent="start" pt={24} style={{ gap: '12px' }}>
                        <CodeExampleButton code="GET http://localhost:8000/users HTTP/1.1" target="no">GET /users (Idea HTTP Client)</CodeExampleButton>
                    </FlexBox>
                </Appear>
            </Slide>
            <Slide>
                <H3>Текстовый формат данных JSON</H3>
                <CodePaneJS>
                    {`
                        // основан на синтаксисе объектов JavaScript 
                        {
                            "rules": {
                                "required": true
                            },
                            "users": [{"name": "John", "age": 35}, {"name": "Ivan", "age": 30}],
                            "total": 2,
                            "meta": null
                        }
                        // ❌ Запрещены комментарии и запятые в конце строк, кавычки только двойные
                    `}
                </CodePaneJS>
                <UnorderedList>
                    <Appear><ListItem>Типы значений – str | num | obj | array | bool | null</ListItem></Appear>
                    <Appear><ListItem>Структуры данных - объекты и массивы</ListItem></Appear>
                </UnorderedList>
                <CodeContainer>
                    <CodeExampleButton code={exampleInvalidJSONData} url="https://jsonlint.com/">JSON Валидатор</CodeExampleButton>
                    <CodeExampleButton code={exampleJSONData}/>
                </CodeContainer>
            </Slide>
            <Slide>
                <H3>Способы асинхронной передачи данных</H3>
                <OrderedList>
                    <Appear><ListItem>Iframe</ListItem></Appear>
                    <Appear><ListItem>XMLHttpRequest API</ListItem></Appear>
                    <Appear><ListItem>Fetch API (ES6)</ListItem></Appear>
                    <Appear><ListItem>Image API и Beacon API</ListItem></Appear>
                    <Appear><ListItem>WebSocket, Server Sent Events, WebRTC</ListItem></Appear>
                </OrderedList>
            </Slide>
            <Slide>
                <H3>Iframe</H3>
                <CodePaneJS>
                    {`
                        const iframe = document.createElement('iframe')
                        iframe.src = 'http://localhost:8000/iframe_with_json'
                        iframe.onload = () => {
                            // получаем данные из ответа и обновляем UI
                            const responseData = iframe.contentWindow.document.body.innerText
                            ...
                        }
                        document.body.appendChild(iframe)
                    `}
                </CodePaneJS>
                <CodeContainer>
                    <PresentationButton onClick={() => setIframeType(iframeType === 'content' ? undefined : 'content')}>
                        Показать iframe с контентом
                    </PresentationButton>
                    <PresentationButton onClick={() => setIframeType(iframeType === 'data' ? undefined : 'data')}>
                        Показать iframe с данными
                    </PresentationButton>
                    {/*<CodeExampleButton code={exampleIframeAjaxRequest} url='http://localhost:8000/hello_world'/>*/}
                </CodeContainer>
                {iframeType === 'content' && (
                    <FlexBox pt={12} >
                        <iframe
                            id="inlineFrameExample"
                            title="Inline Frame Example"
                            width="50%"
                            height="200"
                            src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik">
                        </iframe>
                    </FlexBox>
                )}
                {iframeType === 'data' && (
                    <FlexBox pt={12}>
                        <iframe
                            title="Iframe"
                            src="http://localhost:8000/iframe_with_json"
                            height="200px"
                            width="50%"
                            style={{backgroundColor: 'beige'}}
                        />
                    </FlexBox>
                )}
            </Slide>
            <Slide>
                <H3>XMLHttpRequest API (XHR)</H3>
                <CodePaneJS>
                    {`
                        const getRequest = new XMLHttpRequest()
                        //  настраиваем стартовую строку
                        getRequest.open('GET', 'http://localhost:8000/hello_world', true)  // если true - async; 
                        getRequest.setRequestHeader('Authorization', 'Basic 123..789'); // настраиваем заголовки
                        getRequest.send() // отправляем запрос без тела
                    `}
                </CodePaneJS>
                <CodeContainer>
                    <CodeExampleButton code={exampleXhrGet} />
                </CodeContainer>
                <Appear>
                    <VSpacing default={12} />
                    <CodePaneJS>
                        {`
                        const postRequest = new XMLHttpRequest()
                        postRequest.open('POST', 'http://localhost:8000/registration', false)
                        postRequest.setRequestHeader('Content-Type', 'text/html');
                        postRequest.send("username=ivan&password=123") // отправляем запрос с телом
                    `}
                    </CodePaneJS>
                    <CodeContainer>
                        <CodeExampleButton code={exampleXhrPost} />
                    </CodeContainer>
                </Appear>
            </Slide>
            <Slide>
                <H3>XMLHttpRequest События</H3>
                <CodePaneJS>
                    {`
                        // Обработчики событий позволяют реагировать на ход запроса и обновлять UI

                        const xhr = new XMLHttpRequest()
                        xhr.open('GET', 'http://localhost:8000/users')                        
                        xhr.onprogress = (event) => console.log(event);
                        xhr.onload = (event) => console.log(event);
                        xhr.onerror = (event) => console.log(event);
                        xhr.send()
                        
                        xhr.abort(); // отмена запроса
                    `}
                </CodePaneJS>
                <CodeContainer>
                    <CodeExampleButton code={exampleXhrOnloadHandler}>Пример с onload</CodeExampleButton>
                    {/*<CodeExampleButton code={exampleXhrRequest}>Про readyState</CodeExampleButton>*/}
                </CodeContainer>
            </Slide>
            <Slide>
                <H3>Достоинства XMLHttpRequest</H3>
                <UnorderedList>
                    <Appear><ListItem>Широкая поддержка браузеров, включая IE</ListItem></Appear>
                    <Appear><ListItem>Отслеживание прогресса загрузки (onprogress)</ListItem></Appear>
                    <Appear><ListItem>Поддержка синхронных запросов</ListItem></Appear>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>Недостатки XMLHttpRequest</H3>
                <UnorderedList>
                    <Appear><ListItem>Громоздкое API — на каждый запрос нужно написать new, open, send (базовый минимум)</ListItem></Appear>
                    <Appear><ListItem>Нет удобной работы с JSON — нужен ручной JSON.parse</ListItem></Appear>
                    <Appear><ListItem>Нет поддержки Promise — callback hell при цепочках запросов</ListItem></Appear>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>Ад колбэков</H3>
                <CodePaneJS>
                    {`
const loadToken = new XMLHttpRequest();
loadToken.open("GET", "/token");
loadToken.onerror = () => console.error("token:", loadToken.status);
loadToken.onload = () => {
  const loadUser = new XMLHttpRequest();
  loadUser.open("GET", "/user?t=" + JSON.parse(loadToken.response).token);
  loadUser.onerror = () => console.error("user:", loadUser.status);
  loadUser.onload = () => {
    const sendCheckout = new XMLHttpRequest();
    sendCheckout.open("POST", "/checkout?uid=" + JSON.parse(loadUser.response).id);
    sendCheckout.onerror = () => console.error("checkout:", sendCheckout.status);
    sendCheckout.onload = () => console.log("✅", JSON.parse(sendCheckout.response));
    sendCheckout.send();
  };
  loadUser.send();
};
loadToken.send();
`}
                </CodePaneJS>
            </Slide>
            <Slide>
                <H3>Fetch API — запрос с .then()</H3>
                <CodePaneJS>
                    {`
                        fetch('/users')                             // Возвращает promise
                            .then(response => {                     // Response объект
                                console.log(response.ok)            // true если статус 200–299
                                console.log(response.headers)       // заголовки ответа
                                return response.text()              // .text() асинхронный поэтому return
                            })
                            .then(data => console.log(data))        // работа с данными
                            .catch(error => console.warn(error))    // Обрабатываем ошибки соединения/сетевые с помощью catch
                    `}
                </CodePaneJS>
                <CodeContainer>
                    <CodeExampleButton code={exampleFetchRequest} url="http://localhost:8000/fetch/then"/>
                </CodeContainer>
            </Slide>
            <Slide>
                <H3>Fetch API — запрос с async/await</H3>
                <CodePaneJS>
                    {`
                        try {
                            const usersResponse = await fetch('/users');
                            if (!usersResponse.ok) throw new Error('unable to fetch users');

                            const usersDataResponse = await fetch('/users/data');
                            if (!usersDataResponse.ok) throw new Error('unable to fetch users data');
                            
                            const users = await usersResponse.json();
                            const usersData = await usersDataResponse.json();
                            
                            const combinedData = prepareCombinedData(users, usersData);
                            ...
                        } catch (error) {
                            console.warn(error)
                        }
                    `}
                </CodePaneJS>
                <CodeContainer>
                    <CodeExampleButton code={exampleFetchRequestAsyncAwait} url="http://localhost:8000/fetch/async-await-get"/>
                </CodeContainer>
            </Slide>
            <Slide>
                <H3>Fetch API — параметры запроса</H3>
                <CodePaneJS>
                    {`
                        fetch('/users', {           // URL
                            method: 'POST',         // Метод – GET, POST и др.
                            headers: {              // заголовки
                                Authorization: 'Bearer abc123',
                                'Content-Type': 'application/json',
                                Accept: '*/*'
                            },                      // Полный список опций больше
                            redirect: 'follow',     // follow - следовать, error - не следовать
                            cache: 'no-store',      // default – стандартные правила, no-store – вообще не кешировать
                            body: '{"username": "ivanov", "password": "123"}',  // тело запроса
                        })
                    `}
                </CodePaneJS>
                <CodeContainer>
                    <CodeExampleButton code={exampleFetchRequestPostBody} url="http://localhost:8000/fetch/async-await-post"/>
                    <CodeExampleButton code="" url="https://learn.javascript.ru/fetch-api">Fetch API все опции</CodeExampleButton>
                </CodeContainer>
            </Slide>
            <Slide>
                <H3>Fetch API — недостатки</H3>
                <UnorderedList>
                    <Appear><ListItem>Нет возможности отслеживать прогресс загрузки</ListItem></Appear>
                    <Appear><ListItem>Нет возможности выполнить запрос синхронно</ListItem></Appear>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>Fetch API — достоинства</H3>
                <UnorderedList>
                    <Appear><ListItem>Удобное API — один fetch() вместо нескольких шагов</ListItem></Appear>
                    <Appear><ListItem>Promise-based — легко использовать с async/await</ListItem></Appear>
                    <Appear><ListItem>Удобная работа с JSON — через response.json()</ListItem></Appear>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>Image API</H3>
                <CodePaneJS>
                    {`
                        const image = new Image()
                        image.src = 'https://hh.ru/analytics?action=buy&item=13'             
                    `}
                </CodePaneJS>
                <UnorderedList>
                    <Appear><ListItem>✅ Работает кроссдоменно (запрос на любой домен)</ListItem></Appear>
                    <Appear><ListItem>✅ Для аналитики хватает GET запроса с данными в URL</ListItem></Appear>
                    <Appear><ListItem>❌ Нельзя передать body</ListItem></Appear>
                    <Appear><ListItem>❌ Браузер может отменить запрос при уходе со страницы</ListItem></Appear>
                </UnorderedList>
                <Appear>
                    <Link
                        onClick={() => {
                            const img = new Image()
                            img.src = 'http://localhost:8000/image?action=buy&item=11'
                        }}>
                        Image API
                    </Link>
                </Appear>
            </Slide>
            <Slide>
                <H3>Beacon API</H3>
                <CodePaneJS>
                    {`
                        navigator.sendBeacon('/analytics/slow?action=buy&item=13', 'any data')
                    `}
                </CodePaneJS>
                <UnorderedList>
                    <Appear><ListItem>✅ Гарантируется доставка при штатном закрытии вкладки, переходе на другой URL</ListItem></Appear>
                    <Appear><ListItem>ℹ️ fetch/xhr/др. могут быть отменены браузером</ListItem></Appear>
                    <Appear><ListItem>✅ Можно передать body — в отличие от Image API</ListItem></Appear>
                </UnorderedList>
                <Appear>
                    <FlexBox justifyContent="start" paddingTop={12} style={{ gap: '12px' }}>
                        <Link
                            href="https://httpbin.org/"
                            onClick={(event: MouseEvent) => {
                                event.preventDefault()
                                fetch('http://localhost:8000/analytics/slow').then(() => window.location.assign('https://httpbin.org/'))
                            }}>
                            Fetch API
                        </Link>
                        <Link
                            href="https://httpbin.org/"
                            onClick={() => {
                                navigator.sendBeacon('http://localhost:8000/analytics/slow?logs=ok', '{"selectedItems": []}')
                            }}>
                            Beacon API
                        </Link>
                    </FlexBox>
                </Appear>
            </Slide>
            <Slide>
                <H3>Server Sent Events</H3>
                <Text>Механизм однонаправленного потока событий от сервера к клиенту поверх обычного HTTP-соединения</Text>
                <UnorderedList>
                    <Appear><ListItem>Сообщения посылает только сервер</ListItem></Appear>
                    <Appear><ListItem>Данные — только текстовые</ListItem></Appear>
                    <Appear><ListItem>Удобное API</ListItem></Appear>
                    <Appear><ListItem>Для <Link href="https://ru.investing.com/charts/multiple-forex-streaming-charts">дашбордов</Link> с быстро меняющимися данными</ListItem></Appear>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>WebSocket</H3>
                <Text>Протокол постоянного двустороннего соединения между клиентом и сервером поверх TCP</Text>
                <UnorderedList>
                    <Appear><ListItem>Сообщения может посылать и клиент, и сервер</ListItem></Appear>
                    <Appear><ListItem>Данные — бинарные и текстовые</ListItem></Appear>
                    <Appear><ListItem>Собственный протокол — ws:// или wss://</ListItem></Appear>
                    <Appear><ListItem>Для чатов, игр, приложений с realtime взаимодействиями</ListItem></Appear>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>Web RTC (Real-Time-Communication)</H3>
                <Text>Технология потоковой передачи данных между браузерами или другими приложениями</Text>
                <UnorderedList>
                    <Appear><ListItem>Работает на основе P2P протокола (обмен данными происходит без сервера)</ListItem></Appear>
                    <Appear><ListItem>Позволяет передавать и получать видео, аудио и др.</ListItem></Appear>
                    <Appear><ListItem>Google Meet, Discord и т.д.</ListItem></Appear>
                </UnorderedList>
            </Slide>
            <SlideUsefulLinks theme="AJAX">
                <Link href="https://habr.com/ru/articles/554274/" target="_blank">Формат данных JSON</Link>
                <Link href="https://learn.javascript.ru/xmlhttprequest" target="_blank">XMLHttpRequest</Link>
                <Link href="https://doka.guide/js/fetch/" target="_blank">Fetch API</Link>
                <Link href="https://developer.mozilla.org/ru/docs/Web/API/Navigator/sendBeacon" target="_blank">Beacon API</Link>
                <Link href="https://learn.javascript.ru/server-sent-events" target="_blank">Server Sent Events</Link>
                <Link href="https://learn.javascript.ru/websocket" target="_blank">Web Socket</Link>
                <Link href="https://developer.mozilla.org/ru/docs/Web/API/WebRTC_API" target="_blank">WebRTC API</Link>
            </SlideUsefulLinks>
            <SlideQuestions />
        </>
    )
}

export default AJAX;
