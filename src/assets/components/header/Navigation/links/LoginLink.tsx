import { Link } from 'react-router-dom'
import styles from '../Navigation.module.scss'

const LoginLink = () => {
	return (
		<Link to='/login' className={styles.logBtn}>
			Вхід
		</Link>
	)
}

export { LoginLink }
