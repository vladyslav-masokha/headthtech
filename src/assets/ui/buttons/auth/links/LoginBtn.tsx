import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const LoginBtn = () => {
	return (
		<Link to='/login'>
			<Button variant='text'>Увійти</Button>
		</Link>
	)
}

export { LoginBtn }
