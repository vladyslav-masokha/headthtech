import { FeedBack } from '../../components/feedback/FeedBack'
import { Filter } from '../../components/filter/Filter'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import { ProductCards } from '../../components/productCards/ProductCards'
import { SimpleSlider } from '../../components/slider/SimpleSlider'
import styles from './HomePage.module.scss'

const HomePage = () => {
	return (
		<>
			<Header />

			<div className={styles.home}>
				<div className='wrapper'>
					<div className={styles.homeBody}>
						<Filter />

						<div className={styles.rightBlock}>
							<SimpleSlider />
							<ProductCards />
						</div>
					</div>

					<FeedBack />
				</div>
			</div>

			<Footer />
		</>
	)
}

export { HomePage }
