import {defineStore} from "pinia";
import {VehiclesApi} from "@/vehicles/infrastructure/vehicles-api.js";
import {VehicleAssembler} from "@/vehicles/infrastructure/vehicle.assembler.js";

const vehiclesApi = new VehiclesApi();

/**
 * pinia store for the vehicles bounded context catalog by category
 */
export const useVehiclesStore = defineStore('vehicles', {
    state: () => ({
        vehicles: [],
        loading: false,
        errors: []
    }),
    getters: {
        getVehicleById: state => id => state.vehicles.find(vehicle => vehicle.id === id) ?? null
    },
    actions: {
        fetchVehiclesByCategory(vehicleCategoryId) {
            this.errors = [];
            this.loading = true;
            return vehiclesApi.getVehiclesByCategory(vehicleCategoryId).then(response => {
                this.vehicles = VehicleAssembler.toEntitiesFromResponse(response);
            }).catch(message => {
                this.errors.push(message);
                this.vehicles = [];
            }).finally(() => {
                this.loading = false;
            });
        },
        clearVehicles() {
            this.vehicles = [];
        }
    }
});
