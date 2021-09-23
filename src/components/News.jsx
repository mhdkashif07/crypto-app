import React, { useState } from "react";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import Loader from "./Loader";
import Avatar from '@mui/material/Avatar';
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import moment from "moment";

const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  // const { data } = useGetCryptosQuery(100);
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 12,
  });

  console.log(cryptoNews);

  if (!cryptoNews?.value) return "loading...";
  console.log("hello");

  return (
    <div className="news__section">
      <div className="news__list">
        <Grid container spacing={4}>
          {cryptoNews?.value.map((news) => (
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} key={news.id}>
              <Card className="news-card">
                <a href={news.url} target="_blank">
                  <div className="news-image-container">
                    <h3 className="news-title">{news.name}</h3>
                    <img
                      style={{ width: "100px", height: "100px" }}
                      src={news?.image?.thumbnail?.contentUrl || demoImage}
                      alt="news-img"
                      className="news__img"
                    />
                  </div>

                  <div className="discription">
                    <p>
                      {news.description > 100
                        ? `${news.description.substring(0, 100)}..........`
                        : news.description}
                    </p>
                  </div>

                  <div className="provider-container">
                      <div>
                      <Avatar  src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt=" " />
                      <h4 className="provider-name">{news.provider[0]?.name}</h4>
                      </div>
                      <h4>{moment(news.datePublished).startOf('ss').fromNow()}</h4>
                  </div>
                </a>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default News;
