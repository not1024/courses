import React from 'react';
import {DeckProps, FlexBox, FullScreen, Text} from 'spectacle';

const SLIDE_TOPICS: Array<{ from: number; to: number; topic: string }> = [
    { from: 0,  to: 4, topic: 'Введение' },
    { from: 5,  to: 16, topic: 'HTTP Протокол' },
    { from: 17, to: 43, topic: 'AJAX' },
    { from: 44, to: 50, topic: 'CORS' },
    { from: 50, to: 69, topic: 'Локальные хранилища данных' },
    { from: 69, to: 79, topic: 'JS Модули (ES6)' },
];

const getTopicBySlide = (slideNumber: number): string => {
    const entry = SLIDE_TOPICS.find(({ from, to }) => slideNumber >= from && slideNumber <= to);
    return entry?.topic ?? '';
};

const COLOR_WHITE = '#fff';

const DefaultTemplate: DeckProps['template'] = ({ slideNumber }: { slideNumber: number; numberOfSlides: number}) => {
    const topic = getTopicBySlide(slideNumber);

    return (
        <FlexBox
            justifyContent="space-between"
            position="absolute"
            bottom={-16}
            left={0}
            width={1}
        >
            <FlexBox padding="0 1em">
                <FullScreen />
            </FlexBox>
            {topic && (
                <FlexBox padding="1em" justifyContent="center" color={COLOR_WHITE}>
                    <Text fontSize={18}>{topic}</Text>
                </FlexBox>
            )}
            <FlexBox padding="1em" justifyContent="center" color={COLOR_WHITE}>
                <Text fontSize={18}>#{slideNumber}</Text>
            </FlexBox>
        </FlexBox>
    )
}

export default DefaultTemplate;
