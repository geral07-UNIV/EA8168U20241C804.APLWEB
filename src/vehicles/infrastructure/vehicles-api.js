import {BaseApi} from "@/shared/infrastructure/base-api.js";
import {BaseEndpoint} from "@/shared/infrastructure/base-endpoint.js";

const vehiclesApiUrl                = import.meta.env.VITE_VEHICLES_API_URL;
const productsByCategoryEndpointPath = import.meta.env.VITE_PRODUCTS_BY_CATEGORY_ENDPOINT_PATH;

/**
 * vehicles api gateway for the dummyjson products by category endpoint
 */
export class VehiclesApi extends BaseApi {
    #productsByCategoryEndpoint;

    constructor() {
        super(vehiclesApiUrl);
        this.#productsByCategoryEndpoint = new BaseEndpoint(this, productsByCategoryEndpointPath);
    }

    getVehiclesByCategory(vehicleCategoryId) {
        return this.#productsByCategoryEndpoint.getById(vehicleCategoryId);
    }
}
