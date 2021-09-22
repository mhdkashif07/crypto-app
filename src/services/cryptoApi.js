import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//we have to take the api headers into the const first
const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'de7170f84cmsh66bb3410a574859p1592b8jsn9a2eddf68f02'
};

//take the url in const
const baseUrl = "https://coinranking1.p.rapidapi.com";

//create the complete url
const createRequest = (url) => ({url, headers: cryptoApiHeaders})

//we have to create the api
export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),

  //we will make the end points we can make more than one end points
  endpoints: (builder) => ({
    // if we just make a request with /exchanges then we need to pass the headers also thats why we create a const above name createRequest in which we give url and headers
    getCryptos: builder.query({
        query: () => createRequest('/coins')
    })
  }),
});


// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCryptosQuery } = cryptoApi;


var options = {
  method: "GET",
  url: "https://coinranking1.p.rapidapi.com/exchanges",
  headers: {
    "x-rapidapi-host": "coinranking1.p.rapidapi.com",
    "x-rapidapi-key": "undefined",
  },
};
