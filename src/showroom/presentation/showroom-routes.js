const VehicleInventoryItemNew = () => import("@/showroom/presentation/views/vehicle-inventory-item-new.vue");

/**
 * child routes of the showroom bounded context
 */
const showroomRoutes = [
    { path: 'items/new', name: 'vehicle-inventory-item-new', component: VehicleInventoryItemNew, meta: { title: 'new vehicle inventory item' } }
];

export default showroomRoutes;
