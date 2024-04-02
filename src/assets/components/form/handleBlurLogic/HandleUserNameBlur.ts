import { userNamePattern } from '../patterns/UserNamePattern'

const handleUserNameBlur = (
	userName: string,
	setIsUserNameValid: (userName: boolean) => void
) => {
	return setIsUserNameValid(userNamePattern.test(userName))
}

export { handleUserNameBlur }
