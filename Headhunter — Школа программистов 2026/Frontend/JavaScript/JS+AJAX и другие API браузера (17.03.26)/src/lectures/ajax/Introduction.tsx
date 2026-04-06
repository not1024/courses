import React, {FC} from 'react';
import {
    Appear,
    FlexBox,
    Heading,
    Image,
    ListItem,
    Slide,
    SlideLayout,
    Text,
    UnorderedList,
} from 'spectacle';
import {H3} from '../../components/typography';
import avatar from './images/avatar.jpg';


const Introduction: FC = () => {
    return (
        <>
            <SlideLayout.Center>
                <Heading>JavaScript</Heading>
                <H3>AJAX и браузерные API, часть I</H3>
            </SlideLayout.Center>
            <Slide>
                <H3>Знакомство</H3>
                <FlexBox alignItems="flex-start" style={{
                    gap: 32,
                }}>
                    <div style={{ paddingTop: 32 }}>
                        <Image src={avatar} width="360" />
                    </div>
                    <UnorderedList>
                        <ListItem>Меня зовут Николай Михалаки</ListItem>
                        <Appear><ListItem>Фронтенд-разработчик (более 5 лет)</ListItem></Appear>
                        <Appear><ListItem>Развиваю работодательскую часть hh.ru</ListItem></Appear>
                        <Appear><ListItem>До фронтенда занимался нагрузочным тестированием</ListItem></Appear>
                        <Appear><ListItem>Стек: JS/TS, React, Python</ListItem></Appear>
                    </UnorderedList>
                </FlexBox>
            </Slide>
            <Slide>
                <H3>Формат лекции</H3>
                <UnorderedList>
                    <Appear><ListItem>Теория + практика по каждой теме</ListItem></Appear>
                    <Appear><ListItem>После каждой темы — вопросы (голосом или в чате)</ListItem></Appear>
                    <Appear><ListItem>Перерыв в середине — 5 минут</ListItem></Appear>
                    <Appear><ListItem>Домашнее задание — обязательное</ListItem></Appear>
                    <Appear><ListItem>Ссылки на материалы лекции и домашнее задание будут в конце презентации</ListItem></Appear>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>Темы лекции</H3>
                <Text>После лекции вы сможете делать запросы к серверу, работать с хранилищами и подключать JS-модули</Text>
                <UnorderedList>
                    <Appear><ListItem>HTTP Протокол</ListItem></Appear>
                    <Appear><ListItem>AJAX (+ CORS)</ListItem></Appear>
                    <Appear><ListItem>Локальные хранилища данных</ListItem></Appear>
                    <Appear><ListItem>Модули в JS</ListItem></Appear>
                </UnorderedList>
            </Slide>
        </>
    )
}

export default Introduction;
