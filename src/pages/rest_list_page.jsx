import React from 'react'
import AnimatedPage from '@/components/animated_page/animated_page'
import { RestListPage } from '@/components/rest_list_page/rest_list_page'

const RestList = () => {
	return (
		<AnimatedPage>
			<head>
				<title>Список посещенных ресторанов</title>
			</head>
			<RestListPage />
		</AnimatedPage>
	)
}

export default RestList
