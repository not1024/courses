import React, {FC} from 'react';
import {
    Appear,
    Link,
    ListItem,
    Slide,
    Text,
    UnorderedList
} from 'spectacle';
import {H1, H3} from '../../components/typography';
import CodePaneJS from '../../components/CodePaneJS';
import SlideQuestions from '../../components/SlideQuestions';
import CodeExampleButton from '../../components/CodeExampleButton';
import SlideUsefulLinks from '../../components/SlideUsefulLinks';
import CodeContainer from '../../components/CodeContainer';


const CORS: FC = () => {
    return (
        <>
            <Slide>
                <H1>CORS</H1>
                <UnorderedList>
                    <Appear><ListItem>Что это такое?</ListItem></Appear>
                    <Appear><ListItem>Зачем нужно?</ListItem></Appear>
                    <Appear><ListItem>Посмотрим примеры</ListItem></Appear>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>Same-Origin Policy</H3>
                <Text>Политика безопасности, ограничивающая взаимодействие скриптов из одного источника с ресурсами из другого</Text>
                <UnorderedList>
                    <Appear><ListItem>Источник (Origin) == протокол + домен + порт</ListItem></Appear>
                    <Appear><ListItem>Ограничения касаются ajax, cookie, localStorage, элементы DOM</ListItem></Appear>
                    <Appear><ListItem>При этом встраивание ресурсов используя HTML теги (img, video, link) разрешено из любых источников</ListItem></Appear>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>Зачем такие ограничения?</H3>
                <Appear>
                    <Text>Для безопасности, без этого вредоносные сайты могут украсть данные с другого сайта</Text>
                </Appear>
                <Appear>
                    <CodePaneJS>
                        {`
// Заходишь на vk1.com, а там скрипт пытается запросить данные с anybank.com
fetch("https://anybank.com/api/account", {
  credentials: "include" // с авторизационными данными
})
.then(r => r.json())
.then(data => console.log("Украденные данные:", data));
 // ❌ Access to fetch at 'https://anybank.com' has been blocked by CORS policy
                    `}
                    </CodePaneJS>
                </Appear>
            </Slide>
            <Slide>
                <H3>CORS (Cross-Origin Resource Sharing)</H3>
                <Text>Механизм, позволяющий настроить доступ к ресурсам с другого источника с помощью HTTP заголовков</Text>
                <CodePaneJS>
                    {`
                        // Запрос
                        GET https://bankgroup.com/partners HTTP/1.1
                        Origin: https://anybank.com

                        // Ответ
                        HTTP/1.1 200 OK
                        Access-Control-Allow-Origin: https://anybank.com
                    `}
                </CodePaneJS>
                <CodeContainer>
                    <CodeExampleButton code="fetch('http://localhost:8000/cors')" url="https://example.com">
                        Установить CORS заголовки на сервере
                    </CodeExampleButton>
                </CodeContainer>
            </Slide>
            <Slide>
                <H3>Основные CORS настройки</H3>
                <CodePaneJS>
                    {`
                        // Кто может делать запросы
                        Access-Control-Allow-Origin: *
                        Access-Control-Allow-Origin: https://hh.ru
                        // Какие HTTP-методы разрешены
                        Access-Control-Allow-Methods: POST, GET, OPTIONS
                        // Какие заголовки запроса разрешены
                        Access-Control-Allow-Headers: Content-Type, Authorization, X-Custom-Header

                        // Разрешить клиенту сделать запрос с авторизационными данными (куки, заголовки)
                        Access-Control-Allow-Credentials: true
                        
                        // Пример запроса с авторизационными данными
                        fetch('http://localhost:8000/users', {'credentials': 'include'})
                    `}
                </CodePaneJS>
            </Slide>
            <SlideUsefulLinks theme="CORS">
                <Link href="https://doka.guide/tools/cors/" target="_blank">CORS за 5 мин</Link>
                <Link href="https://developer.mozilla.org/ru/docs/Web/HTTP/CORS" target="_blank">MDN CORS</Link>
                <Link href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors" target="_blank">MDN CORS ошибки</Link>
                <Link href="https://developer.mozilla.org/ru/docs/Web/Security/Same-origin_policy" target="_blank">MDN Same-origin policy</Link>
            </SlideUsefulLinks>
            <SlideQuestions />
        </>
    )
}

export default CORS;
