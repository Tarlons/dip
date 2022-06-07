import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import { Card } from 'react-bootstrap'

const BrandBar = observer(() => {
	const { product } = useContext(Context)

	return (
		<div className='d-flex mt-20'>
			{product.brands.map(brand => (
				<Card
					key={brand.id}
					className='p-2 cu-p border-2'
					onClick={() => product.setSelectedBrand(brand)}
					border={brand.id === product.selectedBrand.id ? 'danger' : 'light'}
				>
					{brand.name}
				</Card>
			))}
		</div>
	)
})

export default BrandBar
