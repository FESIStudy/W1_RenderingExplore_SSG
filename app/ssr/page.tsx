import { Suspense } from "react";

async function fetchStaticData() {
  const res = await fetch(
    "https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Seoul",
    {
      cache: "no-store",
    }
  );
  return res.json();
}

export default async function SSR() {
  const data = await fetchStaticData();

  return (
    <div>
      <h1>Server-Side Rendered Page (SSR)</h1>
      <Suspense fallback={<div>Loading...</div>}>{data.dateTime}</Suspense>
    </div>
  );
}
