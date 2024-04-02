import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'
import productsReducer from './slices/productsSlice'
import filteredProductsReducer from './slices/filteredProductsSlice'
import userReducer from './slices/userSlice';
import authReducer from './slices/authSlice';

const store = configureStore({
	reducer: {
		cart: cartReducer,
		products: productsReducer,
		filteredProducts: filteredProductsReducer,
		user: userReducer,
		auth: authReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export { store }
