import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import styles from '../../../../components/form/Form.module.scss'

const ForgotPasswordBtn = () => {
	return (
		<Link to='/reset' className={styles.forgotBtn}>
			<Button variant='text'>Забули пароль</Button>
		</Link>
	)
}

export { ForgotPasswordBtn }
