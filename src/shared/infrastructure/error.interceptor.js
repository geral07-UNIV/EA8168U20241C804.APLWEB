/**
 * axios interceptor for centralized error handling
 *
 * @remarks
 * this object contains the success and error handlers for axios response interceptors
 * it simplifies error messages from the server and provides fallback messages for
 * network errors
 */
export const errorInterceptor = {
    /**
     * handles successful responses
     * @param {import('axios').AxiosResponse} response - the axios response
     * @returns {import('axios').AxiosResponse} the same response
     */
    onResponse: (response) => response,

    /**
     * handles error responses
     * @param {import('axios').AxiosError} error - the axios error
     * @returns {Promise<never>} a rejected promise with a user-friendly error message
     */
    onError: (error) => {
        let message;

        if (error.response) {
            // the request was made, and the server responded with a status code
            // that falls out of the range of 2xx
            console.error("data:", error.response.data);
            console.error("status:", error.response.status);
            console.error("headers:", error.response.headers);

            message = error.response.data["message"] || `error ${error.response.status}: ${error.response.statusText.toLowerCase()}`;
        } else if (error.request) {
            // the request was made but no response was received
            console.error("request:", error.request);
            message = "no response received from the server, please check your internet connection";
        } else {
            // something happened in setting up the request that triggered an error
            console.error("error message:", error.message);
            message = error.message;
        }

        return Promise.reject(message);
    }
};
