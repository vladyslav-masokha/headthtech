import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../../types'

interface CartItem extends Product {
	quantity: number
}

interface CartState {
	items: CartItem[]
	totalQuantity: number
}

const persistedCart = localStorage.getItem('cart')
export const initialState: CartState = persistedCart
	? JSON.parse(persistedCart)
	: {
			items: [],
			totalQuantity: 0,
	}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<Product>) => {
			const product = action.payload
			const existingItem = state.items.find(item => item.id === product.id)

			if (existingItem) {
				existingItem.quantity += 1
			} else {
				state.items.push({ ...product, quantity: 1 })
			}

			state.totalQuantity += 1
			localStorage.setItem('cart', JSON.stringify(state))
		},

		removeFromCart: (state, action: PayloadAction<number>) => {
			const productId = action.payload
			const existingItemIndex = state.items.findIndex(
				item => item.id === productId
			)

			if (existingItemIndex !== -1) {
				state.totalQuantity -= state.items[existingItemIndex].quantity
				state.items.splice(existingItemIndex, 1)
			}

			localStorage.setItem('cart', JSON.stringify(state))
		},

		clearCart: state => {
			state.items = []
			state.totalQuantity = 0

			localStorage.removeItem('cart')
		},
	},
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
