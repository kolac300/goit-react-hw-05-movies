import { getReviews } from 'API'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useParams } from 'react-router-dom'

const Reviews = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [reviews, setReviews] = useState([])
	const { id } = useParams()

	useEffect(() => {
		setIsLoading(true)
		getReviews(id).then(data => {
			setReviews(data.results)
		}).catch(er => toast.error(`something is wrong, try again`))
			.finally(() => setIsLoading(false))
	}, [id])

	// { isLoading &&}
	return (<>{isLoading && reviews.length ? <ul>{reviews.map(review => <li key={review.id} >
		<h3>author : {review.author}</h3>
		<p>content : {review.content}</p>
	</li>)
	}</ul> : <h1>we have not found any reviews</h1>}</>

	)
}
export default Reviews