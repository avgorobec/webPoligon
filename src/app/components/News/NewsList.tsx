import * as React from 'react';
import { observer } from 'mobx-react'
import { useEffect } from 'react';
import { newModel } from 'App/models';

export const NewsList = observer((props: any) => {
    console.log(props.store.news)

    useEffect(() => {
        props.store.getNews()
    }, [])
    
    useEffect(() => {
        console.log(props.store.news)
    }, [props.store.news])
    return (
        <>
            {props.store.news.map((item:newModel, id: number) => <div key={id} className="news__item">{item.title}</div>)}
        </>
    )
})