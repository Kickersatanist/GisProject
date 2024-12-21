import React from 'react'
import AnimatedPage from '@/components/animated_page/animated_page'
// import { RestListPage } from '@/components/rest_list_page/rest_list_page'
import { RestListPageV2 } from '@/components/rest_list_page/rest_list_page_v2'

const RestList = () => {
	return (
		<AnimatedPage>
			<head>
				<title>Список посещенных ресторанов</title>
			</head>
			<RestListPageV2 />
		</AnimatedPage>
	)
}

export default RestList
