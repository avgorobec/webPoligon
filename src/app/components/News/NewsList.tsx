import * as React from 'react';
import { observer } from 'mobx-react'
import { useEffect } from 'react';
import { newModel } from 'App/models';

export const NewsList = observer((props: any) => {
    useEffect(() => {
        props.store.getNews()
    }, [])

    const handleClick = (e: any) => {
        // console.log(e.currentTarget.dataset.id);
        props.store.selectNews(e.currentTarget.dataset.id);
    }

    useEffect(() => {
        console.log(props.store);
        
    }, props.store)

    return (
        <>
            {props.store.news.map((item: newModel, id: number) => (
                <div key={id} className="news__item" data-id={id} onClick={handleClick}>
                    {item.title}
                </div>))}
        </>
    )
})