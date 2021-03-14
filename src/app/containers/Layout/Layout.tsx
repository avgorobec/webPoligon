import * as React from 'react'
import accountImg from 'Assets/images/account.png'
import { Main } from 'App/containers/Main/Main';
import { Link, Route, Switch } from 'react-router-dom';

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
                    <Link to="/main" className="menu__item">Main</Link>
                    <Link to="/todo" className="menu__item">ToDo</Link>
                    <Link to="/finance" className="menu__item">Finance</Link>
                    <Link to="/galery" className="menu__item">Galery</Link>
                    <Link to="/chat" className="menu__item">Chat</Link>
                </ul>
            </nav>
            <Switch>
                <Route path="/main" component={Main} />
                <Route path="/todo" component={Main} />
            </Switch>
        </div>
    )
}