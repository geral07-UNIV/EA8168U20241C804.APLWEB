<script setup lang="js">
import { useI18n } from 'vue-i18n';

/**
 * presentation component for switching the application locale between en and es
 */
const { t, locale, availableLocales } = useI18n();
</script>

<template>
  <pv-select-button v-model="locale" :options="availableLocales" :allow-empty="false"
                    :aria-label="t('sidebar.language')"/>
</template>

<style scoped>
</style>
