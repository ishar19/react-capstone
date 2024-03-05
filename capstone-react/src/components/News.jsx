import { useEffect, useState } from "react";

export default function News() {
  const [news, setNews] = useState(null);
  // useEffect(() => {
  //   fetch(
  //     "https://api.worldnewsapi.com/search-news?text=cricket&language=en&api-key=e4504c2b21f6411f8ad0697d9ff579fe"
  //   )
  //     .then((data) => data.json())
  //     .then((data) => setNews(data))
  //     .catch((error) => console.log(error));
  // }, []);
  console.log(news);
  return (
    <div style={{ marginTop: "20px", border: "2px solid black" }}>
      <p>News</p>
      {news ? <img width={200} height={200} src={news.news[0].image} /> : <></>}
      {news ? <h1>{news.news[0].title}</h1> : <></>}
      {news ? <p>{news.news[0].text.slice(0, 500)}...</p> : <></>}
    </div>
  );
}
