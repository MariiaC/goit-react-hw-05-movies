import {  useState, useEffect } from 'react';
import { useParams } from "react";
import Api  from '../../services/Api';
import Loader  from 'components/Loader/Loaer';

const Cast = () => {
    const { movieId } = useParams();
    const [actors, setActors] = useState([]);
    const [loading, setLoading] = useState(false);

    //прописуємо юзефект
    useEffect(() => {
        const onActorsInMovie = async () => {
            setLoading(true);

            try {
                const actors = await Api.fetchActors(movieId) ;
                setActors(actors);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false)
            }
        };
        onActorsInMovie();
    }, [movieId]);
   
   //ретьорнимо
   
    return (
        <div>
            {loading && <Loader />}
            <ul>
                {actors.map(actor => (
                    <li key={actor.id}>
                        <img
                            width="250px"
                            src={'https://image.tmdb.org/t/p/w500' + actor.profile_path}
                            alt={actor.original_name}
                        />
                        <p>{actor.name}</p>
                        <p>Character: {actor.character}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cast;