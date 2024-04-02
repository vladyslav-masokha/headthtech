import { Typography } from '@mui/material'
import { getAuth } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styles from '../../components/form/Form.module.scss'
import { FormBody } from '../../components/form/FormBody'
import { SignInWithGoogle } from '../../components/form/buttons/AuthBtnSignInWithGoogle'
import { MessageLogic } from '../../globalLogic/messageLogic'
import { redirectAfterTimeout } from '../../globalLogic/redirectAfterTimeout'
import { useTitleLogic } from '../../globalLogic/titleLogic'
import { RootState } from '../../redux/store'
import { AuthLoginBtn } from '../../ui/buttons/auth/btns/AuthLoginBtn'
import { ForgotPasswordBtn } from '../../ui/buttons/auth/links/ForgotPasswordBtn'
import { RegisterBtn } from '../../ui/buttons/auth/links/RegisterBtn'

const LoginPage = () => {
	const history = useHistory()
	const auth = getAuth()
	const [user] = useAuthState(auth)
	const { successMessage, errorMessage } = useSelector(
		(state: RootState) => state.auth
	)

	useTitleLogic({ namePage: 'Авторизація', id: null })
	redirectAfterTimeout({ user, history })

	const messageProps = { successMessage, errorMessage }

	return (
		<form className={styles.form}>
			<div className='wrapper'>
				<div className={styles.formGaps}>
					<Typography variant='h1' className={styles.title}>
						Логін
					</Typography>
					<MessageLogic {...messageProps} />

					<FormBody />
					<ForgotPasswordBtn />

					<div className={styles.loginBtns}>
						<AuthLoginBtn />
						<RegisterBtn />
					</div>

					<SignInWithGoogle auth={auth} />
				</div>
			</div>
		</form>
	)
}

export { LoginPage }
