import React from 'react';
import './mainSearch.scss';

export const MainSearch = () => {
  return (
    <form action="#" className="slide__search">
        <label htmlFor="search" className="slide__label">
            <button className="slide__everywhere" aria-label="everywhere button">
                <span>Везде</span> 
            </button>
            <input type="text" className="slide__input" name="search" id="search"/>
        </label>
        <input type="submit" className="slide__submit" value="НАЙТИ"/>
        <div className="search__popup">
            <ul className="search__popup-list">
                <li className="search__popup-item"><a href="#" className="search__popup-link">Беговые дорожки 
                    </a></li>
                <li className="search__popup-item"><a href="#" className="search__popup-link">Эллиптические тренажеры
                    </a></li>
                <li className="search__popup-item"><a href="#" className="search__popup-link">Велотренажеры
                    </a></li>
                <li className="search__popup-item"><a href="#" className="search__popup-link">Гребные тренажеры
                    </a></li>
                <li className="search__popup-item"><a href="#" className="search__popup-link">Вибромассажеры</a></li>
                <li className="search__popup-item"><a href="#" className="search__popup-link">Теннисные столы 
                    </a></li>
                <li className="search__popup-item"><a href="#" className="search__popup-link">Баскетбольные щиты и стойки
                    </a></li>
                <li className="search__popup-item"><a href="#" className="search__popup-link">Массажные кресла
                    </a></li>
                <li className="search__popup-item"><a href="#" className="search__popup-link">Массажные столы 
                    </a></li>
                <li className="search__popup-item"><a href="#" className="search__popup-link">Силовые тренажеры</a></li>
                <li className="search__popup-item"><a href="#" className="search__popup-link">Батуты
                    </a></li>
                <li className="search__popup-item"><a href="#" className="search__popup-link">Детские городки
                    </a></li>
                <li className="search__popup-item"><a href="#" className="search__popup-link">Дачная мебель
                    </a></li>
                <li className="search__popup-item"><a href="#" className="search__popup-link">Уличные спортивные комплексы
                    </a></li>
                <li className="search__popup-item"><a href="#" className="search__popup-link">Аксессуары</a></li>
            </ul>
        </div>
    </form>
  )
}
