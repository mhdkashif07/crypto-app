import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//we have to take the api headers into the const first
const cryptoApiHeaders = {
  //'X-RapidAPI-Host': RAPIDAPI_HOST,
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  "X-RapidAPI-Key": "b1d57f69b3mshadfcecfc9e489a6p14b18cjsn87ec366e56b2",

  //'X-RapidAPI-Key': 'coinranking259ad607b180ab70c498f843e78739dbdfa4a9158c6361a9',
};

//take the url in const
const baseUrl = "https://coinranking1.p.rapidapi.com";

//create the complete url
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

//we have to create the api
export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),

  //we will make the end points we can make more than one end points
  endpoints: (builder) => ({
    // if we just make a request with /exchanges then we need to pass the headers also thats why we create a const above name createRequest in which we give url and headers
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),

    //end point to get coin details
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),

    //end point to get the history details of the coin
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) =>
        createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
    }),

    //Note: To access this endpoint you need premium plan 
    //end point to get all exchanges details
    // getCryptoExchanges: builder.query({
    //   query: () => createRequest("/exchanges"),
    // }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
 // useGetCryptoExchangesQuery,
} = cryptoApi;

// var options = {
//   method: "GET",
//   url: "https://coinranking1.p.rapidapi.com/exchanges",
//   headers: {
//     "x-rapidapi-host": "coinranking1.p.rapidapi.com",
//     "x-rapidapi-key": "undefined",
//   },
// };
