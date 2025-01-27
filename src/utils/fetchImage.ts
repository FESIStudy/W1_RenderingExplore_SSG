import { Image } from '@/types/image';

export const fetchImage = async (query: string): Promise<Image[]> => {
    const apiKey = process.env.NEXT_IMAGE_API_KEY;

    const res = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}`,
        {
            headers: {
                Authorization: `Client-ID ${apiKey}`,
            },
        }
    );

    if (!res.ok) {
        throw new Error('에러가 발생했습니다: ' + res.statusText);
    }

    const data = await res.json();
    return data.results;
};
