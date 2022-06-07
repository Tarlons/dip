import React from 'react'
import CartStore from '../store/CartStore'

const CartItem = () => {
	console.log(CartStore.cart)
	return (
		<div className='items'>
			<div>
				{CartStore.cart.map(item => (
					<div key={item.id}>
						<div>
							<div className='cartItem d-flex align-center mb-20 '>
								<div>
									<img
										src={'http://localhost:5000/' + item.img}
										className='cartItemImg'
										alt='immage'
									/>
								</div>
								<div className='mr-20'>
									<p className='mb-5'>{item.name}</p>
									<b>{item.price} руб.</b>
								</div>
								<div className='quantity_inner mr-5'>
									<button
										className='bt_plus'
										onClick={() => CartStore.addQuantity(item.id)}
									>
										<svg viewBox='0 0 24 24'>
											<line x1='12' y1='5' x2='12' y2='19'></line>
											<line x1='5' y1='12' x2='19' y2='12'></line>
										</svg>
									</button>
									<h4 className='quantity'>{item.quantity}</h4>
									<button
										className='bt_minus'
										onClick={() => CartStore.delQuantity(item.id)}
									>
										<svg viewBox='0 0 24 24'>
											<line x1='5' y1='12' x2='19' y2='12'></line>
										</svg>
									</button>
								</div>
								<img
									onClick={() => CartStore.delProduct(item.id)}
									className='removeBtn ml-auto'
									src='/img/btn-remove.svg'
									alt='Remove'
								/>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default CartItem
