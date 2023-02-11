import { nanoid } from 'nanoid'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { StyledLink, StyledDiv } from './MoviesList.styled'
// import PropTypes from 'prop-types';
export const MoviesList = ({ movies }) => {
	const location = useLocation()
	return (
		<StyledDiv>{movies.map(movie =>
			<StyledLink key={nanoid()} to={`/movies/${movie.id}`} state={{ from: location }}>
				<img src={`https://www.themoviedb.org/t/p/w138_and_h175_bestv2${movie.poster_path}`} alt="img" /> <br />
				{movie.title || movie.name} </StyledLink>
		)
		}</StyledDiv>
	)
}

// MoviesList.propTypes{
// object
// }