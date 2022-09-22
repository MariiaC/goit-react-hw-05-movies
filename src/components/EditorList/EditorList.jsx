import PropTypes from 'prop-types';
import {Link } from "react-router-dom";

const EditorList = ({ films, state }) => {

  //return
  return (
    <ul>
      {films &&
        films.map(film => (
        <li key={film.id}>
        <Link to={`/movies/${film.id}`} state={{ from: state }}>
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