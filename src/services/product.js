import { apiClient } from "../utils/apiClient"
import { apiRoutes } from "../utils/apiRoutes"

export const FetchProduct = async(id) => {
    const response = await apiClient.get(`${apiRoutes.FetchProduct}/${id}`)
    return response
}