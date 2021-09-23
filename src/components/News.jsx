import React, { useState } from 'react';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import Loader from './Loader';

const News = ({simplified}) => {
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
    // const { data } = useGetCryptosQuery(100);
    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });
  
    console.log(cryptoNews);

    if (!cryptoNews?.value) return <Loader />;
    console.log("hello");
   
    return (
        <div>
            <h2>News section</h2>
        </div>
    )
}

export default News
