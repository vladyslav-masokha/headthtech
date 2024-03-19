import { User } from 'firebase/auth'
import styles from './UserProfile.module.scss'

const renderUserImage = (user: User | null) => {
	if (user && user.photoURL) {
		return (
			<img
				className={styles.userImage}
				src={user.photoURL}
				alt={user.displayName || 'Аватар користувача'}
				loading='lazy'
			/>
		)
	} else {
		return (
			<img
				className={styles.userImage}
				src='./images/userImage.png'
				alt={user?.displayName || 'Аватар користувача'}
				loading='lazy'
			/>
		)
	}
}

export { renderUserImage }
