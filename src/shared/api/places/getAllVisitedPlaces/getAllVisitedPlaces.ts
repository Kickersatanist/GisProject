import axios, { AxiosResponse } from 'axios'
import { instanceApi } from '../../instanceApi'
import { TypeVisitedPlace } from '../TypeVisitedPlace'

export const getAllVisitedPlaces = async (): Promise<
	AxiosResponse<TypeVisitedPlace[]>
> => {
	return instanceApi.get(`/places/GetAllVisitedPlaces`)
}
