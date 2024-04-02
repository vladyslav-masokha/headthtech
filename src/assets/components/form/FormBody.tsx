import { TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import {
	setEmail,
	setIsEmailValid,
	setIsPasswordValid,
	setPassword,
} from '../../redux/slices/authSlice'
import { RootState } from '../../redux/store'
import styles from './Form.module.scss'
import { handleEmailBlur } from './handleBlurLogic/HandleEmailBlur'
import { handlePasswordBlur } from './handleBlurLogic/HandlePasswordBlur'
import { helperTextEmailLogic } from './helperLogic/HelperTextEmailLogic'
import { HelperTextPasswordLogic } from './helperLogic/HelperTextPasswordLogic'

const FormBody = () => {
	const { email, password, isEmailValid, isPasswordValid } = useSelector(
		(state: RootState) => state.auth
	)
	const dispatch = useDispatch()

	const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target
		dispatch(setEmail(value))
	}

	const handlePasswordInputChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const { value } = e.target
		dispatch(setPassword(value))
	}

	return (
		<div className={styles.formBody}>
			<TextField
				required
				type='email'
				id='outlined-basic'
				label='Електрона пошта'
				variant='outlined'
				value={email}
				error={!isEmailValid}
				helperText={helperTextEmailLogic(isEmailValid)}
				onChange={handleEmailInputChange}
				onBlur={() => handleEmailBlur(email, setIsEmailValid)}
			/>

			<TextField
				required
				id='outlined-password-input'
				label='Пароль'
				type='password'
				autoComplete='current-password'
				value={password}
				error={!isPasswordValid}
				helperText={HelperTextPasswordLogic(isPasswordValid)}
				onChange={handlePasswordInputChange}
				onBlur={() => handlePasswordBlur(password, setIsPasswordValid)}
			/>
		</div>
	)
}

export { FormBody }
