import { useTitleLogic } from '../../globalLogic/titleLogic'
import { Header } from '../../ui/Header/Header'
import { Footer } from '../../ui/footer/Footer'
import styles from './AboutPage.module.scss'

const AboutPage = () => {
	useTitleLogic({ namePage: 'Про Нас', id: null })

	return (
		<>
			<Header />

			<div className={styles.about}>
				<div className='wrapper'>
					<h2>Про Нас</h2>

					<div className={styles.aboutBody}>
						<div>
							<p>
								Запрошуємо вас відкрити двері до захоплюючого світу інноваційної
								медичної техніки разом з нашим інтернет-магазином! Ми - команда
								фахівців, яка присвятила свою роботу здоров'ю та добробуту
								кожного нашого клієнта.
							</p>

							<p>
								Наша мета - забезпечити доступ до найсучасніших технологій у
								сфері медичної техніки для лікарів, медичних закладів та
								приватних користувачів. Ми віримо, що передове обладнання та
								інструменти є ключовими елементами успішного лікування та
								діагностики, тому ми докладаємо максимум зусиль, щоб забезпечити
								нашим клієнтам найкраще.
							</p>
						</div>

						<div>
							<p>
								Наша команда складається з професіоналів з багаторічним досвідом
								у медичній галузі. Ми завжди готові допомогти вам з вибором
								правильного обладнання, консультаціями щодо його використання та
								послугами післяпродажного обслуговування.
							</p>

							<p>
								Будьте впевнені, що обираючи наш інтернет-магазин, ви отримуєте
								не лише високоякісні товари, але й найкращий сервіс та підтримку
								на кожному етапі співпраці. Довірте нам своє здоров'я, і ми
								зробимо все можливе для вашого благополуччя!
							</p>
						</div>
					</div>

					<div className={styles.aboutLocation}>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.66492086928!2d30.4734714754331!3d50.42871438893004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cec0ea74afa7%3A0x638e8cfbdbe5fddc!2z0JTQtdGA0LbQsNCy0L3QuNC5INGD0L3RltCy0LXRgNGB0LjRgtC10YIg0YLQtdC70LXQutC-0LzRg9C90ZbQutCw0YbRltC5!5e0!3m2!1suk!2sua!4v1710791458197!5m2!1suk!2sua'
							// width='600'
							height='400'
							style={{ border: 0 }}
							allowFullScreen={true}
							loading='lazy'
							referrerPolicy='no-referrer-when-downgrade'
						></iframe>
					</div>
				</div>
			</div>

			<Footer />
		</>
	)
}

export { AboutPage }
