import { useSelector } from 'react-redux'
import { useTitleLogic } from '../../globalLogic/titleLogic'
import { RootState } from '../../redux/store'
import { Header } from '../../ui/Header/Header'
import { Footer } from '../../ui/footer/Footer'
import styles from './UserProfile.module.scss'
import { renderUserImage } from './renderUserImage'

const UserProfilePage = () => {
	const user = useSelector((state: RootState) => state.user.user)

	useTitleLogic({ namePage: 'Профіль', id: null })

	return (
		<>
			<Header />

			<div className={styles.profile}>
				<div className='wrapper'>
					{user ? (
						<>
							{renderUserImage(user)}
							<h2 className={styles.userName}>
								{user.displayName || 'Анонімний користувач'}
							</h2>
						</>
					) : (
						<>
							{renderUserImage(null)}
							<h2 className={styles.userName}>Анонімний користувач</h2>
						</>
					)}
				</div>
			</div>

			<Footer />
		</>
	)
}

export { UserProfilePage }
