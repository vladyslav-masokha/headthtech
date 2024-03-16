import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../../redux/slices/cartSlice'
import { RootState } from '../../redux/store'
import { Product } from '../../types'
import { formatCurrency } from '../formatCurrency/formatCurrency'
import styles from './AnimalsCard.module.scss'

const AnimalCard = () => {
	const dispatch = useDispatch()
	const filteredProducts: Product[] = useSelector(
		(state: RootState) => state.filteredProducts.items
	)

	const handleAddToCart = (product: Product) => {
		dispatch(addToCart(product))
	}

	return (
		<>
			{filteredProducts.length ? (
				filteredProducts.map(product => (
					<div className={styles.card} key={product.id}>
						<Link to={`/${product.id}`}>
							<img
								className={styles.cardImage}
								src={product.image}
								alt={product.title}
								loading='lazy'
							/>

							<div className={styles.cardInfo}>
								<h3 className={styles.title}>{product.title}</h3>
								<p className={styles.price}>{formatCurrency(product.price)}</p>
							</div>
						</Link>
						<button
							className={styles.addToCartBtn}
							onClick={() => handleAddToCart(product)}
						>
							Додати до кошика
						</button>
					</div>
				))
			) : (
				<p className={styles.notGoods}>Товари не знайдені!</p>
			)}
		</>
	)
}

export { AnimalCard }
