import * as React from 'react'
import accountImg from 'Assets/images/account.png';

export const Layout = () => {
    return (
        <div className="container">
            <header className="header">
                <div className="header__logo">Web Polygon</div>
                <div className="header__account">
                    <img src={accountImg} alt="" width="50" height="50" />
                </div>
            </header>
            <nav className="nav">
                <ul className="menu">
                    <li className="menu__item">Main</li>
                    <li className="menu__item">ToDo</li>
                    <li className="menu__item">Finance</li>
                    <li className="menu__item">Galery</li>
                    <li className="menu__item">Chat</li>
                </ul>
            </nav>
            <main className="main">
                <div className="card news">
                    <div className="card-header">Новости</div>
                    <div className="card-body news-body">
                        <div className="news__list">
                            <div className="news__item">New1</div>
                            <div className="news__item">new2</div>
                            <div className="news__item">new3</div>
                            <div className="news__item">new4</div>
                            <div className="news__item">new5</div>
                        </div>
                        <div className="news__content">2</div>
                    </div>
                </div>
                <div className="card quotes">
                    <div className="card-header">Котировки</div>
                    <div className="card-body quotes-body">
                        <div className="quotes-body__commods">
                            <span className="quotes-body__header">Currency and commodities</span>
                            <div className="quotes-body__content">1</div>
                        </div>
                        <div className="quotes-body__ru-stoks">
                            <span className="quotes-body__header">Russian stoks</span>
                            <div className="quotes-body__content">2</div>
                        </div>
                        <div className="quotes-body__usa-stoks">
                            <span className="quotes-body__header">USA stoks</span>
                            <div className="quotes-body__content">3</div>
                        </div>
                    </div>
                </div>
                <div className="card afisha">
                    <div className="card-header">Афиша</div>
                    <div className="card-body">

                    </div>
                </div>
            </main>
        </div>
    )
}