import React, { useContext, useEffect } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import TypeBar from '../components/TypeBar'
import BrandBar from '../components/BrandBar'
import ProductList from '../components/ProductList'
import { Context } from '../index'
import { fetchBrands, fetchProducts, fetchTypes } from '../http/productAPI'
import { observer } from 'mobx-react-lite'

const Cotalog = observer(() => {
	const { product } = useContext(Context)

	useEffect(() => {
		fetchTypes().then(data => product.setTypes(data))
		fetchBrands().then(data => product.setBrands(data))
		fetchProducts().then(data => product.setProducts(data.rows))
	}, [])

	useEffect(() => {
		fetchProducts(product.selectedType.id, product.selectedBrand.id).then(
			data => {
				product.setProducts(data.rows)
			}
		)
	}, [product.selectedType, product.selectedBrand])

	return (
		<Container>
			<div className='search d-flex justify-between mt-10 mr-10'>
				<div className='filter d-flex justify-between align-center'>
					<span className='arrange'>Упорядочить товары по:</span>
					<div style={{ marginRight: '150px' }}>
						<button className='buttonfilter'>Цена (Дорогие)</button>
						<button className='buttonfilter'>Цена (Дешевые)</button>
						<button className='buttonfilter'>Название (А-Я)</button>
						<button className='buttonfilter'>Название (Я-А)</button>
					</div>
				</div>
				<div className='search-block'>
					<img src='/img/search.png' alt='search' />
					<input placeholder='Поиск...' />
				</div>
			</div>
			<Row>
				<Col sm={2}>
					<TypeBar />
				</Col>
				<Col sm={10}>
					<BrandBar />
					<ProductList />
				</Col>
			</Row>
		</Container>
	)
})
export default Cotalog
