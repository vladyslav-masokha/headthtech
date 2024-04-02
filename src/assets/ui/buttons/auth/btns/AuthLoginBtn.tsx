import { Button } from '@mui/material'
import { useSelector } from 'react-redux'
import { useHandleLoginClick } from '../../../../hooks/useHandleLoginClick'
import { RootState } from '../../../../redux/store'

const AuthLoginBtn = () => {
	const handleLoginClick = useHandleLoginClick()
	const { email, password, isEmailValid, isPasswordValid } = useSelector(
		(state: RootState) => state.auth
	)

	return (
		<Button
			variant='text'
			onClick={() => handleLoginClick(email, password)}
			disabled={!isEmailValid || !isPasswordValid}
		>
			Увійти
		</Button>
	)
}

export { AuthLoginBtn }
