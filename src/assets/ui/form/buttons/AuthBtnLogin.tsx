import styles from '../Form.module.scss'
import { RegisterLink } from '../links/RegisterLink'
import { AuthLoginBtn } from './AuthLoginBtn'

interface AuthLoginButtonsProps {
	handleLoginClick: () => void
	isEmailValid: boolean
	isPasswordValid: boolean
}

const AuthLoginButtons: React.FC<AuthLoginButtonsProps> = ({
	handleLoginClick,
	isEmailValid,
	isPasswordValid,
}) => {
	const AuthLoginBtnProps = { handleLoginClick, isEmailValid, isPasswordValid }
	return (
		<div className={styles.loginBtns}>
			<AuthLoginBtn {...AuthLoginBtnProps} />
			<RegisterLink />
		</div>
	)
}

export { AuthLoginButtons }
