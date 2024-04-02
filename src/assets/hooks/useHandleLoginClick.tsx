import { useDispatch } from 'react-redux'
import { handleLogin } from '../components/form/logic/LoginService'
import {
	setEmail,
	setErrorMessage,
	setPassword,
	setSuccessMessage,
} from '../redux/slices/authSlice'

const useHandleLoginClick = () => {
	const dispatch = useDispatch()

	const handleLoginClick = (email: string, password: string) =>
		handleLogin(
			email,
			password,
			value => dispatch(setEmail(value)),
			value => dispatch(setPassword(value)),
			value => dispatch(setSuccessMessage(value)),
			value => dispatch(setErrorMessage(value))
		)

	return handleLoginClick
}

export { useHandleLoginClick }
