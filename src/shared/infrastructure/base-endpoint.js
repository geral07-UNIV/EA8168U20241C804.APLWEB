/**
 * base endpoint that exposes common http operations for a resource path
 */
export class BaseEndpoint {
    #http;
    #endpointPath;

    constructor(baseApi, endpointPath) {
        this.#http = baseApi.http;
        this.#endpointPath = endpointPath;
    }

    getAll(params = {}) {
        return this.#http.get(this.#endpointPath, { params });
    }

    getById(id) {
        return this.#http.get(`${this.#endpointPath}/${id}`);
    }

    create(resource) {
        return this.#http.post(this.#endpointPath, resource);
    }
}
