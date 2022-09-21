import PropTypes from 'prop-types';
import { useLocation, Link } from "react";

const EditorList = ({ films }) => {
  const location = useLocation();

  //return
  return (
    <ul>
      {films &&
        films.map(film => (
        <li key={film.id}>
        <Link to={`/movies/${film.id}`} state={{ from: location }}>
              {film.title}
        </Link>
        </li>
        ))}
    </ul>
  );
};

//props

EditorList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default EditorList;