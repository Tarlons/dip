import {
	ADMIN_ROUTE,
	REGISTRATION_ROUTE,
	PRODUCT_ROUTE,
	SHOP_ROUTE,
	LOGIN_ROUTE,
	MAIN_ROUTE,
	CONTACTS_ROUTE,
	ERROR_ROUTE,
	CABINET_ROUTE,
	PAY_ROUTE,
} from './utils/const'
import Admin from './pages/Admin'
import Cotalog from './pages/Cotalog'
import Main from './pages/Main'
import Contacts from './pages/Contacts'
import Cabinet from './pages/Cabinet'
import Error from './pages/Error404'
import Login from './pages/Authorization'
import Registration from './pages/Registration'
import ProductPage from './pages/ProductPage'
import Pay from './pages/Pay'

export const authRoutes = [
	{
		path: CABINET_ROUTE,
		Component: Cabinet,
	},
	{
		path: PAY_ROUTE,
		Component: Pay,
	},
]

export const adminRoutes = [
	{
		path: ADMIN_ROUTE,
		Component: Admin,
	},
]

export const publicRoutes = [
	{
		path: MAIN_ROUTE,
		Component: Main,
	},
	{
		path: CONTACTS_ROUTE,
		Component: Contacts,
	},
	{
		path: SHOP_ROUTE,
		Component: Cotalog,
	},
	{
		path: LOGIN_ROUTE,
		Component: Login,
	},
	{
		path: REGISTRATION_ROUTE,
		Component: Registration,
	},
	{
		path: PRODUCT_ROUTE + '/:id',
		Component: ProductPage,
	},
	{
		path: ERROR_ROUTE,
		Component: Error,
	},
]
