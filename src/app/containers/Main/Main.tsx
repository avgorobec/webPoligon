import * as React from 'react';
import { NewsList } from 'App/components/News/NewsList';
import { runInAction, makeObservable, action, observable } from 'mobx'

import { newModel } from 'App/models'

class News {
    news: Array<newModel> = [];

    constructor() {
        makeObservable(this, {
            news: observable,
            getNews: action
        })
    }


    getNews() {
        fetch('http://newsapi.org/v2/top-headlines?country=ru&apiKey=2bbd19e763524eedb1cf7c824c356504')
            .then(res => res.json)
            .then((news: any) => {
                console.log(news)
                if (news.status === 'ok') {
                    runInAction(() => {
                        console.log(news)
                        this.news = news.articles
                    })
                }
            })
    }
}
const NewsStore = new News();

export const Main = () => {
    return (
        <main className="main">
            <div className="card news">
                <div className="card-header">Новости</div>
                <div className="card-body news-body">
                    <div className="news__list">
                        <NewsList store={NewsStore} />
                    </div>
                    <div className="news__content">2</div>
                </div>
            </div>
            <div className="card quotes">
                <div className="card-header">Котировки</div>
                <div className="card-body quotes-body">
                    <div className="stocks">
                        <div className="stocks-header">Currency and commodities</div>
                        <div className="stocks-content">
                            <div className="stock-item">
                                <div className="stock">USD</div>
                                <div className="stock-value">74,06</div>
                            </div>
                        </div>
                    </div>
                    <div className="stocks">
                        <div className="stocks-header">Russian stoks</div>
                        <div className="stocks-content">
                            <div className="stock-item">
                                <div className="stock">USD</div>
                                <div className="stock-value">74,06</div>
                            </div>
                        </div>
                    </div>
                    <div className="stocks">
                        <div className="stocks-header">USA stoks</div>
                        <div className="stocks-content">
                            <div className="stock-item">
                                <div className="stock">USD</div>
                                <div className="stock-value">74,06</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card afisha">
                <div className="card-header">Афиша</div>
                <div className="card-body">

                </div>
            </div>
        </main>
    )
}