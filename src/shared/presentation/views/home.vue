<script setup lang="js">
import { useI18n } from "vue-i18n";
import ShowroomSectionSummaryList from "@/showroom/presentation/components/showroom-section-summary-list.vue";

/**
 * home view with the welcome message and the showroom collections
 */
const { t } = useI18n();
</script>

<template>
  <section class="flex flex-column gap-3" aria-labelledby="home-title">
    <h1 id="home-title" class="text-4xl font-bold m-0">{{ t('home.title') }}</h1>
    <p class="text-lg text-color-secondary m-0">{{ t('home.content') }}</p>
    <pv-divider/>
    <showroom-section-summary-list/>
  </section>
</template>

<style scoped>
</style>
