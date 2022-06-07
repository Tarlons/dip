import React, { useContext } from 'react'
import { Col, CloseButton } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { PRODUCT_ROUTE } from '../utils/const'
import CartStore from '../store/CartStore'
import FavoriteStore from '../store/FavoriteStore'
import { delProduct } from '../http/productAPI'
import { Context } from '../index'

const ProductItem = ({ product }) => {
	const [isAdded, setIsAdded] = React.useState(false)
	const [isFavorite, setIsFavorite] = React.useState(false)
	const [value, setValue] = React.useState('')
	const { user } = useContext(Context)

	const onClickFavorite = () => {
		setIsFavorite(!isFavorite)
	}

	const onClickPlus = () => {
		setIsAdded(!isAdded)
	}
	const DelProduct = () => {
		delProduct()
	}

	const navigate = useNavigate()
	console.log(navigate)
	return (
		<Col md={3}>
			<div className='products'>
				<div className='product-wrapper'>
					<div className='product'>
						{!user.isAdmin ? (
							null
							):(
						<div className='close'>
							<CloseButton onClick={DelProduct} />
						</div>)}
						<div className='favorite' onClick={onClickFavorite}>
							<img
								onClick={() => FavoriteStore.addFavorite(product)}
								src={
									isFavorite ? '/img/heart-liked.svg' : '/img/heart-unliked.svg'
								}
								alt='unliked'
							/>
						</div>

						<img
							className='cu-p'
							width={133}
							height={112}
							src={'http://localhost:5000/' + product.img}
							alt='a'
							onClick={() => navigate(PRODUCT_ROUTE + '/' + product.id)}
						/>

						<p
							className='cu-p'
							onClick={() => navigate(PRODUCT_ROUTE + '/' + product.id)}
						>
							{product.name}
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
								<b>{product.price} руб.</b>
							</div>
							<div onClick={onClickPlus}>
								<img
									onClick={() => CartStore.addProduct(product)}
									src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
									className=' cu-p'
									alt='plus'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Col>
	)
}

export default ProductItem
