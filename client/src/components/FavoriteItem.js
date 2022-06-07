import React from 'react'
import { CloseButton, Container } from 'react-bootstrap'
import FavoriteStore from '../store/FavoriteStore'
import { useNavigate } from 'react-router-dom'
import { PRODUCT_ROUTE } from '../utils/const'

const FavoriteItem = () => {
	const navigate = useNavigate()
	console.log(FavoriteStore.favorite)
	return (
		<Container>
			<div className='d-flex'>
				{FavoriteStore.favorite.map(item => (
					<div className='products'>
						<div className='product-wrapper'>
							<div key={item.id}>
								<div className='product'>
									<div className='favorite'>
										<CloseButton
											onClick={() => FavoriteStore.delFavorite(item.id)}
										/>
									</div>
									<img
										className='cu-p'
										width={133}
										height={112}
										src={'http://localhost:5000/' + item.img}
										alt='a'
										onClick={() => navigate(PRODUCT_ROUTE + '/' + item.id)}
									/>

									<p
										className='cu-p'
										onClick={() => navigate(PRODUCT_ROUTE + '/' + item.id)}
									>
										{item.name}
									</p>

									<div
										className='d-flex justify-between align-center'
										style={{
											justifyContent: 'space-between',
											marginRight: '10px',
										}}
									>
										<div className='d-flex flex-column'>
											<span>Цена:</span>
											<b>{item.price} руб.</b>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</Container>
	)
}

export default FavoriteItem
