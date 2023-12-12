import axios from "axios"
import type { AxiosInstance, AxiosRequestConfig } from "axios"
// import { ref } from "vue"
// import type { Ref } from "vue"

// controller 的初始化参数，传递给
interface ControllerConfig {
    timeout?: number;
    headers?: Record<string, string>;
    baseURL?: string;
}
// use风格的函数的返回结构
// interface useResponseType<T> {
//     isLoading: Ref<boolean>
//     response: Ref<T | null>
// }

export default class BaseController {
    config: AxiosRequestConfig = {};
    instance: AxiosInstance;
    constructor(config?: ControllerConfig) {
        this.config.timeout = config?.timeout || 10000;
        this.config.baseURL = config?.baseURL || import.meta.env.VITE_API_BASE_URL;
        this.instance = axios.create(this.config);
        this.setupAxios();
    }
    /**
     * axios实例的初始化函数
     */
    setupAxios() {
        // 添加请求拦截器
        this.instance.interceptors.request.use(config => {
            return config
        })

        // 添加响应拦截器
        this.instance.interceptors.response.use(
            res => {
                return res.data
            },
            err => {
                return Promise.reject(err)
            }
        )
    }
    /**
     * get方法的响应
     * @param url 
     * @param params 
     * @returns 
     */
    async useGetResponse<T>(url: string, params?: Record<string, any>): Promise<T> {
        // const isLoading = ref(true)
        // // axios无法拦截重定向，将默认值设置为重定向
        // const response: Ref<T | null> = ref(null)
        // this.instance
        //     .get(url, { params })
        //     .then((res: AxiosResponse) => {
        //         response.value = res.data;
        //     }).catch(err => {
        //         console.log('请求错误:', err)
        //     })
        //     .finally(() => {
        //         isLoading.value = false
        //     })
        // return { isLoading, response }
        const res: T = await this.instance.get(url, { params });
        return res

    }
    /**
     * post 方法的响应
     * @param url 
     * @param body 
     * @param params 
     * @returns 
     */
    async usePostResponse<T>(url: string, body?: Record<string, any> | FormData, params?: Record<string, any>): Promise<T> {
        // const isLoading = ref(true)
        // // axios无法拦截重定向，将默认值设置为重定向
        // const response: Ref<T | null> = ref(null)
        // this.instance
        //     .post(url, { params, body })
        //     .then((res: AxiosResponse) => {
        //         response.value = res.data;
        //     }).catch(err => {
        //         console.log('请求错误:', err)
        //     })
        //     .finally(() => {
        //         isLoading.value = false
        //     })
        // return { isLoading, response }
        const res: T = await this.instance.post(url, { params, body });
        return res
    }
}