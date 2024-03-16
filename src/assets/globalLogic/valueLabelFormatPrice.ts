const valueLabelFormatPrice = (value: number) => {
	if (value % 10 === 1) return `${value} гривня`

	if (
		(value % 10 === 2 && value !== 12) ||
		(value % 10 === 3 && value !== 13) ||
		(value % 10 === 4 && value !== 14)
	)
		return `${value} гривні`

	return `${value} гривень`
}

export { valueLabelFormatPrice }
