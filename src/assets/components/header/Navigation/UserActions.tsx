import { Link } from 'react-router-dom'
import { AuthLogoutBtn } from '../../../ui/buttons/auth/btns/AuthLogoutBtn'
import { CartIcon } from '../cart/CartIcon'
import styles from './Navigation.module.scss'
import { LoginLink } from './links/LoginLink'
import { RegisterLink } from './links/RegisterLink'

interface User {
	displayName?: string | null
	email: string | null
}

interface UserActionsProps {
	user: User | null
}

const UserActions: React.FC<UserActionsProps> = ({ user }) => {
	return (
		<div className={styles.userAction}>
			{user ? (
				<>
					<Link to='/profile' className={styles.userAccount}>
						{user.displayName || user.email}
					</Link>
					<AuthLogoutBtn />
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
