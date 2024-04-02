import { Copyright } from './copyright/Copyright'
import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className='wrapper'>
				<div className={styles.footerBody}>
					<Copyright />
				</div>
			</div>
		</footer>
	)
}

export { Footer }
