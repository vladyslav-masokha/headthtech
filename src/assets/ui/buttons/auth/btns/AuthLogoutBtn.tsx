import { Button } from '@mui/material'
import { getAuth, signOut } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../../../../redux/slices/userSlice'
import styles from '../../../../components/form/Form.module.scss'

const AuthLogoutBtn = () => {
	const dispatch = useDispatch()

	const handleLogout = async () => {
		const auth = getAuth()

		await signOut(auth)
		dispatch(setUser(null))
	}

	return (
		<Button className={styles.btnLogout} variant='text' onClick={handleLogout}>
			Вийти
		</Button>
	)
}

export { AuthLogoutBtn }
