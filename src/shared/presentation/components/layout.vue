<script lang="js" setup>

import LanguageSwitcher from "./language-switcher.vue";
import FooterContent from "./footer-content.vue";

/**
 * root presentation layout for the astara showroom application
 *
 * @remarks
 * coordinates the display of the toolbar and the main content area
 */

</script>

<template>
  <div class="flex flex-column min-h-screen">
    <header>
      <pv-menubar>
        <template #start>
          <span class="font-bold">astara showroom management</span>
        </template>
        <template #end>
          <language-switcher/>
        </template>
      </pv-menubar>
    </header>
    <main class="flex-1 p-4"></main>
    <footer>
      <footer-content/>
    </footer>
  </div>
</template>

<style scoped>
</style>
