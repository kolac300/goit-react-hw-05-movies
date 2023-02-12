import { Suspense } from "react";
import { getDetails } from 'API'
import React, { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast';

const MovieDetails = () => {
	const [overwiev, setoverwiev] = useState()
	const [poster, setPoster] = useState()
	const [isLoading, setIsLoading] = useState(false)
	const { id } = useParams()

	useEffect(() => {
		setIsLoading(true)
		getDetails(id)
			.then(moviesInfo => {
				setoverwiev(moviesInfo.overview)
				setPoster(moviesInfo.poster_path)
			})
			.catch(er => toast.error(`something is wrong, try again`))
			.finally(() => setIsLoading(false))
	}, [id])

	const location = useLocation()
	const backRef = location.state?.from ?? '/'

	return (
		<div> {isLoading ? <div>Loading...</div> : <>
			<NavLink to={backRef}>Go back</NavLink>
			<div>
				{<img src={`https://www.themoviedb.org/t/p/w300${poster || '/uqqgAdPfi1TmG3tfKfhsf20fHE6.jpg'}`} alt="img" />}
				<h1>overwiev</h1>
				<p>{overwiev}</p>
			</div>
			<div><NavLink to='cast' state={{ from: backRef }}>cast</NavLink></div>
			<div><NavLink to='reviews' state={{ from: backRef }}>reviews</NavLink></div>
			<Suspense fallback={<div>Loading...</div>}>
				<Outlet />
			</Suspense>
		</>}

		</div>

	)
}
export default MovieDetails