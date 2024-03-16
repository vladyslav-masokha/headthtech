import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { LoginLink } from './links/LoginLink'
import styles from './Navigation.module.scss'
import { RegisterLink } from './links/RegisterLink'
import { CartIcon } from '../cart/CartIcon'

interface User {
	displayName?: string | null
	email: string | null
}

interface UserActionsProps {
	user: User | null
	handleLogout: () => void
}

const UserActions: React.FC<UserActionsProps> = ({ user, handleLogout }) => {
	return (
		<div className={styles.userAction}>
			{user ? (
				<>
					<Link to='/profile' className={styles.userAccount}>
						{user.displayName || user.email}
					</Link>
					<Button
						className={styles.btnLogout}
						variant='text'
						onClick={handleLogout}
					>
						Вийти
					</Button>
					<CartIcon />
				</>
			) : (
				<>
					<LoginLink />
					<RegisterLink />
					<CartIcon />
				</>
			)}
		</div>
	)
}

export { UserActions }
