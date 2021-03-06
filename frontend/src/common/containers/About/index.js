import React, { Component } from "react";
import Helmet from "react-helmet";
import we from "./we.jpg";
import { Img } from "src/common/components/Img";

export default class About extends Component {
  render() {
    return (
      <div>
        <h1>О нас</h1>
        <Helmet title="О нас" />
        <h3>Команда (молодости нашей)</h3>
        <p>Нас тут двое (Андрей и Лина). Мы любим ввязываться в сотню авантюр и ещё любим котиков (=^.^=).</p>
        <p>
          После путешествия в Исландию в 2016, мы решили, что пора нам завести свой блог. После 156-го вопроса о нашей поездке, мы укрепились в этой мысли. И понеслась.
        </p>
        <Img src={we} alt="Here we are, in ridiculous pose" />

        <h3>Что мы тут делаем (кроме того, что плюшками балуемся)</h3>
        <p>
          Тут мы отпускаем в вольное плавание по просторам интернета наши отчеты о поездках, делимся фотографиями, даем советы, от которых бы не отказались сами до поездки.
        </p>

        <h3>Распределение обязанностей</h3>
        <h4>Андрей - блого-созидатель:</h4>
        <ul>
          <li>Работает программистом в рабочее и <a href="https://github.com/RIP21">свободное от работы время</a></li>
          <li>
            Написал этот блог. Если верстка хромает, или вы хотите новую фичу (напрмер
            {" "}
            <a href="http://button.dekel.ru/">кнопку, которая сделает все хорошо</a>
            ) - пишите ему
          </li>
          <li>Частично делает и обрабатывает фотографии</li>
          <li>Играет на гитаре и аккордеоне (которого, на радость соседям, у нас нет)</li>
          <li>Моет посуду в посудомойке</li>
          <li>Поёт (партию Онегина и <a href="https://www.youtube.com/watch?v=A1jXICD1wWk">The Queen</a>, например)</li>
          <li>Болеет за команду Ферарри на Формуле1</li>
        </ul>

        <h4>Лина - идейный вдохновитель:</h4>
        <ul>
          <li>Работает системным аналитиком в рабочее время</li>
          <li>
            В свободное от работы время - едет на работу. А ещё, учит языки и пытается 4-ый раз пройти курс по моделям и методам оценки финансовых активов на Coursera
          </li>
          <li>
            Пишет статьи, в которых странно шутит. Если вы хотите хороших умных шуток - скачайте
            {" "}
            <a href="http://xkcd.ru/1174/">полную версию нашего приложения, без рекламы, с единорожками</a>
            {" "}
          </li>
          <li>Частично делает и обрабатывает <a href="https://www.instagram.com/li_oliin/">фотографии</a></li>
          <li>Раскладывает все вещи по местам и клеит на них стикеры</li>
          <li><a href="https://www.strava.com/athletes/6249492">Бегает</a>. Чуть быстрее, чем коала.</li>
          <li>Играет в Что?Где?Когда?</li>
        </ul>

        <p>
          А что за название странное? Долго мы о нем не думали, оно к нам влетело стремительно и покорило нас своей нелепостью. Олейник и Лось? Очевидно же, "ОЛОЛОСЬ"!
        </p>
        <p>
          В общем, берите печенек, устраивайтесь поудобнее, и добро пожаловать в наш красочный отфотошопленный мир =)
        </p>
      </div>
    );
  }
}
