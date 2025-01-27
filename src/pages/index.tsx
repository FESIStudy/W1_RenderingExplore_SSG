import { GetStaticProps } from 'next';
import ImageCard from "@/components/ImageCard";
import ArticleCard from '@/components/ArticleCard';
import { Article } from '@/types/article';
import { Image } from '@/types/image';
import { fetchNews } from '@/utils/fetchNews';
import { fetchImage } from '@/utils/fetchImage';
import React from "react";

type HomeProps = {
    articles: Article[];
    images: Image[];
};

const Home: React.FC<HomeProps> = ({ articles, images }) => {

    return (
        <div>
            <h1>SSG SITE Bitcoin News</h1>
            {images.map((image: Image, index: number) => (
                image.urls ? <ImageCard key={index} src={image.urls.small} alt={image.alt_description || "nature"} /> : <p key={index}>No image available</p>
            ))}
            {articles.map((article, index) => (
                <ArticleCard key={index} article={article} />
            ))}
        </div>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const images = await fetchImage('nature');
    const articles = await fetchNews('bitcoin');

    return {
        props: {
            articles,
            images,
        },
        revalidate: 3600,
    };
};

export default Home;
