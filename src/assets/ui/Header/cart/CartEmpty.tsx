const CartEmpty = () => {
	return (
		<div className='text-center'>
			<img
				className='w-[300px] h-[280px] m-auto sm:h-[300px]'
				src='./images/cart-empty.jpg'
				alt='cart empty'
			/>
			<p className='text-2xl'>Кошик порожній!</p>
			<p className='text-base my-2 text-gray-500'>
				Але виправити це ніколи не пізно :)
			</p>
		</div>
	)
}

export { CartEmpty }
