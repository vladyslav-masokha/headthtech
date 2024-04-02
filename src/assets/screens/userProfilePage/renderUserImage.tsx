import { User } from 'firebase/auth'
import styles from './UserProfile.module.scss'

const renderUserImage = (user: User | null) => {
	if (user && user.photoURL) {
		return (
			<>
				<img
					className={styles.userImage}
					src={user.photoURL}
					alt={user.displayName || 'Аватар користувача'}
					loading='lazy'
				/>
				<h2 className={styles.userName}>{user.displayName}</h2>
			</>
		)
	} else {
		return (
			<>
				<img
					className={styles.userImage}
					src='./images/userImage.png'
					alt={user?.displayName || 'Аватар користувача'}
					loading='lazy'
				/>
				<h2 className={styles.userName}>Анонімний користувач</h2>
			</>
		)
	}
}

export { renderUserImage }
