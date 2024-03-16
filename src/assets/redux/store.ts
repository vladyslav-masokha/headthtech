import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'
import productsReducer from './slices/productsSlice'
import filteredProductsReducer from './slices/filteredProductsSlice'

const store = configureStore({
	reducer: {
		cart: cartReducer,
		products: productsReducer,
		filteredProducts: filteredProductsReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export { store }
