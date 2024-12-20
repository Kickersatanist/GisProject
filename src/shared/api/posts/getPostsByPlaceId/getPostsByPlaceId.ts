import axios, { AxiosResponse } from 'axios'
import { TypePost } from '../TypePost'
import { instanceApi } from '../../instanceApi'

export const getPostsByPlaceId = async (
	placeId: number
): Promise<AxiosResponse<TypePost[]>> => {
	return instanceApi.get(`/posts/GetPostsByPlace`, {
		params: { placeId: placeId },
	})
}
