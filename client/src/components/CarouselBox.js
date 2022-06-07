import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { SHOP_ROUTE } from '../utils/const'

function CarouselBox() {
	return (
		<Container>
			<Carousel variant='dark' className='mt-3'>
				<Carousel.Item>
					<div class='slider'>
						<img className='d-block w-100' src='/img/one.png' alt='slider' />
						<Link to={SHOP_ROUTE}>
							<button class='but'>В КАТАЛОГ</button>
						</Link>
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<div class='slider'>
						<img className='d-block w-100' src='/img/two.png' alt='sslider' />
						<Link to={SHOP_ROUTE}>
							<button class='but'>В КАТАЛОГ</button>
						</Link>
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<div class='slider'>
						<img className='d-block w-100' src='/img/three.png' alt='slider' />
						<Link to={SHOP_ROUTE}>
							<button class='but'>В КАТАЛОГ</button>
						</Link>
					</div>
				</Carousel.Item>
			</Carousel>
		</Container>
	)
}

export default CarouselBox
