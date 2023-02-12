import { MoviesList } from 'components/MoviesList'
import { SearchBar } from 'components/SearchBar'
import { SearchMovies } from 'API'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
const Movies = () => {

	const [searchParams, setSearchParams] = useSearchParams()
	const query = searchParams.get('q')
	const [search, setSearch] = useState(query || '')
	const [movies, setMovies] = useState([])
	useEffect(() => {
		if (search.trim() !== "") {
			setSearchParams({ q: search })
			SearchMovies(search).then(movies => {
				setMovies(movies.results)
			})
		}
	}, [search, setSearchParams])


	return (
		<>
			<SearchBar setSearch={setSearch} />
			<MoviesList movies={movies} />
		</>
	)
}
export default Movies