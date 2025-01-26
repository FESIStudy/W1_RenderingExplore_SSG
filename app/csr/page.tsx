"use client";

import { useState, useEffect } from "react";

interface DateTime {
  dateTime: string;
}

export default function CSR() {
  const [data, setData] = useState({} as DateTime);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Seoul"
      );
      const jsonData = await res.json();
      setData(jsonData);
      setLoading(false);
    }

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Client-Side Rendered Page (CSR)</h1>
      {data.dateTime}
    </div>
  );
}
