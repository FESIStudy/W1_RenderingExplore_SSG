import { Suspense } from "react";

async function fetchStaticData() {
  const res = await fetch(
    "https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Seoul",
    {
      next: { revalidate: 10 },
    }
  );
  return res.json();
}

export default async function SSG() {
  const data = await fetchStaticData();

  return (
    <div>
      <h1>Static site generation Page (SSG)</h1>
      <Suspense fallback={<div>Loading...</div>}>{data.dateTime}</Suspense>
    </div>
  );
}
