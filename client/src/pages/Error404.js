import { Link } from 'react-router-dom'

function Error404() {
	return (
		<>
			<div className='error'>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					ОШИБКА-404
				</div>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					Страница не найдена
				</div>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Link to='/'>Перейти на главную страницу</Link>
				</div>
			</div>
		</>
	)
}

export default Error404
