import {VehicleInventoryItem} from "@/showroom/domain/model/vehicle-inventory-item.entity.js";
import "@/showroom/infrastructure/showroom-resources.js";

/**
 * assembler that converts vehicle inventory item resources, responses and requests
 */
export class VehicleInventoryItemAssembler {
    static toEntityFromResource(resource) {
        return new VehicleInventoryItem({...resource});
    }

    static toEntitiesFromResponse(response) {
        if (response.status !== 200) {
            console.error(`${response.status}, ${response.statusText}`);
            return [];
        }
        return response.data.map(resource => {
            try {
                return this.toEntityFromResource(resource);
            } catch (error) {
                console.error(error.message);
                return null;
            }
        }).filter(item => item !== null);
    }

    static toRequestFromEntity(entity) {
        return {
            sectionId: entity.sectionId,
            vehicleCategoryId: entity.vehicleCategoryId,
            vehicleId: entity.vehicleId,
            vehicleName: entity.vehicleName,
            quantity: entity.quantity,
            registeredAt: entity.registeredAt.toISOString()
        };
    }
}
