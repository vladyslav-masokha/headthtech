import { useDispatch } from 'react-redux'
import { handleRegister } from '../components/form/logic/RegisterService'
import {
	setEmail,
	setErrorMessage,
	setPassword,
	setSuccessMessage,
	setUserName,
} from '../redux/slices/authSlice'

const useHandleRegisterClick = () => {
	const dispatch = useDispatch()

	const handleRegisterClick = (
		userName: string,
		email: string,
		password: string
	) =>
		handleRegister(
			userName,
			email,
			password,
			value => dispatch(setUserName(value)),
			value => dispatch(setEmail(value)),
			value => dispatch(setPassword(value)),
			value => dispatch(setSuccessMessage(value)),
			value => dispatch(setErrorMessage(value))
		)

	return handleRegisterClick
}

export { useHandleRegisterClick }
