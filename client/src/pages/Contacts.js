import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { YMaps, Map, Placemark } from 'react-yandex-maps'

function Contacts() {
	const mapData = {
		center: [56.121596, 40.383054],
		zoom: 15,
	}
	const coordinates = [[56.121596, 40.383054]]
	return (
		<>
			<Container style={{ marginTop: '20px' }}>
				<p>
					<img
						style={{ marginRight: '5px' }}
						src='/img/adress.png'
						height='20'
						width='15'
						classname='d-inline-block align-top'
						alt='adress'
					/>
					Адрес: г. Владимир, ул. проспект Ленина, д.3.
				</p>
				<p>
					<img
						style={{ marginRight: '5px' }}
						src='/img/tel.png'
						height='15'
						width='15'
						classname='d-inline-block align-top'
						alt='tel'
					/>
					Телефон: <a href='tel: +79999999999'>+7 999 999 99 99</a>
				</p>
				<p>
					<img
						style={{ marginRight: '5px' }}
						src='/img/email.png'
						height='15'
						width='15'
						classname='d-inline-block align-top'
						alt='email'
					/>
					Email: <a href='mailto: Stan.Smith@inbox.ru'>Stan.Smith@inbox.ru</a>
				</p>
				<p>Соц. сети:</p>
				<p>
					<a href='https://vk.com/nfilatov98'>
						<img
							style={{ marginRight: '5px', width: '5vh' }}
							src='/img/vc.png'
							classname='d-inline-block align-top'
							alt='vc'
						/>
					</a>
					<a href='https://telegram.im'>
						<img
							style={{ marginRight: '5px', width: '5vh' }}
							src='/img/tg.png'
							classname='d-inline-block align-top'
							alt='tg'
						/>
					</a>
				</p>
				<YMaps>
					<Map defaultState={mapData} width='100%' height='400px'>
						{coordinates.map(coordinate => (
							<Placemark geometry={coordinate} />
						))}
					</Map>
				</YMaps>
			</Container>
			<Container style={{ width: '500px', marginTop: '1em' }}>
				<h1 className='text-center'>Свяжитесь с нами</h1>
				<Form>
					<Form.Group controlId='formBasicEmail'>
						<Form.Label>Email</Form.Label>
						<Form.Control type='email' placeholder='Введите email' />
						<Form.Text>
							мы никогда не передадим вашу электронную почту кому-либо еще
						</Form.Text>
					</Form.Group>
					<Form.Group controlId='formBasicPassword'>
						<Form.Label>Оставьте ваш отзыв</Form.Label>
						<Form.Control as='textarea' rows='3' />
					</Form.Group>
					<Form.Group controlId='formBasicChekbox'>
						<Form.Check type='checkbox' label='Я соглашаюсь с условиями' />
					</Form.Group>
					<Button variant='primary' type='submit'>
						Отправить
					</Button>
				</Form>
			</Container>
		</>
	)
}

export default Contacts
