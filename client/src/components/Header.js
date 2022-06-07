import React, { useContext } from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import {
	ADMIN_ROUTE,
	CABINET_ROUTE,
	CONTACTS_ROUTE,
	LOGIN_ROUTE,
	MAIN_ROUTE,
	REGISTRATION_ROUTE,
	SHOP_ROUTE,
} from '../utils/const'
import { Context } from '../index'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'
import cart from '../store/CartStore'

const Header = observer(props => {
	const { user } = useContext(Context)
	const navigate = useNavigate()

	const logOut = () => {
		user.setUser({})
		user.setIsAuth(false)
		localStorage.removeItem('token')
	}

	return (
		<Navbar className='navbar' expand='lg'>
			<Container>
				<Navbar.Brand href={MAIN_ROUTE}>
					<img
						src='/img/logo.png'
						height='40'
						width='40'
						classname='d-inline-block align-top'
						alt='Logo'
					/>
				</Navbar.Brand>
				<Navbar.Brand href={MAIN_ROUTE}>STAN SMITH</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link href={SHOP_ROUTE}>Каталог</Nav.Link>
						<Nav.Link href={CONTACTS_ROUTE}>Где нас найти</Nav.Link>
					</Nav>
					{user.isAuth ? (
						<Nav className='d-flex'>
							<img
								onClick={props.onClickCart}
								className='cu-p'
								src='/img/basket.png'
								height='30'
								width='30'
								style={{ marginTop: '5px' }}
								alt='basket'
							/>
							<span
								onClick={props.onClickCart}
								className='d-flex align-center mr-10 ml-5 cu-p'
							>
								<b>{cart.price} руб.</b>
							</span>

							<a href={CABINET_ROUTE}>
								<img
									className='me-2'
									src='/img/user.png'
									height='30'
									width='30'
									style={{ marginTop: '5px' }}
									alt='user'
								/>
							</a>
							{!user.isAdmin ? (
							null
							):(<Button
								className='me-2'
								variant='outline-dark'
								onClick={() => navigate(ADMIN_ROUTE)}
							>
								Админ панель
							</Button>)}
							<Button
								className='me-2'
								variant='danger'
								onClick={() => logOut()}
							>
								Выйти
							</Button>
						</Nav>
					) : (
						<Nav className='d-flex'>
							<Button
								className='me-2'
								variant='outline-success'
								onClick={() => navigate(LOGIN_ROUTE)}
							>
								Войти
							</Button>
							<Button
								className='me-2'
								variant='danger'
								onClick={() => navigate(REGISTRATION_ROUTE)}
							>
								Регистрация
							</Button>
						</Nav>
					)}
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
})
export default Header
