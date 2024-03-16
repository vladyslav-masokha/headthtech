import { useEffect } from 'react'

interface useTitleLogicProps {
	namePage: string
	id: number | null
}

const useTitleLogic: React.FC<useTitleLogicProps> = ({ namePage, id }) => {
	useEffect(() => {
		document.title = `${namePage} - Інтернет магазин медичної техніки`
		return () => {
			document.title = 'HealthTech - Інтернет магазин медичної техніки'
		}
	}, [id, namePage])

	return null
}

export { useTitleLogic }
