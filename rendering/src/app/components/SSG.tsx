import Card from "./Card";
import { Article } from "../types/article";

async function fetchData() {
  const res = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`);
  const { articles } = await res.json();

  return articles;
}

export async function generateStaticParams() {
  const data: Article[] = await fetchData(); // 여기서 데이터를 가져옴
  return data.map((_, index) => ({
    params: { id: String(index) }, // 각 데이터를 기반으로 생성할 URL 파라미터 설정
  }));
}

export default async function SSGPage() {
  const data: Article[] = await fetchData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative h-[800px] gap-6 p-20">
      {data.map((el, idx) => (
        <Card key={idx}>
          <Card.Title>{el.title}</Card.Title>
          <Card.Author>{el.author}</Card.Author>
          <Card.Content>{el.content}</Card.Content>
        </Card>
      ))}
    </div>
  );
}
