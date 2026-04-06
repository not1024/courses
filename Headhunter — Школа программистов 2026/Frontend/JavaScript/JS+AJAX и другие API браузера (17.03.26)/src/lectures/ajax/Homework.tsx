import React from 'react';
import {H1} from '../../components/typography';
import {FlexBox, Link, SlideLayout} from 'spectacle';

const Homework = () => {
    return (
        <>
            <SlideLayout.Center>
                <H1>Домашнее задание</H1>
                <FlexBox><Link href="https://github.com/insbruk/hh-school-homework">GitHub</Link></FlexBox>
                <FlexBox><Link href="https://docs.google.com/forms/d/e/1FAIpQLScDNamdDDNfGYxS2OoeNLdNSjiDzuor0G73n0vk0Sz_zW1DaQ/viewform">Опрос по лекции</Link></FlexBox>
            </SlideLayout.Center>
        </>
    )
}

export default Homework
