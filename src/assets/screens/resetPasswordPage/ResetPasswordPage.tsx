import { TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { MessageLogic } from '../../globalLogic/messageLogic'
import { useTitleLogic } from '../../globalLogic/titleLogic'
import styles from '../../components/form/Form.module.scss'
import { AuthBtnResetPassword } from '../../components/form/buttons/AuthBtnResetPassword'
import { handleEmailBlur } from '../../components/form/handleBlurLogic/HandleEmailBlur'
import { helperTextEmailLogic } from '../../components/form/helperLogic/HelperTextEmailLogic'
import { handleEmailChange } from '../../components/form/logic/AuthLogic'
import { handleResetPassword } from '../../components/form/logic/ResetPasswordService'

const ResetPasswordPage = () => {
	const [successMessage, setSuccessMessage] = useState<string | null>(null)
	const [errorMessage, setErrorMessage] = useState<string | null>(null)

	const [email, setEmail] = useState<string>('')
	const [isEmailValid, setIsEmailValid] = useState<boolean>(true)

	useTitleLogic({ namePage: 'Відновлення пароля', id: null })

	const handleResetClick = () =>
		handleResetPassword(email, setSuccessMessage, setErrorMessage)

	return (
		<div className={styles.form}>
			<Typography className={styles.title}>Відновлення пароля</Typography>
			<MessageLogic successMessage={successMessage} errorMessage={errorMessage} />

			<TextField
				required
				type='email'
				id='outlined-basic'
				label='Електрона пошта'
				variant='outlined'
				value={email}
				error={!isEmailValid}
				helperText={helperTextEmailLogic(isEmailValid)}
				className={styles.resetField}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					handleEmailChange(e, { setEmail })
				}
				onBlur={() => handleEmailBlur(email, setIsEmailValid)}
			/>

			<AuthBtnResetPassword handleResetClick={handleResetClick} />
		</div>
	)
}

export { ResetPasswordPage }
