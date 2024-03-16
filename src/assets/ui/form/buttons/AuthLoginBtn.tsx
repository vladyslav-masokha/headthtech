import { Button } from '@mui/material'

interface LoginBtnProps {
	handleLoginClick: () => void
	isEmailValid: boolean
	isPasswordValid: boolean
}

const AuthLoginBtn: React.FC<LoginBtnProps> = ({
	handleLoginClick,
	isEmailValid,
	isPasswordValid,
}) => {
	return (
		<Button
			variant='text'
			onClick={handleLoginClick}
			disabled={!isEmailValid || !isPasswordValid}
		>
			Увійти
		</Button>
	)
}

export { AuthLoginBtn }
