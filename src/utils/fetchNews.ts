export const fetchNews = async (query: string) => {
    const apiKey = process.env.NEXT_NEWS_API_KEY;
    const res = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`
    );

    if (!res.ok) {
        throw new Error('아 짜증나 에러 닥쳐어어');
    }

    const data = await res.json();
    return data.articles;
};