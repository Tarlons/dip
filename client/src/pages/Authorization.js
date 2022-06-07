import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MAIN_ROUTE, REGISTRATION_ROUTE } from '../utils/const'
import { Container, Form, Button, Card } from 'react-bootstrap'
import { login } from '../http/userAPI'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'

const Authorization = observer(() => {
	const { user } = useContext(Context)
	const navigate = useNavigate()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const auth = async () => {
		try {
			let data
			data = await login(email, password)
			user.setUser(user)
			user.setIsAuth(true)
			navigate(MAIN_ROUTE)
		} catch (e) {
			alert(e.response.data.message)
		}
	}

	return (
		<Container
			className='d-flex justify-content-center align-items-center'
			style={{ height: window.innerHeight - 54 }}
		>
			<Card style={{ width: 600 }} className='p-5'>
				<h2 className='m-auto'>Авторизация</h2>
				<Form className='p-3'>
					<Form.Group controlId='formBasicEmail'>
						<Form.Label>Email</Form.Label>
						<Form.Control
							type='emaill'
							placeholder='Введите email'
							vlaue={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className='mb-3' controlId='formBasicPassword'>
						<Form.Label className='mt-3'>Password</Form.Label>
						<Form.Control
							type='password'
							placeholder='Введите password'
							vlaue={password}
							onChange={e => setPassword(e.target.value)}
						/>
					</Form.Group>
					<Form.Group
						className='mb-3'
						controlId='formBasicCheckbox'
					></Form.Group>
					<Button className='mb-3' variant='outline-success' onClick={auth}>
						Войти
					</Button>
					<div>
						Нет аккаунта? <Link to={REGISTRATION_ROUTE}>Зарегистрируйся!</Link>
					</div>
				</Form>
			</Card>
		</Container>
	)
})

export default Authorization
