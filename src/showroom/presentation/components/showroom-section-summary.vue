<script setup lang="js">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { ShowroomSection } from "@/showroom/domain/model/showroom-section.entity.js";

/**
 * card summary of a showroom section with its vehicles, total vehicles and available capacity
 */
const { t } = useI18n();
const { section, vehicleInventoryItems } = defineProps({
  section: { type: ShowroomSection, required: true },
  vehicleInventoryItems: { type: Array, required: true }
});

const totalVehicles = computed(() => section.getTotalVehicles(vehicleInventoryItems));
const availableCapacity = computed(() => section.getAvailableCapacity(vehicleInventoryItems));
</script>

<template>
  <pv-card class="h-full" role="region" :aria-label="section.name">
    <template #title>{{ section.name }}</template>
    <template #content>
      <ul v-if="vehicleInventoryItems.length" class="list-none p-0 m-0" :aria-label="t('showroom-section.vehicles')">
        <li v-for="item in vehicleInventoryItems" :key="item.id"
            class="flex justify-content-between align-items-center py-2 border-bottom-1 surface-border">
          <span>{{ item.vehicleName }}</span>
          <span class="font-bold">{{ item.quantity }}</span>
        </li>
      </ul>
      <p v-else class="text-color-secondary m-0">{{ t('showroom-section.no-vehicles') }}</p>
    </template>
    <template #footer>
      <div class="flex justify-content-between gap-2">
        <span>{{ t('showroom-section.total-vehicles') }}: <strong>{{ totalVehicles }}</strong></span>
        <span>{{ t('showroom-section.available-capacity') }}: <strong>{{ availableCapacity }}</strong></span>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
</style>
