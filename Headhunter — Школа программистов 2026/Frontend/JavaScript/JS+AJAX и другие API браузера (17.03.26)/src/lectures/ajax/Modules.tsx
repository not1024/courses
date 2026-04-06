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
import SlideUsefulLinks from '../../components/SlideUsefulLinks';

const LocalStorages: FC = () => {
    return (
        <>
            <Slide>
                <H1>JS Модули (ES6)</H1>
                <UnorderedList>
                    <Appear><ListItem>Что это?</ListItem></Appear>
                    <Appear><ListItem>Для чего использовать?</ListItem></Appear>
                    <Appear><ListItem>Как использовать?</ListItem></Appear>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>Что это?</H3>
                <Text fontSize={24}>
                    Модуль – файл, который содержит код
                </Text>
                <CodePaneJS>
                    {`
                        // файл (модуль) utils.js
                        export const getCurrentDate = () => '${new Date().toUTCString()}';
                    `}
                </CodePaneJS>
                <Text fontSize={24}>Код выносится в модули для удобства</Text>
                <CodePaneJS>
                    {`
                        // Использование в app.js
                        import { getCurrentDate } from './utils'
                        const today = getCurrentDate()
                    `}
                </CodePaneJS>
            </Slide>
            <Slide>
                <H3>Для чего использовать?</H3>
                <Appear>
                    <Text>В большом проекте помогает:</Text>
                    <UnorderedList>
                        <ListItem>Понять структуру и взаимосвязи</ListItem>
                    </UnorderedList>
                </Appear>
                <UnorderedList>
                    <Appear><ListItem>Переиспользовать код</ListItem></Appear>
                    <Appear><ListItem>Перемещаться по проекту</ListItem></Appear>
                    <Appear><ListItem>Параллельно работать над проектом</ListItem></Appear>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>Экспорт до объявления</H3>
                <CodePaneJS>
                    {`
                        // файл (модуль) utils.js
                        const privateData = [4, 5, 6]  // не экспортировано
                        export const sortElements = (elements, direction) => {}
                        export const sortDirection = 'ASC'
                    `}
                </CodePaneJS>
                <CodePaneJS>
                    {`
                        // Использование в app.js
                        import { sortElements, sortDirection } from './utils'  // privateData недоступно
                        
                        const result = sortElements([4, 8, 0], sortDirection)
                    `}
                </CodePaneJS>
            </Slide>
            <Slide>
                <H3>Экспорт отдельно от объявления</H3>
                <CodePaneJS>
                    {`
                        // файл (модуль) utils.js
                        const sortElements = (elements, direction) => {}
                        const sortDirection = 'ASC'
                        
                        export { sortElements, sortDirection }
                    `}
                </CodePaneJS>
                <CodePaneJS>
                    {`
                        // Использование в app.js
                        import { sortElements, sortDirection } from './utils'
                    `}
                </CodePaneJS>
            </Slide>
            <Slide>
                <H3>Импорт * и Импорт "как"</H3>
                <CodePaneJS>
                    {`             
                        // если мы хотим много импортировать можно импортировать всё сразу в виде объекта
                        import * as utils from './sortUtils';
                        
                        utils.sortElements([5, 23, 2], utils.sortASC);
                        utils.sortElements([5, 23, 2], utils.sortDESC);
                    `}
                </CodePaneJS>
                <CodePaneJS>
                    {`
                        // Мы также можем использовать as, чтобы импортировать под другими именами.
                        import {years as cupYears, players as cupPlayers} from './worldCup';  
                        
                        console.log(cupYears);
                        ...
                        const years = 100;         
                    `}
                </CodePaneJS>
            </Slide>
            <Slide>
                <H3>Экспорт "как"</H3>
                <CodePaneJS>
                    {`
                        // файл (модуль) utils.js
                        const otherMethod = () => {}
                        const otherProp = 123
                        
                        export const { otherMethod as fetchUsers, otherProp as LIMIT }
                    `}
                </CodePaneJS>
                <CodePaneJS>
                    {`
                        // Использование в app.js
                        import { fetchUsers, LIMIT } from './utils'
                        
                        fetchUsers(LIMIT)
                    `}
                </CodePaneJS>
            </Slide>
            <Slide>
                <H3>Экспорт по умолчанию</H3>
                <CodePaneJS>
                    {`
                        // файл (модуль) utils.js
                        export default class User {
                            constructor(name) {
                                this.name = name;
                            }
                        }
                    `}
                </CodePaneJS>
                <CodePaneJS>
                    {`
                        // Использование в app.js
                        import User from './utils';
                        const joeBlack = new User('Joe');

                        // Можно дать другое название
                        import UserItem from './utils';
                        const joeBlack = new UserItem('Joe');
                    `}
                </CodePaneJS>
            </Slide>
            <SlideUsefulLinks theme="JS Модули (ES6)">
                <Link href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Modules">JS Модули ES6. Документация</Link>
                <Link href="https://learn.javascript.ru/import-export">JS Модули ES6. Экспорт и импорт</Link>
            </SlideUsefulLinks>
            <SlideQuestions />
        </>
    )
}

export default LocalStorages;
