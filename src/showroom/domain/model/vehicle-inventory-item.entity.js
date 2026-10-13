import {StringValidator} from "@/shared/domain/model/string-validator.js";
import {DateTime} from "@/shared/domain/model/date-time.js";

/**
 * vehicle inventory item entity assigned to a showroom section
 */
export class VehicleInventoryItem {
    constructor({id = null, sectionId = 0, vehicleCategoryId = "", vehicleId = 0, vehicleName = "", quantity = 1, registeredAt = new Date()}) {
        if (!StringValidator.isNotEmptyString(vehicleName)) {
            throw new Error('vehicle name must be a non-empty string');
        }
        if (!Number.isInteger(quantity) || quantity <= 0) {
            throw new Error('quantity must be a positive integer');
        }
        this.id = id;
        this.sectionId = sectionId;
        this.vehicleCategoryId = vehicleCategoryId;
        this.vehicleId = vehicleId;
        this.vehicleName = vehicleName;
        this.quantity = quantity;
        this.registeredAt = registeredAt instanceof DateTime ? registeredAt : new DateTime(registeredAt);
    }
}
