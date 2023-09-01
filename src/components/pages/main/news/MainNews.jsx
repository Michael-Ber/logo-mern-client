import React from 'react';
import './mainNews.scss';

export const MainNews = () => {
  return (
    <aside className="main__news-comments">
        <div className="news__title aside__title">Новости</div>
        <ul className="news__list">
            <li className="news__item aside__item">
                <div className="news__header">Снижение цен на игровые площадки 
                    Jungle Gym</div>
                <div className="news__contain aside__contain">
                    <div className="news__date aside__date">
                        <span>12</span>
                        <span>авг</span>
                    </div>
                    <div className="news__filling aside__filling">
                        Уважаемые покупатели! <br/>
                        Мы рады сообщить вам о снижении 
                        цены с 27 июля на детский игровой 
                        комплекс</div>
                </div>
            </li>
            <li className="news__item aside__item">
                <div className="news__header">Поступление батутов Eclipse!</div>
                <div className="news__contain aside__contain">
                    <div className="news__date aside__date">
                        <span>19</span>
                        <span>авг</span>
                    </div>
                    <div className="news__filling aside__filling">
                        Уважаемые покупатели! <br/>
                        Мы рады сообщить вам о снижении 
                        цены с 27 июля на детский игровой 
                        комплекс</div>
                </div>
            </li>
        </ul>

        <div className="comments__title aside__title">Отзывы</div>
        <ul className="comments__list">
            <li className="comments__item aside__item">
                <div className="comments__header">
                    <span>Павел Никифоров</span>
                    <span>12.09.2015</span>
                </div>
                <div className="comments__contain aside__contain">
                    <div className="comments__date aside__date">
                        <span>”</span>
                    </div>
                    <div className="comments__filling aside__filling">
                        Ради экономии места в тренажерном 
                        зале приобрел многофункциональный 
                        силовой тренажер Life Gear. За такую 
                        небольшую стоимость и с такими 
                        возможностями, он просто не 
                        заменим.
                    </div>
                </div>
            </li>
            <li className="comments__item aside__item">
                <div className="comments__header">
                    <span>Степан Николаевич</span>
                    <span>12.09.2015</span>
                </div>
                <div className="comments__contain aside__contain">
                    <div className="comments__date aside__date">
                        <span>”</span>
                    </div>
                    <div className="comments__filling aside__filling">
                        Спасибо за прекрасный совет, 
                        велосипед всей семье понравился 
                        и цену за него достойную запросили.
                    </div>
                </div>
            </li>
            
        </ul>
    </aside>
  )
}
