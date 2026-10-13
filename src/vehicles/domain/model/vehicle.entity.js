import {StringValidator} from "@/shared/domain/model/string-validator.js";

/**
 * vehicle entity provided by the dummyjson external catalog
 */
export class Vehicle {
    constructor({id = 0, title = "", category = "", brand = "", price = 0, thumbnail = ""}) {
        if (!StringValidator.isNotEmptyString(title)) {
            throw new Error('vehicle title must be a non-empty string');
        }
        this.id = id;
        this.title = title;
        this.category = category;
        this.brand = brand;
        this.price = price;
        this.thumbnail = thumbnail;
    }
}
