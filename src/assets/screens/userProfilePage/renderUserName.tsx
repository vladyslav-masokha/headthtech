import { User } from 'firebase/auth'
import { ReactNode } from 'react'
import styles from './UserProfile.module.scss'

const renderUserName = (user: User | null): ReactNode => {
	if (user && user.displayName) {
		return <h2 className={styles.userName}>{user.displayName}</h2>
	} else {
		return <h2 className={styles.userName}>Анонімний користувач</h2>
	}
}

export { renderUserName }
