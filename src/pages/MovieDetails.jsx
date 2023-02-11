import { Suspense } from "react";
import { getDetails } from 'FakeAPI'
import React, { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom'

export const MovieDetails = () => {
	const [overwiev, setoverwiev] = useState()
	const [poster, setPoster] = useState()
	const { id } = useParams()
	useEffect(() => {
		getDetails(id).then(moviesInfo => {
			setoverwiev(moviesInfo.overview)
			setPoster(moviesInfo.poster_path)
		})
	}, [id])
	const location = useLocation()
	const backRef = location.state?.from ?? '/'
	return (
		<div>
			<NavLink to={backRef}>Go back</NavLink>
			<div>
				{<img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${poster}`} alt="img" />}
				<h1>overwiev</h1>
				<p>{overwiev}</p>
			</div>
			<div><NavLink to='cast' state={{ from: backRef }}>cast</NavLink></div>
			<div><NavLink to='reviews' state={{ from: backRef }}>reviews</NavLink></div>
			<Suspense fallback={<div>Loading...</div>}>
				<Outlet />
			</Suspense>
		</div>

	)
}
// map id actors (take unic string) cast_ID