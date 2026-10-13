<script setup lang="js">
import { computed, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { useShowroomStore } from "@/showroom/application/showroom.store.js";
import ShowroomSectionSummary from "./showroom-section-summary.vue";

/**
 * grid list of showroom section summaries with two cards per row
 */
const { t } = useI18n();
const showroomStore = useShowroomStore();
const showroomSections = computed(() => showroomStore.showroomSections);
const errors = computed(() => showroomStore.errors);

onMounted(() => {
  showroomStore.loadShowroom();
});
</script>

<template>
  <section aria-labelledby="showroom-collections-title">
    <h2 id="showroom-collections-title" class="text-2xl font-semibold mt-0 mb-3">{{ t('showroom-section.collections') }}</h2>
    <pv-message v-if="errors.length" severity="error" role="alert">{{ t('unavailable-content') }}</pv-message>
    <div class="grid" role="list">
      <div v-for="section in showroomSections" :key="section.id" class="col-12 md:col-6" role="listitem">
        <showroom-section-summary :section="section"
                                  :vehicle-inventory-items="showroomStore.getVehicleInventoryItemsBySectionId(section.id)"/>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
