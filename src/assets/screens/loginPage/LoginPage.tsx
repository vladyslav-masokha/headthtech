import { Typography } from '@mui/material'
import { getAuth } from 'firebase/auth'
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useHistory } from 'react-router-dom'
import { MessageLogic } from '../../globalLogic/messageLogic'
import { redirectAfterTimeout } from '../../globalLogic/redirectAfterTimeout'
import { useTitleLogic } from '../../globalLogic/titleLogic'
import styles from '../../ui/form/Form.module.scss'
import { FormBody } from '../../ui/form/FormBody'
import { AuthBtnForgotPassword } from '../../ui/form/buttons/AuthBtnForgotPassword'
import { AuthLoginButtons } from '../../ui/form/buttons/AuthBtnLogin'
import { SignInWithGoogle } from '../../ui/form/buttons/AuthBtnSignInWithGoogle' 
import { handleLogin } from '../../ui/form/logic/LoginService'

const LoginPage = () => {
	const history = useHistory()
	const auth = getAuth()
	const [user] = useAuthState(auth)
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	const [successMessage, setSuccessMessage] = useState<string | null>(null)
	const [errorMessage, setErrorMessage] = useState<string | null>(null)

	const [isEmailValid, setIsEmailValid] = useState<boolean>(true)
	const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true)

	useTitleLogic({ namePage: 'Авторизація', id: null })
	redirectAfterTimeout({ user, history })

	const handleLoginClick = () =>
		handleLogin(
			email,
			password,
			setEmail,
			setPassword,
			setSuccessMessage,
			setErrorMessage
		)

	const messageProps = { successMessage, errorMessage }
	const btnLoginProps = { handleLoginClick, isEmailValid, isPasswordValid }
	const formProps = {
		email,
		password,
		setEmail,
		setPassword,
		isEmailValid,
		isPasswordValid,
		setIsEmailValid,
		setIsPasswordValid,
	}

	return (
		<form className={styles.form}>
			<div className='wrapper'>
				<div className={styles.formGaps}>
					<Typography variant='h1' className={styles.title}>
						Логін
					</Typography>
					<MessageLogic {...messageProps} />

					<FormBody {...formProps} />
					<AuthBtnForgotPassword />
					<AuthLoginButtons {...btnLoginProps} />
					<SignInWithGoogle auth={auth} />
				</div>
			</div>
		</form>
	)
}

export { LoginPage }
