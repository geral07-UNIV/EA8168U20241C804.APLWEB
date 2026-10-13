<script setup lang="js">
import { computed, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { useShowroomStore } from "@/showroom/application/showroom.store.js";
import { useVehiclesStore } from "@/vehicles/application/vehicles.store.js";
import { VehicleInventoryItem } from "@/showroom/domain/model/vehicle-inventory-item.entity.js";
import { DateTime } from "@/shared/domain/model/date-time.js";

/**
 * view with the form to register a vehicle inventory item into a showroom section
 */
const { t } = useI18n();
const router = useRouter();
const showroomStore = useShowroomStore();
const vehiclesStore = useVehiclesStore();

const selectedSectionId = ref(null);
const selectedVehicleId = ref(null);
const quantity = ref(1);
const submitting = ref(false);
const createError = ref(false);

const showroomSections = computed(() => showroomStore.showroomSections);
const vehicles = computed(() => vehiclesStore.vehicles);
const selectedSection = computed(() => showroomStore.getShowroomSectionById(selectedSectionId.value));
const availableCapacity = computed(() => showroomStore.getAvailableCapacityBySectionId(selectedSectionId.value));
const capacityExceeded = computed(() => selectedSection.value !== null && quantity.value > availableCapacity.value);
const isValid = computed(() =>
  selectedSection.value !== null && selectedVehicleId.value !== null && quantity.value > 0 && !capacityExceeded.value);

const onSectionChange = () => {
  selectedVehicleId.value = null;
  vehiclesStore.clearVehicles();
  if (selectedSection.value) vehiclesStore.fetchVehiclesByCategory(selectedSection.value.vehicleCategory);
};

const navigateToHome = () => {
  router.push({ name: 'home' });
};

const createVehicleInventoryItem = () => {
  if (!isValid.value) return;
  const vehicle = vehiclesStore.getVehicleById(selectedVehicleId.value);
  const vehicleInventoryItem = new VehicleInventoryItem({
    sectionId: selectedSection.value.id,
    vehicleCategoryId: selectedSection.value.vehicleCategory,
    vehicleId: vehicle.id,
    vehicleName: vehicle.title,
    quantity: quantity.value,
    registeredAt: DateTime.now()
  });
  submitting.value = true;
  createError.value = false;
  showroomStore.createVehicleInventoryItem(vehicleInventoryItem)
    .then(() => navigateToHome())
    .catch(() => { createError.value = true; })
    .finally(() => { submitting.value = false; });
};

onMounted(() => {
  showroomStore.loadShowroom();
});
</script>

<template>
  <section class="flex flex-column gap-3" aria-labelledby="new-item-title">
    <h1 id="new-item-title" class="text-4xl font-bold m-0">{{ t('vehicle-inventory-item.title') }}</h1>
    <p class="text-lg text-color-secondary m-0">{{ t('vehicle-inventory-item.subtitle') }}</p>
    <pv-card class="w-full md:w-8 lg:w-6">
      <template #content>
        <form class="flex flex-column gap-4" :aria-label="t('vehicle-inventory-item.form')"
              @submit.prevent="createVehicleInventoryItem">
          <div class="flex flex-column gap-2">
            <label for="showroom-section">{{ t('vehicle-inventory-item.section') }}</label>
            <pv-select input-id="showroom-section" v-model="selectedSectionId" :options="showroomSections"
                       option-label="name" option-value="id" :placeholder="t('vehicle-inventory-item.select-section')"
                       class="w-full" aria-required="true" @change="onSectionChange"/>
            <small v-if="selectedSection" class="text-color-secondary" aria-live="polite">
              {{ t('vehicle-inventory-item.available-capacity', { capacity: availableCapacity }) }}
            </small>
          </div>
          <div class="flex flex-column gap-2">
            <label for="vehicle">{{ t('vehicle-inventory-item.vehicle') }}</label>
            <pv-select input-id="vehicle" v-model="selectedVehicleId" :options="vehicles" option-label="title"
                       option-value="id" :placeholder="t('vehicle-inventory-item.select-vehicle')" class="w-full"
                       :disabled="!selectedSection" :loading="vehiclesStore.loading" filter aria-required="true"/>
          </div>
          <div class="flex flex-column gap-2">
            <label for="quantity">{{ t('vehicle-inventory-item.quantity') }}</label>
            <pv-input-number input-id="quantity" v-model="quantity" :min="1" show-buttons :invalid="capacityExceeded"
                             aria-required="true" :aria-invalid="capacityExceeded"/>
            <pv-message v-if="capacityExceeded" severity="error" size="small" variant="simple" role="alert">
              {{ t('vehicle-inventory-item.capacity-exceeded') }}
            </pv-message>
          </div>
          <pv-message v-if="createError" severity="error" role="alert">{{ t('vehicle-inventory-item.create-error') }}</pv-message>
          <div class="flex justify-content-end gap-2">
            <pv-button type="button" :label="t('vehicle-inventory-item.cancel')" icon="pi pi-times" severity="secondary"
                       outlined @click="navigateToHome"/>
            <pv-button type="submit" :label="t('vehicle-inventory-item.create')" icon="pi pi-check"
                       :disabled="!isValid" :loading="submitting"/>
          </div>
        </form>
      </template>
    </pv-card>
  </section>
</template>

<style scoped>
</style>
