const uuid = require('uuid')
const path = require('path')
const { Product, ProductInfo } = require('../models/models')
const ApiError = require('../error/ApiError')

class ProductController {
	async create(req, res, next) {
		try {
			let { name, price, specification, brandId, typeId, info } = req.body
			const { img } = req.files
			let fileName = uuid.v4() + '.jpg'
			img.mv(path.resolve(__dirname, '..', 'static', fileName))
			const product = await Product.create({
				name,
				price,
				specification,
				brandId,
				typeId,
				img: fileName,
			})

			if (info) {
				info = JSON.parse(info)
				info.forEach(i =>
					ProductInfo.create({
						title: i.title,
						description: i.description,
						productId: product.id,
					})
				)
			}

			return res.json(product)
		} catch (e) {
			next(ApiError.badRequest(e.message))
		}
	}

		async delete(req, res, next) {
		try {
		let delprod = await Product.destroy({
      where: {
         id: req.body.id,
      }
    });
		return res.json(delprod)
		} catch (e) {
			next(ApiError.badRequest(e.message))
		}
	}

	async getAll(req, res) {
		let { brandId, typeId } = req.query
		let products
		if (!brandId && !typeId) {
			products = await Product.findAndCountAll()
		}
		if (brandId && !typeId) {
			products = await Product.findAndCountAll({
				where: { brandId },
			})
		}
		if (!brandId && typeId) {
			products = await Product.findAndCountAll({
				where: { typeId },
			})
		}
		if (brandId && typeId) {
			products = await Product.findAndCountAll({
				where: { typeId, brandId },
			})
		}
		return res.json(products)
	}

	async getOne(req, res) {
		const { id } = req.params
		const product = await Product.findOne({
			where: { id },
			include: [{ model: ProductInfo, as: 'info' }],
		})
		return res.json(product)
	}
}

module.exports = new ProductController()
