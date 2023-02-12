import { MoviesList } from 'components/MoviesList'
import { SearchBar } from 'components/SearchBar'
import { SearchMovies } from 'API'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
const Movies = () => {

	const [searchParams, setSearchParams] = useSearchParams()
	const query = searchParams.get('q')
	const [movies, setMovies] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		if (query) {
			setIsLoading(true)
			SearchMovies(query)
				.then(movies => setMovies(movies.results))
				.catch(er => toast.error(`something is wrong, try again`))
				.finally(() => setIsLoading(false))
		}
	}, [query, setSearchParams])


	return (
		<>
			<SearchBar setSearchParams={setSearchParams} />
			{isLoading ? <div>Loading...</div> : <MoviesList movies={movies} />}
		</>
	)
}
export default Movies