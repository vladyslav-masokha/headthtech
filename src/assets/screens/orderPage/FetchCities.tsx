import axios from 'axios'
import { useEffect, useState } from 'react'

interface City {
	Ref: string
	Description: string
}

export const useFetchCities = (apiKey: string, regionRef: string) => {
	const [cities, setCities] = useState<City[]>([])

	useEffect(() => {
		const fetchCities = async () => {
			if (regionRef) {
				try {
					const response = await axios.post(
						'https://api.novaposhta.ua/v2.0/json/',
						{
							apiKey,
							modelName: 'Address',
							calledMethod: 'getCities',
							methodProperties: {
								AreaRef: regionRef,
							},
						},
						{
							headers: { 'Content-Type': 'application/json' },
						}
					)
					setCities(response.data.data)
				} catch (error) {
					console.error('Error fetching cities: ', error)
				}
			}
		}

		fetchCities()
	}, [apiKey, regionRef])

	return cities
}
