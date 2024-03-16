import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../../types'

interface FilteredProductsState {
	items: Product[]
}

const initialState: FilteredProductsState = {
	items: [],
}

const filteredProductsSlice = createSlice({
	name: 'filteredProducts',
	initialState,
	reducers: {
		setFilteredProducts: (state, action: PayloadAction<Product[]>) => {
			state.items = action.payload
		},
	},
})

export const { setFilteredProducts } = filteredProductsSlice.actions
export default filteredProductsSlice.reducer
