import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './OrderPage.module.scss'

interface FormData {
	name: string
	email: string
	address: string
}

const OrderPage = () => {
	const history = useHistory()
	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		address: '',
	})

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData(prevState => ({
			...prevState,
			[name]: value,
		}))
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setFormData({ name: '', email: '', address: '' })
		localStorage.removeItem('cart')
		history.push('/')
	}

	return (
		<form className={styles.orderForm} action='#' onSubmit={handleSubmit}>
			<label htmlFor='name'>Ім'я:</label>
			<input
				type='text'
				id='name'
				name='name'
				value={formData.name}
				onChange={handleChange}
				required
			/>

			<label htmlFor='email'>Пошта:</label>
			<input
				type='email'
				id='email'
				name='email'
				value={formData.email}
				onChange={handleChange}
				required
			/>

			<label htmlFor='address'>Адреса:</label>
			<input
				id='address'
				name='address'
				value={formData.address}
				onChange={handleChange}
				required
			></input>

			<button type='submit'>Замовити</button>
		</form>
	)
}

export { OrderPage }
