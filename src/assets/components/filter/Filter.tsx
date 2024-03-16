import { Close, FilterAlt } from '@mui/icons-material'
import { useState } from 'react'
import styles from './Filter.module.scss'
import { ButtonApplyFilter } from './applyFilter/ButtonApplyFilter'
import { useFilterLogic } from './applyFilter/useFilterLogic'
import { CategoryFilter } from './category/CategoryFilter'
import { PriceFilter } from './price/PriceFilter'

const Filter = () => {
	const [openFilter, setOpenFilter] = useState(false)
	const [priceFilter, setPriceFilter] = useState<[number, number] | null>(null)
	const [categoryFilter, setCategoryFilter] = useState<string | null>(null)

	const applyFilters = useFilterLogic(priceFilter, categoryFilter)

	const openFilterFunction = () => setOpenFilter(!openFilter)
	const logicOpenFilter = openFilter
		? `${styles.filterBlock} ${styles.visible}`
		: `${styles.filterBlock}`

	return (
		<div className={styles.filter}>
			<div className={styles.filterBody}>
				<button className={styles.filterBtn} onClick={openFilterFunction}>
					<FilterAlt />
					Фільтр
				</button>

				<div className={logicOpenFilter}>
					<button className={styles.closeFilter} onClick={openFilterFunction}>
						<Close />
					</button>

					<PriceFilter
						setPriceFilter={setPriceFilter}
						applyFilters={applyFilters}
					/>
					<CategoryFilter
						setCategoryFilter={setCategoryFilter}
						applyFilters={applyFilters}
					/>

					<ButtonApplyFilter
						applyFilters={applyFilters}
						openFilterFunction={openFilterFunction}
					/>
				</div>
			</div>
		</div>
	)
}

export { Filter }
