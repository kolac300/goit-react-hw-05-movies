import { getCredits } from 'FakeAPI'
import { nanoid } from 'nanoid'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { StyledDiv } from './MoviesList.styled'

export const Cast = () => {
	const [cast, setCast] = useState([])
	const { id } = useParams()
	useEffect(() => {
		getCredits(id).then(data => {
			setCast(data.cast)
		})
	}, [id])
	return (
		<StyledDiv>{
			cast.map(actor => <li key={nanoid()}>
				<img src={`https://www.themoviedb.org/t/p/w138_and_h175_face${actor.profile_path || '/uqqgAdPfi1TmG3tfKfhsf20fHE6.jpg'}`} alt="img" /><br />
				name : {actor.name} <br />
				character : {actor.character}<br />
				gender: {actor.gender === 1 ? "male" : "famale"}<br />
				popularity: {actor.popularity}
			</li>)
		}</StyledDiv>
	)
}

