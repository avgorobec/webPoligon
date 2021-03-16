import * as React from 'react'
import accountImg from 'Assets/images/account.png'
import { Main } from 'App/containers/Main'
import { ToDo } from 'App/containers/ToDo'
import { Finance } from 'App/containers/Finance'
import { Galery } from 'App/containers/Galery'
import { Chat } from 'App/containers/Chat'
import { Link, Redirect, Route, Switch } from 'react-router-dom'

export const Layout = () => {
    return (
        <div className="container">
            <header className="header">
                <Link to="/main" className="header__logo">Web Polygon</Link>
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
                <Route path="/todo" component={ToDo} />
                <Route path="/finance" component={Finance} />
                <Route path="/galery" component={Galery} />
                <Route path="/chat" component={Chat} />
                <Redirect from="/*" to="/main" />
            </Switch>
        </div>
    )
}