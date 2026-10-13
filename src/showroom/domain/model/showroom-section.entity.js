import {StringValidator} from "@/shared/domain/model/string-validator.js";

/**
 * showroom section entity that computes its total vehicles and available capacity
 */
export class ShowroomSection {
    constructor({id = 0, name = "", vehicleCategory = "", maxCapacity = 0}) {
        if (!StringValidator.isNotEmptyString(name)) {
            throw new Error('showroom section name must be a non-empty string');
        }
        if (!Number.isInteger(maxCapacity) || maxCapacity < 0) {
            throw new Error('showroom section max capacity must be a non-negative integer');
        }
        this.id = id;
        this.name = name;
        this.vehicleCategory = vehicleCategory;
        this.maxCapacity = maxCapacity;
    }

    getTotalVehicles(vehicleInventoryItems) {
        return vehicleInventoryItems
            .filter(item => item.sectionId === this.id)
            .reduce((total, item) => total + item.quantity, 0);
    }

    getAvailableCapacity(vehicleInventoryItems) {
        return this.maxCapacity - this.getTotalVehicles(vehicleInventoryItems);
    }
}
