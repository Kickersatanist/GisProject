import axios, { AxiosResponse } from 'axios'
import { instanceApi } from '../../instanceApi'
import { TypeVisitedPlace } from '../TypeVisitedPlace'

interface IArgs {
	page: number
	pageSize: number
}

export const getAllVisitedPlacesByPage = async (
	args: IArgs
): Promise<AxiosResponse<TypeVisitedPlace[]>> => {
	return instanceApi.get(`/places/GetAllVisitedPlacesByPage`, {
		params: { page: args.page, pageSize: args.pageSize },
	})
}
