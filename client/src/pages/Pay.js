import { Container } from 'react-bootstrap'

function Pay() {
	return (
		<>
			<Container
				style={{ padding: '60px 0', margin: '0 auto', width: '600px' }}
			>
				<div className='b-text'>
					Введите свое имя в нужные поля. Также напишите свой воображаемый номер
					карты. При нажатии на поле CCV карта перевернется.
				</div>
				<form>
					<div className='form-container'>
						<div className='personal-information'>
							<h1>Платежная информация</h1>
						</div>

						<input
							id='column-left'
							type='text'
							name='first-name'
							placeholder='Имя'
						/>
						<input
							id='column-right'
							type='text'
							name='last-name'
							placeholder='Фамилия'
						/>
						<input
							id='input-field'
							type='text'
							name='number'
							placeholder='Номер карты'
						/>
						<input
							id='column-left'
							type='text'
							name='expiry'
							placeholder='MM / ГГ'
						/>
						<input id='column-right' type='text' name='cvc' placeholder='CCV' />

						<div className='card-wrapper'></div>

						<input
							id='input-field'
							type='text'
							name='streetaddress'
							required='required'
							autocomplete='on'
							maxlength='45'
							placeholder='Улица'
						/>
						<input
							id='column-left'
							type='text'
							name='city'
							required='required'
							autocomplete='on'
							maxlength='20'
							placeholder='Город'
						/>
						<input
							id='input-field'
							type='email'
							name='email'
							required='required'
							autocomplete='on'
							maxlength='40'
							placeholder='Email'
						/>
						<input id='input-button' type='submit' value='Отправить' />
					</div>
				</form>
			</Container>
		</>
	)
}
export default Pay
