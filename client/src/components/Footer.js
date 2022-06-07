function Footer() {
	return (
		<div className='main-footer'>
			<div className='container'>
				<div className='row'>
					<div className='col'>
						<h4>Где нас найти:</h4>
						<ul className='list-unstyled'>
							<li>
								<img
									style={{ marginRight: '5px' }}
									src='/img/adress.png'
									height='20'
									width='15'
									classname='d-inline-block align-top'
									alt='adress'
								/>
								Адрес: г. Владимир, ул. проспект Ленина, д.3.
							</li>
							<li>
								<img
									style={{ marginRight: '5px' }}
									src='/img/tel.png'
									height='15'
									width='15'
									classname='d-inline-block align-top'
									alt='tel'
								/>
								Телефон: <a href='tel: +79999999999'>+7 999 999 99 99</a>
							</li>
							<li>
								<img
									style={{ marginRight: '5px' }}
									src='/img/email.png'
									height='15'
									width='15'
									classname='d-inline-block align-top'
									alt='email'
								/>
								Email:{' '}
								<a href='mailto: Stan.Smith@inbox.ru'>Stan.Smith@inbox.ru</a>
							</li>
						</ul>
					</div>
					<div className='col'>
						<h4>Соц. сети:</h4>
						<ul className='list-unstyled'>
							<li>
								<a href='https://vk.com/nfilatov98'>
									<img
										style={{ marginRight: '5px', width: '3vh' }}
										src='/img/vc.png'
										classname='d-inline-block align-top'
										alt='vc'
									/>
								</a>
								<a href='https://telegram.im'>
									<img
										style={{ marginRight: '5px', width: '3vh' }}
										src='/img/tg.png'
										classname='d-inline-block align-top'
										alt='tg'
									/>
								</a>
							</li>
						</ul>
					</div>
					<div className='col'>
						<h4>Мобильные устройства:</h4>
						<ul className='list-unstyled'>
							<li>
								<a href='https://www.apple.com/ru/app-store/'>
									<img
										style={{
											marginRight: '5px',
											marginBottom: '5px',
											width: '20vh',
										}}
										src='/img/as.png'
										classname='d-inline-block align-top'
										alt='as'
									/>
								</a>

								<a href='https://play.google.com/store?id&hl=ru&gl=US'>
									<img
										style={{
											marginRight: '5px',
											marginBottom: '5px',
											width: '20vh',
										}}
										src='/img/gp.png'
										classname='d-inline-block align-top'
										alt='gp'
									/>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<hr />
				<div className='row'>
					<p className='col-sm d-flex justify-content-center'>
						&copy;{new Date().getFullYear()} STAN SMITH | Все права защищены
					</p>
				</div>
			</div>
		</div>
	)
}
export default Footer
