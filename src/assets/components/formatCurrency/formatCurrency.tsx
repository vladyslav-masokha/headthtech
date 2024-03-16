const formatCurrency = (amount: number): string => {
	return amount.toLocaleString('uk-UA', {
		style: 'currency',
		currency: 'UAH',
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	})
}

export { formatCurrency }
