import { User } from 'firebase/auth'
import { AuthLogoutBtn } from '../../ui/buttons/auth/btns/AuthLogoutBtn'
import { LoginBtn } from '../../ui/buttons/auth/links/LoginBtn'
import { DateTimeComponent } from './DateTimeComponent'

const renderUserData = (user: User | null) => {
	if (user) {
		return (
			<>
				<div>
					<div>
						<h3>Email: </h3>
						<p>{user.email}</p>
					</div>

					<div>
						<h3>Акаунт створений: </h3>
						<DateTimeComponent timestamp={user.metadata.creationTime} />
					</div>
				</div>

				<div>
					<div>
						<h3>Останній вхід: </h3>
						<DateTimeComponent timestamp={user.metadata.lastSignInTime} />
					</div>

					<AuthLogoutBtn />
				</div>
			</>
		)
	} else {
		return (
			<>
				<div>
					<div>
						<h3>Email: </h3>
						<p>Не знайдено!</p>
					</div>

					<div>
						<h3>Акаунт створений: </h3>
						<p>Не знайдено!</p>
					</div>
				</div>

				<div>
					<div>
						<h3>Останній вхід: </h3>
						<p>Не знайдено!</p>
					</div>

					<LoginBtn />
				</div>
			</>
		)
	}
}

export { renderUserData }
