import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './CartPage.module.scss'

interface CartItem {
	id: number
	image: string
	title: string
	price: number
	quantity: number
}

interface CartState {
	items: CartItem[]
	totalQuantity: number
}

const formatCurrency = (value: number) =>
	value.toLocaleString('uk-UA', { style: 'currency', currency: 'UAH' })

const CartPage = () => {
	const [cartState, setCartState] = useState<CartState>(() => {
		const storedCart = localStorage.getItem('cart')
		return storedCart ? JSON.parse(storedCart) : { items: [], totalQuantity: 0 }
	})

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cartState))
	}, [cartState])

	const handleRemoveFromCart = (itemId: number) => {
		setCartState(prevState => {
			const updatedItems = prevState.items.filter(item => item.id !== itemId)
			const totalQuantity = updatedItems.reduce(
				(total, item) => total + item.quantity,
				0
			)
			return { items: updatedItems, totalQuantity }
		})
	}

	const handleQuantityChange = (itemId: number, newQuantity: number) => {
		setCartState(prevState => {
			const updatedItems = prevState.items.map(item =>
				item.id === itemId ? { ...item, quantity: newQuantity } : item
			)
			const totalQuantity = updatedItems.reduce(
				(total, item) => total + item.quantity,
				0
			)
			return { items: updatedItems, totalQuantity }
		})
	}

	const { items } = cartState
	const totalPrice = items.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	)

	return (
		<div className={styles.cartPage}>
			<div className='wrapper'>
				<div className={styles.cartBody}></div>
			</div>
			<h1 className={styles.cartTitle}>Кошик</h1>
			<div className={styles.cartItems}>
				{items.length > 0
					? items.map(item => (
							<div key={item.id} className={styles.cartItem}>
								<div className={styles.itemDetails}>
									<img
										src={item.image}
										alt={item.title}
										className={styles.itemImage}
									/>
									<div>
										<p>{item.title}</p>
										<p>{formatCurrency(item.price)}</p>
									</div>
								</div>
								<div className={styles.quantityControl}>
									<button
										onClick={() =>
											handleQuantityChange(item.id, item.quantity - 1)
										}
									>
										-
									</button>
									<span>{item.quantity}</span>
									<button
										onClick={() =>
											handleQuantityChange(item.id, item.quantity + 1)
										}
									>
										+
									</button>
								</div>
								<button onClick={() => handleRemoveFromCart(item.id)}>
									Remove
								</button>
							</div>
					))
					: null}
			</div>

			{!items.length ? (
				<div className={styles.emptyCart}>
					<img src='./images/cart-empty.jpg' alt='Кошик порожній' />
					<p>Кошик порожній!</p>
				</div>
			) : null}
			<p className={styles.total}>Всього: {formatCurrency(totalPrice)}</p>
			{items.length > 0 ? (
				<Link to='/order' className={styles.placeOrderBtn}>
					<button>Оформити замовлення</button>
				</Link>
			) : (
				<Link to='/' className={styles.linkToMain}>
					<button>На головну</button>
				</Link>
			)}
		</div>
	)
}

export { CartPage }
