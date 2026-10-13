import {BaseApi} from "@/shared/infrastructure/base-api.js";
import {BaseEndpoint} from "@/shared/infrastructure/base-endpoint.js";

const showroomApiUrl                    = import.meta.env.VITE_SHOWROOM_API_URL;
const showroomSectionsEndpointPath      = import.meta.env.VITE_SHOWROOM_SECTIONS_ENDPOINT_PATH;
const vehicleInventoryItemsEndpointPath = import.meta.env.VITE_VEHICLE_INVENTORY_ITEMS_ENDPOINT_PATH;

/**
 * showroom api gateway for sections and vehicle inventory items on the fake api
 */
export class ShowroomApi extends BaseApi {
    #showroomSectionsEndpoint;
    #vehicleInventoryItemsEndpoint;

    constructor() {
        super(showroomApiUrl);
        this.#showroomSectionsEndpoint = new BaseEndpoint(this, showroomSectionsEndpointPath);
        this.#vehicleInventoryItemsEndpoint = new BaseEndpoint(this, vehicleInventoryItemsEndpointPath);
    }

    getShowroomSections() {
        return this.#showroomSectionsEndpoint.getAll();
    }

    getVehicleInventoryItems() {
        return this.#vehicleInventoryItemsEndpoint.getAll();
    }

    createVehicleInventoryItem(request) {
        return this.#vehicleInventoryItemsEndpoint.create(request);
    }
}
