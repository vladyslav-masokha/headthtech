import { Button } from '@mui/material'
import styles from '../Form.module.scss'

const AuthBtnResetPassword: React.FC<{ handleResetClick: () => void }> = ({
	handleResetClick,
}) => {
	return (
		<div className={styles.resetBtns}>
			<Button
				variant='text'
				className={styles.resetBtn}
				onClick={handleResetClick}
			>
				Скинути
			</Button>
		</div>
	)
}

export { AuthBtnResetPassword }
