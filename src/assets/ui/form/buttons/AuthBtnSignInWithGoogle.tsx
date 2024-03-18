import { Google as GoogleIcon } from '@mui/icons-material'
import { Button } from '@mui/material'
import { Auth } from 'firebase/auth'
import styles from '../Form.module.scss'
import { handleGoogleSignIn } from '../logic/AuthLogic'

const SignInWithGoogle: React.FC<{ auth: Auth }> = ({ auth }) => {
	return (
		<Button
			className={styles.signInGoogle}
			variant='contained'
			startIcon={<GoogleIcon />}
			onClick={() => handleGoogleSignIn(auth)}
		>
			Увійти через Google
		</Button>
	)
}

export { SignInWithGoogle }
