import { GetStaticProps } from 'next';
import ArticleCard from '@/components/ArticleCard';
import { Article } from '@/types/article';
import { fetchNews } from '@/utils/fetchNews';
import React from "react";

type HomeProps = {
    articles: Article[];
};

const Home: React.FC<HomeProps> = ({ articles }) => {
    return (
        <div>
            <h1>Bitcoin News</h1>
            {articles.map((article, index) => (
                <ArticleCard key={index} article={article} />
            ))}
        </div>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const articles = await fetchNews('bitcoin');

    return {
        props: {
            articles,
        },
        revalidate: 3600,
    };
};

export default Home;