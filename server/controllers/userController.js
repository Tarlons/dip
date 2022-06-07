const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User } = require('../models/models')
const { default: jwtDecode } = require('jwt-decode')

const generateJwt = (id, email, role) => {
	return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
		expiresIn: '24h',
	})
}

class UserController {
	async registration(req, res, next) {
		const { name, surname, email, password, role } = req.body
		if (!email || !password || !name || !surname) {
			return next(
				ApiError.badRequest('Некорректный Имя, Фамилия, email или password')
			)
		}
		const candidate = await User.findOne({ where: { email } })
		if (candidate) {
			return next(
				ApiError.badRequest('Пользователь с таким email уже существует')
			)
		}
		const hashPassword = await bcrypt.hash(password, 5)
		const user = await User.create({
			name,
			surname,
			email,
			role,
			password: hashPassword,
		})
		const token = generateJwt(user.id, user.email, user.role)
		return res.json({ token })
	}

	async login(req, res, next) {
		const { email, password } = req.body
		const user = await User.findOne({ where: { email } })
		if (!user) {
			return next(ApiError.internal('Пользователь не найден'))
		}
		let comparePassword = bcrypt.compareSync(password, user.password)
		if (!comparePassword) {
			return next(ApiError.internal('Указан неверный пароль'))
		}
		const token = generateJwt(user.id, user.email, user.role)
		return res.json({ token })
	}

	async check(req, res, next) {
		const token = generateJwt(req.user.id, req.user.email, req.user.role)
		return res.json({ token })
	}

	async getAll(req, res) {
        const users = await User.findAll()
        return res.json(users)
    }

	async getOne(req, res) {
	
		const { id } = req.params
		const user = await User.findOne({
			where: { id },
		})
		return res.json(user)

	}
}

module.exports = new UserController()