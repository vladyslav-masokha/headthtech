import { useSelector } from 'react-redux'
import { useTitleLogic } from '../../globalLogic/titleLogic'
import { RootState } from '../../redux/store'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import styles from './UserProfile.module.scss'
import { renderUserData } from './renderUserData'
import { renderUserImage } from './renderUserImage'

const UserProfilePage = () => {
	const user = useSelector((state: RootState) => state.user.user)

	useTitleLogic({ namePage: 'Профіль', id: null })

	return (
		<>
			<Header />

			<div className={styles.profile}>
				<div className='wrapper'>
					{user ? renderUserImage(user) : renderUserImage(null)}

					<div className={styles.profileBody}>
						{user ? renderUserData(user) : renderUserData(null)}
					</div>
				</div>
			</div>

			<Footer />
		</>
	)
}

export { UserProfilePage }
