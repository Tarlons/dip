import React from 'react'
import cart from '../store/CartStore'
import CartItem from '../components/CartItem'

function Cart({ onClose }) {
	return (
		<div className='clear'>
			<div className='overlay'>
				<div className='drawer'>
					<h2 className='d-flex justify-between'>
						Корзина
						<img
							onClick={onClose}
							className='cu-p'
							src='/img/btn-remove.svg'
							alt='close'
						/>
					</h2>
					{cart.cart.length > 0 ? (
						<CartItem />
					) : (
						<div className='cartEmpty d-flex align-center justify-center flex-column flex'>
							<img
								className='mb-20'
								width='120px'
								height='120px'
								src='/img/empty.png'
								alt='Empty'
							/>
							<h2>Корзина пустая</h2>
							<p className='opacity-6'>
								Добавьте хотя бы один товар, чтобы сделать заказ.
							</p>
							<button onClick={onClose} className='greenButton'>
								<img src='/img/arrow.svg' alt='Arrow' />
								Вернуться назад
							</button>
						</div>
					)}
					{cart.cart.length > 0 ? (
						<div className='cartTotalBlock'>
							<ul>
								<li>
									<span>Итого:</span>
									<div></div>
									<b>{cart.price} руб.</b>
								</li>
							</ul>
							<a href='/pay'>
								<button className='greenButton'>
									Оформить заказ <img src='/img/arrow.svg' alt='arrow' />
								</button>
							</a>
						</div>
					) : null}
				</div>
			</div>
		</div>
	)
}

export default Cart
