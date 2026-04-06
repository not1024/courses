import React from 'react';
import {H1, H3} from '../../components/typography';
import {
    ListItem,
    Slide,
    Text,
    UnorderedList,
    FlexBox, Link, Appear
} from 'spectacle';
import CodeExampleButton from '../../components/CodeExampleButton';
import { ReactComponent as FetchWebPage} from './images/fetching-a-page.svg'
import { ReactComponent as HttpMessageStructure} from './images/http-message-structure.svg'
import { ReactComponent as HttpHeaders} from './images/http-headers.svg'
import SlideQuestions from '../../components/SlideQuestions';
import SlideUsefulLinks from '../../components/SlideUsefulLinks';
import CodePaneJS from '../../components/CodePaneJS';
import CodeContainer from '../../components/CodeContainer';


const HTTP = () => {
    return (
        <>
            <Slide>
                <H1>HTTP Протокол</H1>
                <UnorderedList>
                    <Appear><ListItem>Что это? Зачем нужен?</ListItem></Appear>
                    <Appear><ListItem>Структура запросов/ответов</ListItem></Appear>
                    <Appear><ListItem>Инструменты разработчика</ListItem></Appear>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>HTTP — протокол передачи данных</H3>
                <UnorderedList>
                    <Appear><ListItem>Клиент делает запрос, сервер возвращает ответ</ListItem></Appear>
                    <Appear><ListItem>Данные: HTML, TEXT, JPG, MP3, MOV и т.д.</ListItem></Appear>
                    <Appear><ListItem>Протокол: правила общения клиента и сервера</ListItem></Appear>
                    <Appear><ListItem>Клиент: <Link href="https://httpbin.org/html">браузер</Link> (или другой http клиент)</ListItem></Appear>
                    <Appear><ListItem>Сервер: приложение (Nginx + Express.js)</ListItem></Appear>
                </UnorderedList>
                <Appear>
                    <CodeContainer>
                        <CodeExampleButton code="curl http://httpbin.org/html" target="no">Пример curl</CodeExampleButton>
                        <CodeExampleButton code="curl -v http://httpbin.org/html" target="no">Пример curl (подключение / запрос / ответ)</CodeExampleButton>
                    </CodeContainer>
                </Appear>
            </Slide>
            <Slide>
                <H3>Пример загрузки сайта</H3>
                <FlexBox backgroundColor="#fff">
                    <FetchWebPage />
                </FlexBox>
            </Slide>
            {/*<Slide>*/}
            {/*    <H3>Зачем нужен?</H3>*/}
            {/*    <UnorderedList>*/}
            {/*        <Appear><ListItem>Удобно когда есть единый язык общения</ListItem></Appear>*/}
            {/*        <Appear><ListItem>Без стандарта каждый браузер и сервер говорили бы "по-своему", а так любой браузер работает с любым сервером, если оба соблюдают протокол</ListItem></Appear>*/}
            {/*        <Appear><ListItem>Благодаря стандарту — браузеры конкурируют по скорости и удобству, а серверы конкурируют по надёжности и функциям</ListItem></Appear>*/}
            {/*    </UnorderedList>*/}
            {/*</Slide>*/}
            <Slide>
                <H3>Структура</H3>
                <Text>Запросы и ответы имеют строго определённую структуру</Text>
                <Appear>
                    <FlexBox backgroundColor="#fff">
                        <HttpMessageStructure/>
                    </FlexBox>
                </Appear>
            </Slide>
            <Slide>
                <H3>Стартовая строка</H3>
                <CodePaneJS>
                    {
                        `
                        GET https://httpbin.org/image HTTP/1.1  // Стартовая строка запроса (Метод - URL - Версия HTTP)

                        HTTP/1.1 200 OK                         // Стартовая строка ответа (Версия HTTP - Статус код - Описание)
                        `
                    }
                </CodePaneJS>
                <UnorderedList>
                    <Appear><ListItem>Метод – GET/POST/PUT/DELETE и другие</ListItem></Appear>
                    <Appear><ListItem>Версия протокола – HTTP/1.0, HTTP/1.1, HTTP/2 и др.</ListItem></Appear>
                    <Appear><ListItem>Статус код ответа – 2xx, 4xx, 5xx и др.</ListItem></Appear>
                    <Appear><ListItem>Описание – OK, NOT_FOUND, Internal Server Error и др.</ListItem></Appear>
                </UnorderedList>
                <Appear>
                    <CodeContainer>
                        <CodeExampleButton code="" target="no">Выполним разные типы запросов в http клиенте (Webstorm/Idea)</CodeExampleButton>
                    </CodeContainer>
                </Appear>
            </Slide>
            <Slide>
                <H3>URL (адрес ресурса в интернете)</H3>
                <CodePaneJS>
                    {
                        'https://mywebsite.com/presentation?slideIndex=6&stepIndex=0'
                    }
                </CodePaneJS>
                <UnorderedList>
                    <Appear><ListItem>protocol – http: или https:</ListItem></Appear>
                    <Appear><ListItem>domain – mywebsite.com</ListItem></Appear>
                    <Appear><ListItem>port (tcp) – для http порт :80, для https порт :443</ListItem></Appear>
                    <Appear><ListItem>pathname (путь) – /presentation</ListItem></Appear>
                    <Appear><ListItem>query – ?slideIndex=6&stepIndex=0</ListItem></Appear>
                    <Appear><ListItem>origin – https://mywebsite.com:443</ListItem></Appear>
                    <Appear><ListItem>Абсолютный/Относительный URL</ListItem></Appear>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>Заголовки</H3>
                <FlexBox justifyContent="center"><HttpHeaders /></FlexBox>
                <UnorderedList>
                    <Appear><ListItem>Дополнительная информация к запросу или ответу</ListItem></Appear>
                    <Appear><ListItem>Формат ключ: значение, разделяются переносом строки</ListItem></Appear>
                    <Appear><ListItem>Клиент сообщает кто он и что отправляет</ListItem></Appear>
                    <Appear><ListItem>Сервер сообщает что вернул и как с этим работать</ListItem></Appear>
                </UnorderedList>
                <Appear>
                    <CodeContainer>
                        <CodeExampleButton code="" target="no">Пример в http клиенте (Webstorm/Idea)</CodeExampleButton>
                    </CodeContainer>
                </Appear>
            </Slide>
            <Slide>
                <H3>Тело запроса/ответа</H3>
                <CodePaneJS>
                    {
                        `
POST https://site.com/login HTTP/1.1
Accept: application/json
Content-Type: application/x-www-form-urlencoded

email=john@mail.com&password=123
                        `
                    }
                </CodePaneJS>
                <UnorderedList>
                    <Appear><ListItem>Тело запроса есть у POST/PUT/PATCH, но нет у GET</ListItem></Appear>
                    <Appear><ListItem>В теле запроса могут быть любые данные</ListItem></Appear>
                    <Appear><ListItem>Accept указывает какие данные хочет клиент</ListItem></Appear>
                    <Appear><ListItem>Content-Type указывает тип данных в теле сообщения</ListItem></Appear>
                </UnorderedList>
                <Appear>
                    <CodeContainer>
                        <CodeExampleButton code="" target="no">Пример в http клиенте (Webstorm/Idea)</CodeExampleButton>
                    </CodeContainer>
                </Appear>
            </Slide>
            <Slide>
                <H3>Изучим инструменты разработчика</H3>
                <UnorderedList>
                    <ListItem>Главный помощник разработчика в браузере</ListItem>
                    <ListItem>Правая кнопка мыши, затем "Посмотреть код"</ListItem>
                    <Appear><ListItem>Ctrl+Shift+I (Windows/Linux)</ListItem></Appear>
                    <Appear><ListItem>Cmd+Option+I (macOS)</ListItem></Appear>
                    <Appear><ListItem>F12 (+ Fn)</ListItem></Appear>
                    <Appear><ListItem>Элементы, Консоль, Сеть, Приложение</ListItem></Appear>
                </UnorderedList>
                <CodeContainer>
                    <CodeExampleButton code="document.querySelector('p').textContent = 'test'" url="http://httpbin.org/">Проинспектируем простенький сайт</CodeExampleButton>
                </CodeContainer>
            </Slide>
            <SlideUsefulLinks>
                <Link href="https://htmlacademy.ru/blog/php/http" target="_blank">Коротко про принцип работы</Link>
                <Link href="https://doka.guide/tools/http-protocol/" target="_blank">Doka про HTTP протокол</Link>
                <Link href="https://developer.chrome.com/docs/devtools?hl=ru" target="_blank">Инструменты разработчика</Link>
            </SlideUsefulLinks>
            <SlideQuestions />
        </>
    )
}

export default HTTP
