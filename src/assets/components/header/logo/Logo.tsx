import { Link } from 'react-router-dom'
import styles from './Logo.module.scss'

const Logo = () => {
	return (
		<Link to='/' className={styles.headerLogo}>
			HealthTech &#127482;&#127462;
		</Link>
	)
}

export { Logo }
