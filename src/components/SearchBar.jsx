import React from 'react'

export const SearchBar = ({ onSearchChange, search }) => {
	return (
		<div>
			<input type="text" value={search} onChange={onSearchChange} />
		</div>
	)
}
