import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilteredProducts } from '../../../redux/slices/filteredProductsSlice'
import { RootState } from '../../../redux/store'

const useFilterLogic = (
	priceFilter: [number, number] | null,
	categoryFilter: string | null
) => {
	const dispatch = useDispatch()
	const products = useSelector((state: RootState) => state.products.items)

	const applyFilters = useCallback(() => {
		if (products.length === 0) return

		let filteredProducts = products

		if (priceFilter !== null) {
			filteredProducts = filteredProducts.filter(product => {
				return (
					product.price >= priceFilter[0] && product.price <= priceFilter[1]
				)
			})
		}

		if (categoryFilter !== null) {
			filteredProducts = filteredProducts.filter(animal => {
				return animal.category === categoryFilter
			})
		}

		dispatch(setFilteredProducts(filteredProducts))
	}, [products, dispatch, priceFilter, categoryFilter])

	return applyFilters
}

export { useFilterLogic }
