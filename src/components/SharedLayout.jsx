import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Container, Header, Link, Logo } from './SharedLayout.styled'

export const SharedLayout = () => {
	return (
		<>
			<Container>
				<Header>
					<Logo>
						<span role="img" aria-label="computer icon">
							⚡️
						</span>{" "}
						My movies
					</Logo>
					<nav>
						<Link to="/" end>
							Home
						</Link>
						<Link to="/movies">Movies</Link>
					</nav>
				</Header>
				<Suspense fallback={<div>Loading...</div>}>
					<Outlet />
				</Suspense>
			</Container>
		</>
	)
}
