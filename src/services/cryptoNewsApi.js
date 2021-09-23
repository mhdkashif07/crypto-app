import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  "x-rapidapi-key": "de7170f84cmsh66bb3410a574859p1592b8jsn9a2eddf68f02",
};

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

const baseUrl = "https://bing-news-search1.p.rapidapi.com/";


export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl}),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;

// var options = {
//     method: 'GET',
//     url: 'https://bing-news-search1.p.rapidapi.com/news/trendingtopics',
//     params: {safeSearch: 'Off', textFormat: 'Raw'},
//     headers: {
//       'x-bingapis-sdk': 'true',
//       'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
//       'x-rapidapi-key': 'de7170f84cmsh66bb3410a574859p1592b8jsn9a2eddf68f02'
//     }
//   };
