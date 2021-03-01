import * as React from 'React';

export const Main = () => {
    return (
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