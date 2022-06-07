import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { authRoutes, adminRoutes, publicRoutes } from '../routes'
import { Context } from '../index'

function AppRouter() {
	const { user } = useContext(Context)

	return (
		<Routes>
			{user.isAuth &&
				authRoutes.map(({ path, Component }) => (
					<Route key={path} path={path} element={<Component />} exact />
				))}
				{user.isAdmin &&
				adminRoutes.map(({ path, Component }) => (
					<Route key={path} path={path} element={<Component />} exact />
				))}
			{publicRoutes.map(({ path, Component }) => (
				<Route key={path} path={path} element={<Component />} exact />
			))}
		</Routes>
	)
}

export default AppRouter
