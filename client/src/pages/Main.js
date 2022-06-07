import { Link } from 'react-router-dom'
import { Container, Col, Row } from 'react-bootstrap'
import CarouselBox from '../components/CarouselBox'
import { SHOP_ROUTE } from '../utils/const'

function Main() {
	return (
		<div>
			<CarouselBox />
			<Container>
				<div className='main-container'>
					<div className='banners'>
						<a href={SHOP_ROUTE} className='banners__link'>
							<img
								src='/img/nike.jpg'
								alt='Banner 1'
								className='banners__img'
							/>
						</a>
						<a href={SHOP_ROUTE} className='banners__link'>
							<img
								src='/img/adidas.png'
								alt='Banner 2'
								className='banners__img'
							/>
						</a>
					</div>
				</div>
				<div className='main-container main-container-advantages'>
					<div className='advantages'>
						<div className='advantages__item'>
							<div className='advantages__icon advantages__icon_fast'>
								<img src='/img/dostavka.png' alt='dostavka' />
							</div>
							<span className='advantages__item_text'>
								Бесплатная Доставка &amp; Возврат
							</span>
						</div>
						<div className='advantages__item'>
							<div className='advantages__icon advantages__icon_money'>
								<img src='/img/vosvrat.png' alt='vozvrat' />
							</div>
							<span className='advantages__item_text'>
								100% Возврат денежных средств
							</span>
						</div>
						<div className='advantages__item'>
							<div className='advantages__icon advantages__icon_car'>
								<img src='/img/otpravka.png' alt='otpravka' />
							</div>
							<span className='advantages__item_text'>
								Быстрая отправка и доставка
							</span>
						</div>
					</div>
				</div>
			</Container>
		</div>
	)
}
export default Main
