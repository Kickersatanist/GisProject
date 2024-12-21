import { Box, Rating } from '@mui/material'
import { GridRenderCellParams } from '@mui/x-data-grid'
import { memo } from 'react'

interface RatingValueProps {
	value: number
}

const RatingValue = memo(function RatingValue(props: RatingValueProps) {
	const { value } = props
	return (
		// <Box
		// 	sx={{
		// 		display: 'flex',
		// 		alignItems: 'center',
		// 		lineHeight: '24px',
		// 		color: 'text.secondary',
		// 	}}
		// >
		<>
			<Rating value={value} precision={0.1} sx={{ mr: 8 }} readOnly />{' '}
			{Math.round(Number(value) * 10) / 10}
		</>

		// </Box>
	)
})

export function renderCustomRating(
	params: GridRenderCellParams<any, number, any>
) {
	if (params.value == null) {
		return ''
	}

	return <RatingValue value={params.value} />
}
