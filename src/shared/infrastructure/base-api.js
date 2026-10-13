import axios from "axios";
import {errorInterceptor} from "@/shared/infrastructure/error.interceptor.js";

/**
 * base api that creates a configured axios http client for a given base url
 */
export class BaseApi {
    #http;

    constructor(baseUrl) {
        this.#http = axios.create({ baseURL: baseUrl });
        this.#http.interceptors.response.use(errorInterceptor.onResponse, errorInterceptor.onError);
    }

    get http() {
        return this.#http;
    }
}
