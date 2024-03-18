import { TextField, Typography } from '@mui/material'
import { getAuth } from 'firebase/auth'
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useHistory } from 'react-router-dom'
import { MessageLogic } from '../../globalLogic/messageLogic'
import { redirectAfterTimeout } from '../../globalLogic/redirectAfterTimeout'
import { useTitleLogic } from '../../globalLogic/titleLogic'
import styles from '../../ui/form/Form.module.scss'
import { FormBody } from '../../ui/form/FormBody' 
import { AuthBtnRegister } from '../../ui/form/buttons/AuthBtnRegister'
import { SignInWithGoogle } from '../../ui/form/buttons/AuthBtnSignInWithGoogle'
import { handleUserNameBlur } from '../../ui/form/handleBlurLogic/HandleUserNameBlur'
import { helperTextUserNameLogic } from '../../ui/form/helperLogic/HelperTextUserNameLogic'
import { handleRegister } from '../../ui/form/logic/RegisterService'
import { handleUserNameChange } from '../../ui/form/logic/AuthLogic'

const RegisterPage = () => {
	const history = useHistory()
	const auth = getAuth()
	const [user] = useAuthState(auth)
	const [userName, setUserName] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	const [successMessage, setSuccessMessage] = useState<string | null>(null)
	const [errorMessage, setErrorMessage] = useState<string | null>(null)

	const [isUserNameValid, setIsUserNameValid] = useState<boolean>(true)
	const [isEmailValid, setIsEmailValid] = useState<boolean>(true)
	const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true)

	useTitleLogic({ namePage: 'Реєстрація', id: null })
	redirectAfterTimeout({ user, history })

	const handleRegisterClick = () =>
		handleRegister(
			userName,
			email,
			password,
			setUserName,
			setEmail,
			setPassword,
			setSuccessMessage,
			setErrorMessage
		)

	const messageProps = { successMessage, errorMessage }
	const btnRegisterProps = {
		handleRegisterClick,
		isUserNameValid,
		isEmailValid,
		isPasswordValid,
	}
	const formProps = {
		email,
		password,
		setEmail,
		setPassword,
		isUserNameValid,
		isEmailValid,
		isPasswordValid,
		setIsEmailValid,
		setIsPasswordValid,
	}

	return (
		<form className={styles.form}>
			<div className='wrapper'>
				<Typography variant='h1' className={styles.title}>
					Реєстрація
				</Typography>
				<MessageLogic {...messageProps} />

				<div className={styles.formBody}>
					<TextField
						required
						type='text'
						id='outlined-basic-1'
						label="Ім'я користувача"
						variant='outlined'
						value={userName}
						error={!isUserNameValid}
						helperText={helperTextUserNameLogic(isUserNameValid)}
						onBlur={() => handleUserNameBlur(userName, setIsUserNameValid)}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							handleUserNameChange(e, { setUserName })
						}
					/>
					<FormBody {...formProps} />
					<AuthBtnRegister {...btnRegisterProps} />
					<SignInWithGoogle auth={auth} />
				</div>
			</div>
		</form>
	)
}

export { RegisterPage }
