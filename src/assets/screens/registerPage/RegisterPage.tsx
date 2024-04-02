import { TextField, Typography } from '@mui/material'
import { getAuth } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styles from '../../components/form/Form.module.scss'
import { FormBody } from '../../components/form/FormBody'
import { SignInWithGoogle } from '../../components/form/buttons/AuthBtnSignInWithGoogle'
import { handleUserNameBlur } from '../../components/form/handleBlurLogic/HandleUserNameBlur'
import { helperTextUserNameLogic } from '../../components/form/helperLogic/HelperTextUserNameLogic'
import { handleUserNameChange } from '../../components/form/logic/AuthLogic'
import { MessageLogic } from '../../globalLogic/messageLogic'
import { redirectAfterTimeout } from '../../globalLogic/redirectAfterTimeout'
import { useTitleLogic } from '../../globalLogic/titleLogic'
import { RootState } from '../../redux/store'
import { AuthRegisterBtn } from '../../ui/buttons/auth/btns/AuthRegisterBtn'
import { setIsUserNameValid } from '../../redux/slices/authSlice'

const RegisterPage = () => {
	const dispatch = useDispatch()
	const history = useHistory()
	const auth = getAuth()
	const [user] = useAuthState(auth)
	const {
		userName,
		isUserNameValid,
		successMessage,
		errorMessage,
	} = useSelector((state: RootState) => state.auth)
	const setIsUserNameValidEl = dispatch(setIsUserNameValid(userName))

	useTitleLogic({ namePage: 'Реєстрація', id: null })
	redirectAfterTimeout({ user, history })

	const messageProps = { successMessage, errorMessage }

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
						onBlur={() => handleUserNameBlur(userName, setIsUserNameValidEl)}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							handleUserNameChange(e, { setUserName })
						}
					/>
					<FormBody />
					<AuthRegisterBtn />
					<SignInWithGoogle auth={auth} />
				</div>
			</div>
		</form>
	)
}

export { RegisterPage }
