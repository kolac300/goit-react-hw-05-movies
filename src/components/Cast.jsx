import { getCredits } from 'API'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useParams } from 'react-router-dom'
import { StyledDiv } from './MoviesList.styled'

const Cast = () => {
	const [cast, setCast] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	const { id } = useParams()
	useEffect(() => {
		setIsLoading(true)
		getCredits(id).then(data => {
			setCast(data.cast)
		}).catch(er => toast.error(`something is wrong, try again`))
			.finally(() => setIsLoading(false))
	}, [id])
	return (
		<StyledDiv>{isLoading ? <div>Loading...</div> :
			cast.map(actor => <li key={actor.credit_id}>
				<img src={`https://www.themoviedb.org/t/p/w138_and_h175_face${actor.profile_path || '/uqqgAdPfi1TmG3tfKfhsf20fHE6.jpg'}`} alt="img" /><br />
				name : {actor.name} <br />
				character : {actor.character}<br />
				gender: {actor.gender === 1 ? "male" : "famale"}<br />
				popularity: {actor.popularity}
			</li>)
		}</StyledDiv>
	)
}
export default Cast

