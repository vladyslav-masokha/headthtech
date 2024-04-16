import axios from 'axios'
import { useEffect, useState } from 'react'

interface Branch {
	Ref: string
	Description: string
}

export const useFetchBranches = (apiKey: string, cityRef: string) => {
	const [branches, setBranches] = useState<Branch[]>([])

	useEffect(() => {
		const fetchBranches = async () => {
			if (cityRef) {
				try {
					const response = await axios.post(
						'https://api.novaposhta.ua/v2.0/json/',
						{
							apiKey,
							modelName: 'Address',
							calledMethod: 'getWarehouses',
							methodProperties: {
								CityRef: cityRef,
							},
						},
						{
							headers: { 'Content-Type': 'application/json' },
						}
					)
					setBranches(response.data.data)
				} catch (error) {
					console.error('Error fetching branches: ', error)
				}
			}
		}

		fetchBranches()
	}, [apiKey, cityRef])

	return branches
}
