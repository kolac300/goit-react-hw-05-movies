import { getReviews } from 'API'
import { nanoid } from 'nanoid'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Reviews = () => {
	const [reviews, setReviews] = useState([])
	const { id } = useParams()
	useEffect(() => {
		getReviews(id).then(data => {
			setReviews(data.results)
		})
	}, [id])


	return (
		reviews.length ? <ul>{reviews.map(review => <li key={nanoid()} >
			<h3>author : {review.author}</h3>
			<p>content : {review.content}</p>
		</li>)
		}</ul> : <h1>we have not found any reviews</h1>
	)
}
export default Reviews