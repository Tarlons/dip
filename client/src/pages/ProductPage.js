import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { fetchOneProduct } from '../http/productAPI'
import CartStore from '../store/CartStore'

function ProductPage() {
	const [product, setProduct] = useState({ info: [] })
	const { id } = useParams()
	useEffect(() => {
		fetchOneProduct(id).then(data => setProduct(data))
	}, [])

	return (
		<Container>
			<div className='kontainer'>
				<div className='left-column'>
					<img src={'http://localhost:5000/' + product.img} alt='' />
				</div>
				<div className='right-column'>
					<div className='product-description'>
						<h1>{product.name}</h1>
						<p>{product.specification}</p>
					</div>
					<div className='product-configuration'>
						<div className='config'>
							<span>
								<a href='#spec'>Характеристики товара</a>
							</span>
						</div>
					</div>
					<div className='product-price'>
						<span>{product.price} руб.</span>
						<button
							onClick={() => CartStore.addProduct(product)}
							className='cart-btn'
							style={{ border: 'none' }}
						>
							Добавить в корзину
						</button>
					</div>
				</div>
			</div>
			<div>
				{product.info.map((info, index) => (
					<ul
						id='spec'
						className='specifications'
						style={{ marginTop: '2em', marginBottom: '2em' }}
					>
						<li key={info.id}>
							<div class='left'>
								<span class='item__label'>{info.title}</span>
							</div>
							<span class='item__cor'>{info.description}</span>
						</li>
					</ul>
				))}
			</div>
		</Container>
	)
}

export default ProductPage
