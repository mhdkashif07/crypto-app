import { Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useGetCryptosQuery } from '../services/cryptoApi';

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
        <div className="crypto__container">
            {!simplified && (
                <div className="search-crypto">
                <input type="text" placeholder="search crypto" onChange={(e) => setSearchTerm(e.target.value)} />
                
            </div>
            )}
            <div className="cards__list">
                
                <Grid container spacing={4}>
                    {cryptos?.map((crypto) => (
                         <Grid item xs={6} sm={6} md={3} lg={3} xl={3} key={crypto.id}>
                         <div className="card">
                             <div className="card__title">
                                 <div className="card__name"> <span className="card__rank">{crypto.rank}</span>.{crypto.name}</div>
                                 <div className="card__icon">icon</div>
                             </div>
                             <div className="card__details">
                                 <p className="card__price">Price</p>
                                 <p className="card__market">Market Cap:</p>
                                 <p className="card__daily">Daily Change:</p>
                             </div>
                         </div>
                     </Grid>
                    )) }
                </Grid>
            </div>
        </div>
    )
}

export default Cryptocurrencies
