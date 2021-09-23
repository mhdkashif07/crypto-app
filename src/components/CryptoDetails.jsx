import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import HTMLReactParser from 'html-react-parser';
import millify from 'millify';
import { Col, Row, Typography, Select } from 'antd';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';

import { useGetCryptoDetailsQuery } from '../services/cryptoApi';

const CryptoDetails = () => {
    const { coinId } = useParams();
    const [timePeriod, setTimePeriod] = useState('7d');
    const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
    console.log(data);
    return (
        <div className="details__section">
            <h2>Crypto Details {coinId}</h2>
            <div className="coin__container">
                <div className="coin__title">
                    <h2>Bitcoin (bitcoin-btc) Price</h2>
                    <p>Bitcoin live price in US Dollar (USD). View value statistics, market cap and supply.</p>
                </div>
            </div>
        </div>
    )
}

export default CryptoDetails
