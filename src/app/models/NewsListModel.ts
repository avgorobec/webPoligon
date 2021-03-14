export interface newModel {
    author: string;
    content: string;
    description: string;
    source: {
        id: any;
        name: string;
    };
    title: string;
    url: string;
    urlToImage: string;
}

export interface newsList {
    articles: Array<newModel>;
    status: string;
    totalResult: number;
}