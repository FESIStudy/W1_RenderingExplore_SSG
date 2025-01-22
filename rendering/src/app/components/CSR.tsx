"use client";

import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Article } from "../types/article";

export default function CSRPage() {
  const [fetchData, setFetchData] = useState<Article[]>([]);
  console.log("fetchData :", fetchData);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`);
      const { articles } = await res.json();
      console.log("data :", articles);
      setFetchData(articles);
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative h-[800px] gap-6 p-20">
      {fetchData.map((el, idx) => (
        <Card key={idx}>
          <Card.Title>{el.title}</Card.Title>
          <Card.Author>{el.author}</Card.Author>
          <Card.Content>{el.content}</Card.Content>
        </Card>
      ))}
    </div>
  );
}
