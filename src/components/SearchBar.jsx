import React from 'react'
import PropTypes from 'prop-types'
import { Field, Formik, Form } from 'formik';
import { toast } from 'react-hot-toast';

export const SearchBar = ({ setSearch }) => {

	const onSubmit = (value, ections) => {
		const { search } = value;
		if (search.trim() === '' || search.trim().length > 30) {
			toast.error('Invalid query');
		} else {
			setSearch(search)
			ections.resetForm();

		}
	};
	return (
		<Formik initialValues={{ search: "" }} onSubmit={onSubmit}>
			<Form>
				<Field type="text" name="search" />
				<button type="submit">
					Find Movies
				</button>
			</Form>
		</Formik>
	)
}
SearchBar.propTypes = {
	setSearch: PropTypes.func,
};