import axios from 'axios'
import { useEffect, useState } from 'react'

interface Region {
	Ref: string
	Description: string
}

export const useFetchRegions = (apiKey: string) => {
	const [regions, setRegions] = useState<Region[]>([])

	useEffect(() => {
		const fetchRegions = async () => {
			try {
				const response = await axios.post(
					'https://api.novaposhta.ua/v2.0/json/',
					{
						apiKey,
						modelName: 'AddressGeneral',
						calledMethod: 'getAreas',
					},
					{
						headers: { 'Content-Type': 'application/json' },
					}
				)
				setRegions(response.data.data)
			} catch (error) {
				console.error('Error fetching regions: ', error)
			}
		}

		fetchRegions()
	}, [apiKey])

	return regions
}
