import { TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import { valueLabelFormatPrice } from '../../../globalLogic/valueLabelFormatPrice'
import styles from '../Filter.module.scss'
import { sliderStyle as Slider } from '../filterStyles/sliderStyle'

interface PriceProps {
	setPriceFilter: (priceRange: [number, number] | null) => void
	applyFilters: () => void
}

const PriceFilter: React.FC<PriceProps> = ({
	setPriceFilter,
	applyFilters,
}) => {
	const [priceRange, setPriceRange] = useState<[number, number]>([1, 245999])

	useEffect(() => applyFilters(), [priceRange, applyFilters])

	const handleAgeChange = (_event: Event, newValue: number | number[]) => {
		if (Array.isArray(newValue)) setPriceRange([newValue[0], newValue[1]])
		else setPriceRange([0, newValue])
	}

	const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement>,
		inputType: 'min' | 'max'
	) => {
		const value = +event.target.value
		if (inputType === 'min') setPriceRange([value, priceRange[1]])
		else setPriceRange([priceRange[0], value])
	}

	return (
		<div className={styles.filterPrice}>
			<h3>Ціна</h3>

			<Slider
				value={priceRange}
				onChange={handleAgeChange}
				onChangeCommitted={() => setPriceFilter(priceRange)}
				color='secondary'
				valueLabelDisplay='auto'
				valueLabelFormat={valueLabelFormatPrice}
				min={1}
				max={245999}
			/>

			<div className={styles.filterPriceInputs}>
				<TextField
					placeholder='1'
					value={priceRange[0]}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						handleInputChange(e, 'min')
					}
					type='number'
					InputProps={{ inputProps: { min: 1, max: priceRange[1] } }}
				/>
				<TextField
					placeholder='25'
					value={priceRange[1]}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						handleInputChange(e, 'max')
					}
					type='number'
					InputProps={{ inputProps: { min: priceRange[0], max: 245999 } }}
				/>
			</div>
		</div>
	)
}

export { PriceFilter }
