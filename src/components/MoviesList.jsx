import React from 'react'
import { useLocation } from 'react-router-dom'
import { StyledLink, StyledDiv } from './MoviesList.styled'
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
	const location = useLocation()
	return (
		<StyledDiv>{movies.map(movie =>
			<StyledLink key={movie.id} to={`/movies/${movie.id}`} state={{ from: location }}>
				<img src={`https://www.themoviedb.org/t/p/w138_and_h175_bestv2${movie.poster_path || '/uqqgAdPfi1TmG3tfKfhsf20fHE6.jpg'}`} alt="img" /> <br />
				{movie.title || movie.name} </StyledLink>
		)
		}</StyledDiv>
	)
}

MoviesList.propTypes = {
	movies: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			title: PropTypes.string,
			name: PropTypes.string,
		})
	).isRequired
};