import { makeAutoObservable } from 'mobx'

class FavoriteStore {
	favorite = JSON.parse(localStorage.getItem('favorite')) || []
	length = this.favorite.length
	price = this.favorite.reduce((a, b) => a + b.quantity * b.price, 0)

	constructor() {
		makeAutoObservable(this)
	}

	addFavorite(item) {
		if (
			!this.favorite.some(el => el.id === item.id) ||
			this.favorite.length === 0
		) {
			item.quantity = 1
			this.favorite.push(item)
		} else {
			this.favorite.forEach(i => (i.id === item.id ? (i.quantity += 1) : null))
		}

		localStorage.setItem('favorite', JSON.stringify(this.favorite))
		this.length = this.favorite.length
		this.price = this.favorite.reduce((a, b) => a + b.quantity * b.price, 0)
	}
	delFavorite(id) {
		this.favorite = this.favorite.filter(item => item.id !== id)
		localStorage.setItem('favorite', JSON.stringify(this.favorite))
		this.length = this.favorite.length
		this.price = this.favorite.reduce((a, b) => a + b.quantity * b.price, 0)
	}
	addOrder() {
		localStorage.removeItem('favorite')
		this.favorite = []
		this.length = this.favorite.length
		this.price = 0
	}
}

export default new FavoriteStore()
