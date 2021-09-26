import { Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
import millify from 'millify';

const Cryptocurrencies = ({simplified}) => {
    const count = simplified ? 10 : 100
    const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = React.useState([]);
    const [searchTerm, setSearchTerm] = useState('')
    console.log(cryptos);
    console.log(searchTerm)

    useEffect(() => {
        const filterCoins = cryptoList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setCryptos(filterCoins);
        
    }, [cryptoList, searchTerm])//this useEffect will rerender whenever the values changes 

    if(isFetching) return <h2>loading...</h2>
    return (
        <>
              {!simplified && (
        <div className="search-crypto">
          <Input placeholder="Search Cryptocurrency" onChange={(e) => setSearchTerm(e.target.value.toLowerCase())} />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
            <Link key={currency.id} to={`/crypto/${currency.id}`}>
              <Card title={`${currency.rank}. ${currency.name}`} extra={<img className="crypto-image" src={currency.iconUrl} />} hoverable>
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {currency.change}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
        </>
    )
}

export default Cryptocurrencies
