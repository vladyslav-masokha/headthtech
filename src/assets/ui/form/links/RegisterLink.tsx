import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const RegisterLink = () => {
	return (
		<Link to='/register'>
			<Button variant='text'>Створити акаунт</Button>
		</Link>
	)
}

export { RegisterLink }
