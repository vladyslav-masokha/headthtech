import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'
import productsReducer from './slices/productsSlice'
import filteredProductsReducer from './slices/filteredProductsSlice'
import userReducer from './slices/userSlice';

const store = configureStore({
	reducer: {
		cart: cartReducer,
		products: productsReducer,
		filteredProducts: filteredProductsReducer,
		user: userReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export { store }
