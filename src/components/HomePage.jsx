import { Grid } from '@mui/material';
import React from 'react';
import { Title } from './index'
import millify from 'millify';

import { useGetCryptosQuery } from '../services/cryptoApi';

const HomePage = () => {
    const { data, isFetching } = useGetCryptosQuery();
    const globalStats = data?.data?.stats;
    

    if(isFetching) return <h2>Loading....</h2>

    console.log(data);
    return (
        <div className="home__section">
            <Title text="Global Crypto Stats"/>
            <div className="global__stats">
                <Grid container spacing={5}>
                    <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
                        <h4>Total Cryptocurrencies</h4>
                        <h3>{globalStats.total}</h3>
                    </Grid>
                    <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
                        <h4>Total Exchanges</h4>
                        <h3>{millify(globalStats.exchanges)}</h3>
                    </Grid>
                    <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
                        <h4>Total Market Cap</h4>
                        <h3>{millify(globalStats.totalMarketCap)}</h3>
                    </Grid>
                    <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
                        <h4>Total 24h Volume</h4>
                        <h3>{millify(globalStats.total24hVolume)}</h3>
                    </Grid>
                    <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
                        <h4>Total Markets</h4>
                        <h3>{millify(globalStats.totalMarkets)}</h3>
                    </Grid>
                    {/* <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
                        <h4>Total Cryptocurrencies</h4>
                        <h3>12,194</h3>
                    </Grid> */}
                </Grid>
            </div>
        </div>
    )
}

export default HomePage
