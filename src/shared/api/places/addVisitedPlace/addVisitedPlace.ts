import axios, { AxiosResponse } from 'axios'
import { TypePost } from '../TypePost'
import { instanceApi } from '../../instanceApi'
import { TypeAddPlace } from './TypeAddPlace'

export const addVisitedPlace = async (
	args: TypeAddPlace
): Promise<AxiosResponse<boolean>> => {
	return instanceApi.post(`/places/CreateVisitedPlace`, args)
}
