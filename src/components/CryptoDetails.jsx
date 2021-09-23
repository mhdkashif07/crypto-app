import React from 'react';
import { useParams } from 'react-router-dom'

const CryptoDetails = () => {
    const { coinId } = useParams();
    return (
        <div>
            <h2>Crypto Details {coinId}</h2>
        </div>
    )
}

export default CryptoDetails
