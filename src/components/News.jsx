import React from 'react';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const News = ({simplified}) => {
    const { data, isFetching } = useGetCryptoNewsQuery({newsCategory: 'Cryptocurrency', count: simplified ? 6 : 12});
    console.log(data);
    return (
        <div>
            <h2>News section</h2>
        </div>
    )
}

export default News
