import { Link } from 'react-router-dom'
import styles from '../Navigation.module.scss'

const RegisterLink = () => {
	return (
		<Link to='/register' className={styles.regBtn}>
			Реєстрація
		</Link>
	)
}

export { RegisterLink }
