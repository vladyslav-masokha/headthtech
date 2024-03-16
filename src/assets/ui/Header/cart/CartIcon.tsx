import { ShoppingCart as ShoppingCartIcon } from '@mui/icons-material/'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../../../redux/store'
import styles from '../Navigation/Navigation.module.scss'

const CartIcon = () => {
	const totalQuantity = useSelector(
		(state: RootState) => state.cart.totalQuantity
	)

	return (
		<Link to='/cart' className={styles.cartIcon}>
			<ShoppingCartIcon />
			<div>
				<span className={styles.goodsCount}>{totalQuantity}</span>
			</div>
		</Link>
	)
}

export { CartIcon }
