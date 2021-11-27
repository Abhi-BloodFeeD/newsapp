import React from 'react'
import axios from './axios';
import { useState,useEffect } from 'react';
import './News.css';

const NewsBlock = ({fetchUrl,header}) => {
    const [news,setNews] = useState([]);
    useEffect(()=>{
        async function fetch(){
            const request = await axios.get(fetchUrl);
            console.log(request.data.articles);
            setNews(request.data.articles);
            return request;
        }
        fetch();
    },[fetchUrl]);

    return (
        <>
        <h1 className="header">{header}</h1>
        <div className =' news_container'>
            <div className="news_block">
                {news.map(content=>(
                    <div key={content.publishedAt}className="news">
                        <h3 className="title">{content.title.toUpperCase()}</h3>
                        <img className="news_image" src={content.urlToImage} alt={content.author}/>
                        <address className='writter'>writter - {content.author}</address>
                        <p>{content.description}</p>
                        <a href = {content.url} className="read">Read More</a>
                    </div>
                    ))}
            </div>
        </div>
        </>

    )
}

export default NewsBlock;
