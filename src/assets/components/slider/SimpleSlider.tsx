import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { RootState } from '../../redux/store'
import { Product } from '../../types'
import styles from './SimpleSlider.module.scss'

const SimpleSlider = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
	}

	const data: Product[] = useSelector(
		(state: RootState) => state.products.items
	)

	return (
		<div className={styles.sliderContainer}>
			<Slider {...settings}>
				{data.length ? (
					data.map(product => (
						<div className={styles.card} key={product.id}>
							<Link to={`/${product.id}`}>
								<img
									className={styles.cardImage}
									src={product.image}
									alt={product.title}
									loading='lazy'
								/>

								<div className={styles.cardInfo}>
									<h3 className={styles.title}>{product.title}</h3>
								</div>
							</Link>
						</div>
					))
				) : (
					<p className={styles.notGoods}>Товари не знайдені!</p>
				)}
			</Slider>
		</div>
	)
}

export { SimpleSlider }
