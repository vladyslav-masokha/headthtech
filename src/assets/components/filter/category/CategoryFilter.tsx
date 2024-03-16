import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import styles from '../Filter.module.scss'
import { radioStyles } from '../filterStyles/radioStyles'

interface CategoryProps {
	setCategoryFilter: (categoryFilter: string | null) => void
	applyFilters: () => void
}

const CategoryFilter: React.FC<CategoryProps> = ({
	setCategoryFilter,
	applyFilters,
}) => {
	const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCategoryFilter(event.target.value === '' ? null : event.target.value)
		applyFilters()
	}

	return (
		<div className={styles.filterGender}>
			<h3>Категорія</h3>

			<FormControl>
				<RadioGroup
					aria-labelledby='demo-radio-buttons-group-label'
					defaultValue=''
					onChange={handleGenderChange}
					name='radio-buttons-group'
				>
					<FormControlLabel
						value='Хірургія'
						control={<Radio sx={radioStyles} />}
						label='Хірургія'
					/>
					<FormControlLabel
						value='Кардіологія'
						control={<Radio sx={radioStyles} />}
						label='Кардіологія'
					/>
					<FormControlLabel
						value='Фізіотерапія'
						control={<Radio sx={radioStyles} />}
						label='Фізіотерапія'
					/>
					<FormControlLabel
						value=''
						control={<Radio sx={radioStyles} />}
						label='Усі'
					/>
				</RadioGroup>
			</FormControl>
		</div>
	)
}

export { CategoryFilter }
