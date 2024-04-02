import { Button } from '@mui/material'
import { useSelector } from 'react-redux'
import { useHandleRegisterClick } from '../../../../hooks/useHandleRegisterClick'
import { RootState } from '../../../../redux/store'

const AuthRegisterBtn = () => {
	const handleRegisterClick = useHandleRegisterClick()
	const {
		userName,
		email,
		password,
		isUserNameValid,
		isEmailValid,
		isPasswordValid,
	} = useSelector((state: RootState) => state.auth)
	const regBtnLogic = !isUserNameValid || !isEmailValid || !isPasswordValid

	return (
		<Button
			variant='text'
			onClick={() => handleRegisterClick(userName, email, password)}
			disabled={regBtnLogic}
		>
			Зареєструватись
		</Button>
	)
}

export { AuthRegisterBtn }
