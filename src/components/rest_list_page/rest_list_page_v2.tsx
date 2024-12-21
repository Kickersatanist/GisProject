import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { DataGrid, GridColDef, GridPaginationModel } from '@mui/x-data-grid'
import {
	Pagination,
	Paper,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material'
import './rest_list_page.css'

import * as API from '@/shared/api/places'
import { TypeVisitedPlace } from '@/shared/api/places'
import { renderCustomRating } from '@/shared/components/CustomRating/CustomRating'
import { useNavigate } from 'react-router-dom'
import Review from '../restaurant_page/review/review'
import { StyledDataGrid } from '@/shared/components/StyledDataGrid/StyledDataGrid'
import { Table } from 'lucide-react'

const columns = [
	// {
	// 	field: 'visitedPlaceId',
	// 	headerName: 'Айдишник',
	// 	editable: false,
	// 	filterable: false,
	// 	resizable: false,
	// },
	{
		field: 'name',
		headerName: 'Название',
	},
	{
		field: 'description',
		headerName: 'Описание',
	},
	{
		field: 'avgMark',
		headerName: 'Средняя оценка',
	},
]

type PageStateType = {
	isLoading: boolean
	data: TypeVisitedPlace[] | []
	total: number
	page: number
	pageSize: number
	count: number
}

export const RestListPageV2 = memo(() => {
	const [pageState, setPageState] = useState<PageStateType>({
		isLoading: false,
		data: [],
		total: 0,
		page: 1,
		pageSize: 5,
		count: 0,
	})

	const navigate = useNavigate()

	useEffect(() => {
		setPageState(prev => ({ ...prev, isLoading: true }))
		API.getAllVisitedPlaces().then(response => {
			setPageState(prev => ({
				...prev,
				data: response.data,
				total: response.data.length,
				count: Math.ceil(response.data.length / pageState.pageSize),
				isLoading: false,
			}))
		})
	}, [setPageState, API.getAllVisitedPlaces])

	const onCellClick = useCallback((e: any) => {
		return navigate(`/restaurant/${e.row.visitedPlaceId}`, {
			state: { place: e.row as API.TypeVisitedPlace },
		})
	}, [])

	const handlePaginationChange = useCallback((e, p) => {
		setPageState(prev => ({ ...prev, page: p }))
	}, [])

	return (
		<div className='lightPurple'>
			<div className='container minHeight1080'>
				<table className='table'>
					<thead>
						<tr>
							{columns.map(col => (
								<th key={col.field}>{col.headerName}</th>
							))}
						</tr>
					</thead>
					<tbody>
						{pageState.data
							.slice(
								(pageState.page - 1) * pageState.pageSize,
								(pageState.page - 1) * pageState.pageSize + pageState.pageSize
							)
							.map((row: TypeVisitedPlace) => (
								<tr
									className='table__row'
									key={row.visitedPlaceId}
									onClick={() => onCellClick({ row })}
								>
									{/* <td className='column__id'>{row.visitedPlaceId}</td> */}
									<td className='column__name'>{row.name}</td>
									<td className='column__description'>{row.description}</td>
									<td className='column__avgMark'>{row.avgMark}</td>
								</tr>
							))}

						<Pagination
							count={pageState.count}
							sx={{ margin: '0 auto', color: 'white' }}
							page={pageState.page}
							shape='rounded'
							variant='outlined'
							onChange={handlePaginationChange}
							size='large'
						></Pagination>
					</tbody>
				</table>

				{/* <TableContainer>
					<Table>
						<TableHead>
							<TableRow>
								{columns.map(col => (
									<TableCell key={col.field} align='center'>
										<h1>{col.headerName}</h1>
									</TableCell>
								))}
							</TableRow>
						</TableHead>
						<TableBody>SDADASDASD</TableBody>
					</Table>
				</TableContainer> */}
			</div>
		</div>
	)
})
