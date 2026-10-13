<script setup lang="js">
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";

/**
 * page not found view showing the unsupported route and a way back to home
 */
const { t } = useI18n();
const route = useRoute();
const router = useRouter();

const navigateToHome = () => {
  router.push({ name: 'home' });
};
</script>

<template>
  <section class="flex flex-column align-items-center justify-content-center gap-3 p-6 text-center" role="alert"
           aria-labelledby="page-not-found-title">
    <i class="pi pi-exclamation-triangle text-6xl text-color-secondary" aria-hidden="true"/>
    <h1 id="page-not-found-title" class="text-4xl font-bold m-0">{{ t('page-not-found.title') }}</h1>
    <p class="text-lg m-0">{{ t('page-not-found.message', { path: route.fullPath }) }}</p>
    <pv-button :label="t('page-not-found.back-home')" icon="pi pi-home" @click="navigateToHome"
               :aria-label="t('page-not-found.back-home')"/>
  </section>
</template>

<style scoped>
</style>
