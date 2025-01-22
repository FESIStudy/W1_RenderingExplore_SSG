import React from 'react';
import { Article } from '@/types/article';

type ArticleCardProps = {
    article: Article;
};

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => (
    <div style={{ marginBottom: '20px' }}>
        <h2>{article.title}</h2>
        <p>{article.description}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer">
            Read more
        </a>
    </div>
);

export default ArticleCard;