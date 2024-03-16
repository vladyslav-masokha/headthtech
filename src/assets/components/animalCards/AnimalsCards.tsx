import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { Product } from '../../types'
import { AnimalCard } from './AnimalCard'
import styles from './AnimalsCard.module.scss'

const AnimalsCards = () => {
	const filteredProducts: Product[] = useSelector(
		(state: RootState) => state.filteredProducts.items
	)

	return (
		<div className={styles.cards}>
			{filteredProducts.length > 0 && <AnimalCard />}
		</div>
	)
}

export { AnimalsCards }
