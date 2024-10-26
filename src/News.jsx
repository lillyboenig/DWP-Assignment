import { useState } from 'react';
import axios from 'axios';
import API_KEY from './config.js';
import './App.css';

const News = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchNews = async (query) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(
                `https://newsapi.org/v2/everything?domains=wsj.com&q=${query}&apiKey=${API_KEY}`
            );
            setArticles(response.data.articles);
        } catch (err) {
            setError("Failed to fetch news articles. Please try again later.");
            console.error("Error fetching news:", err);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = () => {
        fetchNews(searchTerm);
    };

    return (
        <div className="news-container">
            <h2>Search News from WSJ</h2>
            <div className="search-bar">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Enter search term"
                />
                <button onClick={handleSearch} className="search-btn">Search</button>
            </div>

            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}

            <div className="articles">
                {articles.map((article, index) => (
                    <div key={index} className="article-card">
                        <h3>{article.title}</h3>
                        <p>{article.description}</p>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                            Read more
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default News;
