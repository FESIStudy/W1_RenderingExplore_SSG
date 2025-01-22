"use client";

import React, { useEffect, useState } from "react";
import Card from "./Card";

type FetchData = {
  title: string;
  author: string;
  content: string;
};

export default function CardList() {
  const [fetchData, setFetchData] = useState<FetchData[]>([]);
  console.log("fetchData :", fetchData);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=18dd71fdc316451cb6d11a9b8f703ab8");
      const { articles } = await res.json();
      console.log("data :", articles);
      setFetchData(articles);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col relative h-[800px] gap-6 p-10">
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
