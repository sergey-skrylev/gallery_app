import React from 'react';
import { Image, Accordion } from 'react-bootstrap';
import photo from './photo.jpeg'

const AboutMe = () => {
  return (
    <>
    <header>
      <h1>Сергей Скрылев</h1>
      <h3>Frontend разработчик</h3> 
    </header>
      <div className="container">
        <Image style={{ marginTop: '60px' }} height='500px' src={photo} />
        <Accordion className="block-container" defaultActiveKey="0" alwaysOpen>
          <Accordion.Item eventKey="0" >
            <Accordion.Header >Обо мне</Accordion.Header>
            <Accordion.Body >
              Я родился в городе Барнауле, и последние 10 лет живу в Санкт-Петербурге. Занимаюсь фронтенд разработкой последние полтора года. Имею высшее образование по специальности педагог-психолог, но в один момент решил оставить научную и преподавательскую деятельность и перейти в сферу IT. Моей первой работой в этой сфере была должность аналитика/модератора в компании Mail.ru. Там я выполнял большое количество различных задач, в том числе, познакомился с версткой, стилизацией, и пониманием работы сетевых протоколов. Затем я решил пойти обучаться непосредственно разработке, и поступил на стажировку в Elbrus Bootcamp. Там за 3 месяца я освоил такие технологии как React, Redux, Redux-Saga, Thunk, JS, Node JS. После успешного выпуска, мы с командой некоторое время разрабатывали приложения на фрилансе, и затем я пришел в компанию Haiku Dev, где на протяжении 6 месяцев занимался разработкой маркетплейса для крупной российской компании. Сейчас обстоятельства сложились так, что я ищу только удаленный формат работы, на своем любимом стеке JS-React-Redux. Кроме того, имею опыт разработки на TypeScript.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Мои увлечения</Accordion.Header>
            <Accordion.Body>
              В свободное время люблю заниматься музыкой - играть на гитаре и сочинять свои композиции. Из спорта предпочитаю бег, велосипед и лонгборд. Читаю литературу на английском языке - как художественную, так и техническую. Люблю выезжать на природу с семьей и друзьями.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Мои контакты</Accordion.Header>
            <Accordion.Body>
              Мои контакты:
              <br />
              8-999-219-12-59
              <br />
              sergey.s1991@yandex.ru
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};

export default AboutMe;
