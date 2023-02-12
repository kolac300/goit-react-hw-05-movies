import { MoviesList } from 'components/MoviesList'
import { PopularToday } from 'API'
import React, { useEffect, useState } from 'react'
//loader, error 
const Home = () => {
	const [movies, setMovies] = useState([])
	useEffect(() => {
		PopularToday().then(movies => {
			setMovies(movies.results)
		})
	}, [])
	return (
		<div>
			<MoviesList movies={movies} />
		</div>
	)
}
export default Home