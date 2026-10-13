/**
 * @typedef {Object} ShowroomSectionResource
 * @property {number} id
 * @property {string} name
 * @property {string} vehicleCategory
 * @property {number} maxCapacity
 *
 * @typedef {ShowroomSectionResource[]} ShowroomSectionsResponse
 *
 * @typedef {Object} VehicleInventoryItemResource
 * @property {number} id
 * @property {number} sectionId
 * @property {string} vehicleCategoryId
 * @property {number} vehicleId
 * @property {string} vehicleName
 * @property {number} quantity
 * @property {string} registeredAt
 *
 * @typedef {VehicleInventoryItemResource[]} VehicleInventoryItemsResponse
 *
 * @typedef {Object} CreateVehicleInventoryItemRequest
 * @property {number} sectionId
 * @property {string} vehicleCategoryId
 * @property {number} vehicleId
 * @property {string} vehicleName
 * @property {number} quantity
 * @property {string} registeredAt
 */
export {}
