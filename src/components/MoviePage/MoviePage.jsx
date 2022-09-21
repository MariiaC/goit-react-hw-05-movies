import { useState, useEffect } from 'react';
import { useSearchParams } from "react";
import Api from '../../services/Api';
import Loader from '../Loader/Loaer';
import EditorList from '../EditorList/EditorList';


const MoviePage = () => {
    const [searchFilms, setSearchFilms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams({});
    const queryMovie = searchParams.get('query');


    //при сабміті
    const handleSubmit = event => {
        event.preventDefault();
        setSearchParams({ query: event.target.elements.query.value.toLowerCase() });
    };
  
    //прописуємо юзефект
    useEffect(() => {
        if (queryMovie) {
            const onSearchMovie = async () => {
                setLoading(true);
                try {
                    const searchMovie = await Api.fetchSearchByKeyword(queryMovie);
                    setSearchFilms(searchMovie);
                } catch (error) {
                    console.log(error);
                } finally {
                    setLoading(false);
                }
            }
            onSearchMovie();
        }
    }, [queryMovie]);


    //ретьорн
    return (
        <main>
            <form onSubmit={handleSubmit}>
                <input type="text" name="query" autoFocus />
                <button type="submit">Search</button>
            </form>
            {loading && <Loader />}
            {searchFilms && <EditorList films={searchFilms} />}
        </main>
    );
};

export default MoviePage;