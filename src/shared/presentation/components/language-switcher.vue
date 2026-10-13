<script setup lang="js">
import { useI18n } from 'vue-i18n';

/**
 * presentation component for switching the application's locale
 *
 * @remarks
 * uses the vue-i18n instance to display and update the current language
 */
const { locale, availableLocales } = useI18n();
</script>

<template>
  <pv-select-button v-model="locale" :options="availableLocales">
    <template #option="slotProps">
      <span>{{ slotProps.option }}</span>
    </template>
  </pv-select-button>
</template>

<style scoped>

</style>