import { useParams } from 'react-router-dom'
import { useTitleLogic } from '../../globalLogic/titleLogic'
import { Product } from '../../types'
import { Header } from '../../ui/Header/Header'
import { Footer } from '../../ui/footer/Footer'
import styles from './AnimalPage.module.scss'

import { useSelector } from 'react-redux'
import { formatCurrency } from '../../components/formatCurrency/formatCurrency'
import { RootState } from '../../redux/store'

const ProductPage = () => {
	const { id } = useParams<{ id: string }>()

	const data: Product[] = useSelector(
		(state: RootState) => state.products.items
	)
	const product = data.find(product => product.id === +id)

	useTitleLogic({ namePage: product ? product.title : '', id: +id })

	return (
		<>
			<Header />

			<div className={styles.productPage}>
				<div className='wrapper'>
					{product ? (
						<div className={styles.product}>
							<img
								className={styles.cardImage}
								src={product.image}
								alt={product.title}
								loading='lazy'
							/>

							<div className={styles.productInfo}>
								<h3 className={styles.title}>{product.title}</h3>
								<p>Категорія: {product.category}</p>
								<p>Ціна: {formatCurrency(product.price)}</p>

								<div className={styles.productAbout}>
									<h3>Опис</h3>
									<ul className={styles.description}>
										{product.description !== '' ? (
											product.description
												.split('\n')
												.map((feature, index) => (
													<li key={index}>{feature.trim()}</li>
												))
										) : (
											<li>Скоро добавимо!</li>
										)}
									</ul>

									<h3>Характеристики</h3>
									<ul className={styles.features}>
										{product.features !== '' ? (
											product.features
												.split('\n')
												.map((feature, index) => (
													<li key={index}>{feature.trim()}</li>
												))
										) : (
											<li>Скоро добавимо!</li>
										)}
									</ul>
								</div>
							</div>
						</div>
					) : (
						<p className={styles.notAnimal}>
							Товар з id <b>{id}</b> не знайдена
						</p>
					)}
				</div>
			</div>

			<Footer />
		</>
	)
}

export { ProductPage }
