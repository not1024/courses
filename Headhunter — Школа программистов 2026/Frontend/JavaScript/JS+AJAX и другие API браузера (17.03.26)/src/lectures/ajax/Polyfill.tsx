import React, {FC} from 'react';
import {
    Appear,
    ListItem,
    Slide,
    UnorderedList,
    Text,
    Image,
    Link,
} from 'spectacle';
import caniuseImage from './images/caniuse.png'
import {H1, H3} from '../../components/typography';
import SlideQuestions from '../../components/SlideQuestions';
import CodePaneJS from '../../components/CodePaneJS';
import CodeExampleButton from '../../components/CodeExampleButton';
import { polyfillExample } from '../../examples/polyfill';
import CodePaneBash from '../../components/CodePaneBash';
import SlideUsefulLinks from '../../components/SlideUsefulLinks';
import CodeContainer from '../../components/CodeContainer';

const Polyfill: FC = () => {
    return (
        <>
            <Slide>
                <H1>Полифилы</H1>
                <UnorderedList>
                    <Appear><ListItem>Что это?</ListItem></Appear>
                    <Appear><ListItem>Для чего использовать?</ListItem></Appear>
                    <Appear><ListItem>Как использовать?</ListItem></Appear>
                    <Appear><ListItem>Какими они должны быть?</ListItem></Appear>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>Что это?</H3>
                <Text>Код, с помощью которого мы можем добавить в браузер функционал из спецификации <Link href="https://tc39.es/ecma262/"> JavaScript</Link></Text>
                <CodePaneJS>
                    {`
                        // если хром выше 110й версии (released 2023-02-07)
                        const items = ['apple', 'mango', 'kiwi'];
                        const reversedItems = items.toReversed();
                        console.log(reversedItems); // ['kiwi', 'mango', 'apple']

                        // если хром ниже 110й версии
                        const reversedItems = items.toReversed();
                        // Uncaught TypeError: items.toReversed is not a function
                    `}
                </CodePaneJS>
                <CodeContainer>
                    <CodeExampleButton code={polyfillExample}>Напишем свой полифил</CodeExampleButton>
                </CodeContainer>
            </Slide>
            <Slide>
                <H3>Для чего использовать?</H3>
                <UnorderedList>
                    <Appear><ListItem>JavaScript активно <Link href="https://tc39.es/#proposals" target="_blank">развивается</Link></ListItem></Appear>
                    <Appear><ListItem>Появляются новые фичи, старые могут меняться</ListItem></Appear>
                    <Appear><ListItem>Хочется использовать новые возможности сразу, при этом приложение работало стабильно</ListItem></Appear>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>Какими они должны быть?</H3>
                <UnorderedList>
                    <Appear><ListItem>Фича должна работать как описано в <Link href="https://tc39.es/ecma262/" target="_blank">спецификации</Link></ListItem></Appear>
                    <Appear><ListItem>Замена должна быть адекватной</ListItem></Appear>
                    <Appear><ListItem>Исходный код должен вызывать доверие</ListItem></Appear>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>Популярные библиотеки</H3>
                <UnorderedList>
                    <Appear><ListItem>core-js — самый популярный набор полифилов для JS</ListItem></Appear>
                    <Appear><ListItem>HTML5 Shiv — добавляет в старые браузеры поддержку HTML5 тэгов</ListItem></Appear>
                    <Appear><ListItem>es5shim — добавляет поддержку почти всех фич ECMAScript 5 в IE</ListItem></Appear>
                    <Appear><ListItem>Flexie — обеспечивает кроссбраузерную поддержку flexbox</ListItem></Appear>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>Как использовать?</H3>
                <CodePaneBash>
                    npm install --save core-js
                </CodePaneBash>
                <CodePaneJS>
                    {`
                        // можно импортировать целый набор полифилов
                        import 'core-js/actual';
                        // или только нужное
                        import 'core-js/actual/array/to-reversed';
                    `}
                </CodePaneJS>
            </Slide>
            <Slide>
                <H3>Поддержка браузерами</H3>
                <Link href="https://caniuse.com/?search=toReversed" target="_blank"><Image src={caniuseImage} width="100%" /></Link>
            </Slide>
            <SlideUsefulLinks theme="Полифилы">
                <Link href="https://caniuse.com/" target="_blank">Поддержка браузерами caniuse.com</Link>
                <Link href="https://github.com/zloirock/core-js" target="_blank">Библиотека полифилов core-js</Link>
            </SlideUsefulLinks>
            <SlideQuestions />
        </>
    )
}

export default Polyfill;
