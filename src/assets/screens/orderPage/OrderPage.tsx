import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { clearCart } from '../../redux/slices/cartSlice'
import { useFetchBranches } from './FetchBranches'
import { useFetchCities } from './FetchCities'
import { useFetchRegions } from './FetchRegions'
import styles from './OrderPage.module.scss'

interface Region {
	Ref: string
	Description: string
}

interface City {
	Ref: string
	Description: string
}

interface Branch {
	Ref: string
	Description: string
}

interface FormData {
	fullName: string
	email: string
	number: string
	address: string
}

const OrderPage: React.FC = () => {
	const dispatch = useDispatch()
	const history = useHistory()
	const apiKey = '04d691b0154dc51cfdd9ff6e5706d31f'
	const regions = useFetchRegions(apiKey)
	const [selectedRegion, setSelectedRegion] = useState<string>('')
	const cities = useFetchCities(apiKey, selectedRegion)
	const [selectedCity, setSelectedCity] = useState<string>('')
	const branches = useFetchBranches(apiKey, selectedCity)
	const [selectedBranch, setSelectedBranch] = useState<string>('')
	const [formData, setFormData] = useState<FormData>({
		fullName: '',
		email: '',
		number: '',
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
		setFormData({ fullName: '', email: '', number: '', address: '' })
		localStorage.removeItem('cart')
		dispatch(clearCart())
		alert('Замовлення оформлено')
		history.push('/')
	}

	return (
		<div className={styles.orderPage}>
			<div className='wrapper'>
				<div className={styles.orderBody}>
					<h2 className={styles.title}>Оформлення замовлення</h2>

					<form action='#' className={styles.orderForm} onSubmit={handleSubmit}>
						<div className={styles.orderData}>
							<h3 className={styles.subtitle}>Ваші дані</h3>
							<input
								type='text'
								placeholder="Ім'я та прізвище"
								name='fullName'
								value={formData.fullName}
								onChange={handleChange}
								required
							/>
							<input
								type='email'
								placeholder='Пошта'
								name='email'
								value={formData.email}
								onChange={handleChange}
								required
							/>
							<input
								type='tel'
								placeholder='Номер телефону'
								name='number'
								value={formData.number}
								onChange={handleChange}
								required
							/>
						</div>

						<div className={styles.orderDelivery}>
							<h3 className={styles.subtitle}>
								Доставка
								<p style={{ fontSize: '10px' }}>(NovaPost)</p>
							</h3>
							<select
								value={selectedRegion}
								onChange={e => setSelectedRegion(e.target.value)}
								required
							>
								<option value=''>Виберіть область</option>
								{regions.map((region: Region) => (
									<option key={region.Ref} value={region.Ref}>
										{region.Description}
									</option>
								))}
							</select>

							<select
								value={selectedCity}
								onChange={e => {
									setSelectedCity(e.target.value)
									setSelectedBranch('')
								}}
								disabled={!selectedRegion}
								required
							>
								<option value=''>Виберіть місто</option>
								{cities.map((city: City) => (
									<option key={city.Ref} value={city.Ref}>
										{city.Description}
									</option>
								))}
							</select>

							<select
								value={selectedBranch}
								onChange={e => setSelectedBranch(e.target.value)}
								disabled={!selectedCity}
								required
							>
								<option value=''>Виберіть відділення</option>
								{branches.map((branch: Branch) => (
									<option key={branch.Ref} value={branch.Ref}>
										{branch.Description}
									</option>
								))}
							</select>
						</div>
						<button type='submit'>Замовити</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export { OrderPage }
