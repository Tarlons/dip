import { Card, Container, Row, Col, Button } from 'react-bootstrap'
import FavoriteItem from '../components/FavoriteItem'
import favorite from '../store/FavoriteStore'

function Cabinet() {
	return (
		<>
			<div className='d-flex flex-row m-5 ml-5 align-items-center justify-content-center'>
				<Container>
					<Row className='d-flex justify-center'>
						<Col md={4}>
							<img
								width={300}
								height={300}
								src='/img/Avatar.png'
								alt='avatar'
							/>
						</Col>

						<Col md={4} className='d-flex flex-column m-3'>
							<Card
								className='d-flex flex-column align-items-center justify-content-around'
								style={{
									width: 300,
									height: 300,
									border: '5px solid lightgray',
								}}
							>
								<h3>Почта:user@mail.ru</h3>
								<h3>Имя: Иван </h3>
								<h3>Фамилия: Иванов</h3>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
			<Container>
				<hr />
				<h2>Избранное</h2>
			</Container>

			{favorite.favorite.length > 0 ? (
				<FavoriteItem />
			) : (
				<div className='cartEmpty d-flex align-center justify-center flex-column flex'>
					<img
						className='mb-20'
						width='70px'
						height='70px'
						src='/img/image.svg'
						alt='Empty'
					/>
					<h2>Товаров нет :(</h2>
					<p className='opacity-6'>Вы ничего не добавляли в избранное</p>
				</div>
			)}
		</>
	)
}
export default Cabinet
