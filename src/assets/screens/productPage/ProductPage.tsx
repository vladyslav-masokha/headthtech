import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Footer } from '../../components/footer/Footer'
import { formatCurrency } from '../../components/formatCurrency/formatCurrency'
import { Header } from '../../components/header/Header'
import { useTitleLogic } from '../../globalLogic/titleLogic'
import { addToCart } from '../../redux/slices/cartSlice'
import { RootState } from '../../redux/store'
import { Product } from '../../types'
import styles from './ProductPage.module.scss'

const ProductPage = () => {
	const dispatch = useDispatch()
	const { id } = useParams<{ id: string }>()

	const data: Product[] = useSelector(
		(state: RootState) => state.products.items
	)
	const product = data.find(product => product.id === +id)

	useTitleLogic({ namePage: product ? product.title : '', id: +id })

	const handleAddToCart = (product: Product) => dispatch(addToCart(product))

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

								<button
									className='addToCartBtn'
									onClick={() => handleAddToCart(product)}
								>
									Додати до кошика
								</button>

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
							Товар з id <b>{id}</b> не знайдено
						</p>
					)}
				</div>
			</div>

			<Footer />
		</>
	)
}

export { ProductPage }
