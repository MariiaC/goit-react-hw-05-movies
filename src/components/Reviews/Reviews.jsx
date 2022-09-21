import { useParams } from "react";
import { useEffect, useState } from 'react';
import Api from '../../services/Api';
import Loader from '../Loader/Loaer';


const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
    
  //useEffect
  useEffect(() => {
    const onActorsInMovie = async () => {
      setLoading(true);
      try {
        const reviews = await Api.fetchReviews(movieId);
        setReviews(reviews);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    onActorsInMovie();
  }, [movieId]);
    
  //return

  return (
    <div>
      {loading && <Loader />}
      {reviews.length !== 0 && (
        <div>
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <h2>Author: {review.author}</h2>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {reviews.length === 0 && (
        <div>There are no reviews for the movie</div>
      )}
    </div>
  )
};

export default Reviews;