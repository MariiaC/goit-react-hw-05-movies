import { useState, useEffect } from 'react';
import EditorList from '../EditorList/EditorList';
import Api from '../../services/Api';
import Loader from '../Loader/Loaer';


const HomePage = () => {
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(false);
    
    //прописуємо юзефект
    useEffect(() => {
        const FetchTrendingMovies = async () => {
            setLoading(true);
            try {
                const trendingMovies = await Api.fetchTrending();
                setFilms(trendingMovies);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false)
            }
        };
        FetchTrendingMovies()
    }, []);
    
    //ретьорн

    return (
        <div>
            <h1>Trending Today</h1>
            {films && <EditorList films={films} />}
            {loading && <Loader />}
        </div>
    );
};

export default HomePage;