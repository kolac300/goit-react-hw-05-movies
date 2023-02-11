import { MoviesList } from 'components/MoviesList'
import { SearchBar } from 'components/SearchBar'
import { SearchMovies } from 'FakeAPI'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
export const Movies = () => {
	// const location = useLocation()
	const [searchParams] = useSearchParams()
	const query = searchParams.get('q')
	const [search, setSearch] = useState(query || '')
	const [movies, setMovies] = useState([])
	useEffect(() => {
		if (search.trim() !== "")
			SearchMovies(search).then(movies => {
				setMovies(movies.results)
			})
	}, [search])

	const onSearchChange = e => {
		setSearch(e.target.value)
	}
	return (
		<>
			<SearchBar onSearchChange={onSearchChange} search={search} />
			<MoviesList movies={movies} />
		</>
	)
}
