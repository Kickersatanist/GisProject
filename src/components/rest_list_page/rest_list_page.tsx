// import { memo, useCallback, useEffect, useMemo, useState } from 'react'
// import { DataGrid, GridColDef, GridPaginationModel } from '@mui/x-data-grid'
// import { Paper } from '@mui/material'
// import './rest_list_page.css'

// import * as API from '@/shared/api/places'
// import { TypeVisitedPlace } from '@/shared/api/places'
// import { renderCustomRating } from '@/shared/components/CustomRating/CustomRating'
// import { useNavigate } from 'react-router-dom'
// import Review from '../restaurant_page/review/review'
// import { StyledDataGrid } from '@/shared/components/StyledDataGrid/StyledDataGrid'

// const columns: GridColDef[] = [
// 	{
// 		field: 'visitedPlaceId',
// 		headerName: 'Айдишник',
// 		editable: false,
// 		filterable: false,
// 		resizable: false,
// 	},
// 	{
// 		field: 'name',
// 		headerName: 'Название',
// 		editable: false,
// 		resizable: false,
// 		width: 300,
// 	},
// 	{
// 		field: 'description',
// 		headerName: 'Описание',
// 		editable: false,
// 		resizable: false,
// 		width: 300,
// 		flex: 1,
// 	},
// 	{
// 		field: 'avgMark',
// 		headerName: 'Средняя оценка',
// 		renderCell: renderCustomRating,
// 		editable: false,
// 		resizable: false,
// 		width: 300,
// 	},
// ]

// type PageStateType = {
// 	isLoading: boolean
// 	data: TypeVisitedPlace[] | []
// 	total: number
// }

// export const RestListPage = memo(() => {
// 	const [pageState, setPageState] = useState<PageStateType>({
// 		isLoading: false,
// 		data: [],
// 		total: 0,
// 	})

// 	const [paginationState, setPaginationState] = useState<GridPaginationModel>({
// 		page: 1,
// 		pageSize: 5,
// 	})

// 	const navigate = useNavigate()

// 	useEffect(() => {
// 		setPageState(prev => ({ ...prev, isLoading: true }))
// 		API.getAllVisitedPlacesByPage(paginationState).then(response => {
// 			setPageState(prev => ({ ...prev, data: response.data, isLoading: false }))
// 		})
// 	}, [setPageState, API.getAllVisitedPlaces])

// 	const onCellClick = useCallback((e: any) => {
// 		return navigate(`/restaurant/${e.row.visitedPlaceId}`, {
// 			state: { place: e.row as API.TypeVisitedPlace },
// 		})
// 	}, [])

// 	return (
// 		<>
// 			<div className='lightPurple'>
// 				<div className='container minHeight1080'>
// 					<StyledDataGrid
// 						columnVisibilityModel={{ visitedPlaceId: false }}
// 						columns={columns}
// 						getRowId={row => row.visitedPlaceId}
// 						rows={pageState.data}
// 						rowCount={pageState.total}
// 						loading={pageState.isLoading}
// 						autoPageSize={true}
// 						paginationModel={paginationState}
// 						onPaginationModelChange={setPaginationState}
// 						hideFooterSelectedRowCount={true}
// 						onCellClick={e => onCellClick(e)}
// 						sx={{ fontSize: '25px', color: 'white', fontFamily: 'Inter' }}
// 					></StyledDataGrid>
// 				</div>
// 			</div>
// 		</>
// 	)
// })
