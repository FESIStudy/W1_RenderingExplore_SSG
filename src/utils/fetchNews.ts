export const fetchNews = async (query: string) => {
    const apiKey = process.env.NEWS_API_KEY;
    const res = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`
    );

    if (!res.ok) {
        throw new Error('Failed to fetch news');
    }

    const data = await res.json();
    return data.articles;
};