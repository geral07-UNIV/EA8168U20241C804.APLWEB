/**
 * axios interceptor for centralized error handling with user-friendly messages
 */
export const errorInterceptor = {
    onResponse: (response) => response,

    onError: (error) => {
        let message;
        if (error.response) {
            console.error("status:", error.response.status);
            message = error.response.data["message"] || `error ${error.response.status}: ${error.response.statusText.toLowerCase()}`;
        } else if (error.request) {
            console.error("request:", error.request);
            message = "no response received from the server, please check your internet connection";
        } else {
            console.error("error message:", error.message);
            message = error.message;
        }
        return Promise.reject(message);
    }
};
