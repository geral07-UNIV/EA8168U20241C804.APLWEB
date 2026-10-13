import {Vehicle} from "@/vehicles/domain/model/vehicle.entity.js";
import "@/vehicles/infrastructure/vehicles-resources.js";

/**
 * assembler that converts dummyjson vehicle resources into domain entities
 */
export class VehicleAssembler {
    static toEntityFromResource(resource) {
        return new Vehicle({...resource});
    }

    static toEntitiesFromResponse(response) {
        if (response.status !== 200) {
            console.error(`${response.status}, ${response.statusText}`);
            return [];
        }
        return (response.data.products ?? []).map(resource => {
            try {
                return this.toEntityFromResource(resource);
            } catch (error) {
                console.error(error.message);
                return null;
            }
        }).filter(vehicle => vehicle !== null);
    }
}
