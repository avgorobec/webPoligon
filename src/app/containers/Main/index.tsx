import * as React from 'react';
import { NewsList } from 'App/components/News/NewsList';
import { makeObservable, action, observable, runInAction, computed } from 'mobx'
import { newModel, newsList } from 'App/models'

class News {
    news: Array<newModel> = [];
    selectedIdNews: number | null = null;

    constructor() {
        makeObservable(this, {
            news: observable,
            selectNews: action,
            getNews: action,
            chooseNews: computed,
        })
    }

    getNews() {
        fetch('http://newsapi.org/v2/top-headlines?country=ru&apiKey=2bbd19e763524eedb1cf7c824c356504')
            .then((response: Response) => response.json())
            .then((data: newsList) => {
                runInAction(() => this.news = data.articles)                
            })
    }

    selectNews(id: number) {
        runInAction(() => this.selectedIdNews = id)        
    }

    get chooseNews() {
        return this.news.find((item: newModel, index: number) => index === this.selectedIdNews && item)
    }
}
const NewsStore = new News();

export const Main = () => {
    // console.log(NewsStore);
    
    return (
        <main className="main">
            <div className="card news">
                <div className="card-header">Новости</div>
                <div className="card-body news-body">
                    <div className="news__list">
                        <NewsList store={NewsStore} />
                    </div>
                    <div className="news__content">{NewsStore.selectedIdNews}</div>
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