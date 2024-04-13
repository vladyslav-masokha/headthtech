import styles from './FeedBack.module.scss'

const FeedBack = () => {
	return (
		<div className={styles.feedback}>
			<div className='wrapper'>
				<h2 className={styles.titleBlock}>Зворотній зв'язок</h2>
				<form action='/' className={styles.feedbackBody}>
					<input type='text' placeholder="Ім'я" required />
					<input type='text' placeholder='Прізвище' required />
					<input type='email' placeholder='Пошта' required />
					<textarea
						cols={30}
						rows={10}
						placeholder='Ваше повідомлення'
						required
					></textarea>
					<button type='submit'>Відправити</button>
				</form>
			</div>
		</div>
	)
}

export { FeedBack }
