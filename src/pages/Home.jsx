import { MoviesList } from 'components/MoviesList'
import { PopularToday } from 'FakeAPI'
import React, { useEffect, useState } from 'react'
//loader, error 
export const Home = () => {
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
