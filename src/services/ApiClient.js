import axios from "axios";
import { API_URL } from '@env';
import { goToLogin } from "../navigation/NavigationHelper";
import LocalStorage from "../utils/LocalStorage";
import { GlobalError, UnauthorizedError } from "../utils/AppError";

const client = axios.create({
    baseURL: API_URL
})

client.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if(error.response.status === 401) {
        goToLogin();
    }
    return Promise.reject(error);
})

client.interceptors.request.use(async (config) => {
    if(config.url !== '/login'){
        const token = await LocalStorage().getData('token');
        config.headers = {
            'Authorization': `Bearer ${token}`
        }
    }
    return config;
}, function (error) {
    return Promise.reject(error)
})

const clientService = () => {
    const get = async (url) => {
        try {
            let result = await client.get(url);
            return result.data;
        } catch (e) {
            if (e.response) {
                if (e.response.status === 401) {
                    throw new UnauthorizedError("Unauthorized")
                }
            } else {
                throw new GlobalError("Oops")
            }
        }
    }
    const post = async (url, params) => {
        try {
            let result = await client.post(url, params);
            return result.data;
        } catch (e) {
            if (e.response) {
                if (e.response.status === 401) {
                    throw new UnauthorizedError("Unauthorized")
                }
            } else {
                throw new GlobalError("Oops")
            }
        }
    }

    return {
        get,
        post
    }


}

export default clientService;