import { AnimalsCards } from '../../components/animalCards/AnimalsCards'
import { Filter } from '../../components/filter/Filter'
import { Header } from '../../ui/Header/Header'
import { Footer } from '../../ui/footer/Footer'
import styles from './HomePage.module.scss'

const HomePage = () => {
	return (
		<>
			<Header />

			<div className={styles.home}>
				<div className='wrapper'>
					<div className={styles.homeBody}>
						<Filter />
						<AnimalsCards />
					</div>
				</div>
			</div>

			<Footer />
		</>
	)
}

export { HomePage }
