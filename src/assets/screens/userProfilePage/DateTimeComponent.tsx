interface Props {
	timestamp?: string
}

const DateTimeComponent: React.FC<Props> = ({ timestamp }) => {
	if (!timestamp) return null

	const dateObj = new Date(timestamp)

	const date = dateObj.toLocaleDateString()
	const time = dateObj.toLocaleTimeString()

	return (
		<p>
			{date}, {time}
		</p>
	)
}

export { DateTimeComponent }
