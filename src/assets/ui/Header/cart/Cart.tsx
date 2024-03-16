import { useState } from 'react'

interface CartItem {
	id: number
	name: string
	price: number
	quantity: number
}

// const CartEmpty = () => <div>Your cart is empty.</div>

const CartItem = ({ item }: { item: CartItem }) => (
	<div>
		<p>{item.name}</p>
		<p>
			{item.quantity} x ${item.price}
		</p>
	</div>
)

const Cart = ({
	clearCart,
}: {
	cart: CartItem[]
	clearCart: () => void
}) => {
	// const totalPrice = () =>
	// 	cart.reduce((acc, item) => acc + item.quantity * item.price, 0)

	const [showCart, setShowCart] = useState(true)

	const closeCartOnBg = () => {
		setShowCart(false)
	}

	const toggleClose = () => {
		setShowCart(!showCart)
	}

	return (
		<div
			onClick={closeCartOnBg}
			data-box-cart
			style={{ backgroundColor: 'rgba(107, 114, 128, 0.5)' }}
			className={`fixed left-0 top-0 right-0 bottom-0 z-1 flex flex-col items-center justify-center shadow-2xl ${
				showCart ? '' : 'hidden'
			}`}
		>
			<div className='bg-white mx-4 rounded-lg w-95 sm:w-500 sm:mx-0 md:w-700 lg:w-900'>
				<div className='flex justify-between items-center p-3 border-b'>
					<span className='text-lg sm:text-xl'>Shopping cart</span>
					<button onClick={toggleClose}>
						{/* <FontAwesomeIcon
							className='text-gray-500 hover:text-gray-600 transition'
							icon={faX}
						/> */}
					</button>
				</div>
				<>
					<div className='flex justify-end'>
						<button
							className='text-#3e77aa hover:text-red-500 transition p-2 sm:p-3'
							onClick={clearCart}
						>
							Delete All
						</button>
					</div>
					{/* <div
						className={`px-1 py-2 sm:py-4 sm:px-6 ${
							cart.length > 2 ? 'box-item' : ''
						}`}
					>
						{cart.map(item => (
							<CartItem key={item.id} item={item} />
						))}
					</div> */}
					<div className='flex justify-center pr-0 py-3 sm:py-4 sm:pr-6 sm:justify-end'>
						<div className='bg-gray-200 w-fit py-3 px-2 rounded-xl border border-gray-500 flex flex-col justify-between items-center sm:flex-row sm:py-6 sm:px-4'>
							<div className='mr-0 sm:mr-4'>
								<span className='mr-2 text-base sm:text-xl'>Order total:</span>
								<span className='text-base sm:text-xl'>$</span>
							</div>
							<button className='text-sm sm:text-lg uppercase bg-black text-white py-1 px-4 rounded hover:bg-gray-500 transition mt-1 sm:mt-0'>
								Buy Now
							</button>
						</div>
					</div>
				</>
			</div>
		</div>
	)
}

export { Cart }
