import axios, { AxiosResponse } from 'axios'
import { TypePost } from '../TypePost'
import { instanceApi } from '../../instanceApi'
import { TypeAddPost } from './TypeAddPost'

export const addPost = async (
	args: TypeAddPost
): Promise<AxiosResponse<boolean>> => {
	return instanceApi.post(`/posts/GetPostsByPlace`, args)
}
