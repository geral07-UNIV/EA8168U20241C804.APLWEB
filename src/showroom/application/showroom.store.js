import {defineStore} from "pinia";
import {ShowroomApi} from "@/showroom/infrastructure/showroom-api.js";
import {ShowroomSectionAssembler} from "@/showroom/infrastructure/showroom-section.assembler.js";
import {VehicleInventoryItemAssembler} from "@/showroom/infrastructure/vehicle-inventory-item.assembler.js";

const showroomApi = new ShowroomApi();

/**
 * pinia store for the showroom bounded context state and use cases
 */
export const useShowroomStore = defineStore('showroom', {
    state: () => ({
        showroomSections: [],
        vehicleInventoryItems: [],
        errors: []
    }),
    getters: {
        getVehicleInventoryItemsBySectionId: state => sectionId =>
            state.vehicleInventoryItems.filter(item => item.sectionId === sectionId),
        getShowroomSectionById: state => id =>
            state.showroomSections.find(section => section.id === id) ?? null
    },
    actions: {
        loadShowroom() {
            this.errors = [];
            return Promise.all([this.fetchShowroomSections(), this.fetchVehicleInventoryItems()]);
        },
        fetchShowroomSections() {
            return showroomApi.getShowroomSections().then(response => {
                this.showroomSections = ShowroomSectionAssembler.toEntitiesFromResponse(response);
            }).catch(message => {
                this.errors.push(message);
                this.showroomSections = [];
            });
        },
        fetchVehicleInventoryItems() {
            return showroomApi.getVehicleInventoryItems().then(response => {
                this.vehicleInventoryItems = VehicleInventoryItemAssembler.toEntitiesFromResponse(response);
            }).catch(message => {
                this.errors.push(message);
                this.vehicleInventoryItems = [];
            });
        }
    }
});
