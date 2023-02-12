import { MoviesList } from 'components/MoviesList'
import { PopularToday } from 'API'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
const Home = () => {
	const [movies, setMovies] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	useEffect(() => {
		setIsLoading(true)
		PopularToday()
			.then(movies => {
				setMovies(movies.results)
			}).catch(er => toast.error(`something is wrong, try again`))
			.finally(() => setIsLoading(false))
	}, [])
	return (
		<div>
			{isLoading ? <div>Loading...</div> : <MoviesList movies={movies} />}
		</div>
	)
}
export default Home