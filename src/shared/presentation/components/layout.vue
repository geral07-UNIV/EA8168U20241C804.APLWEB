<script setup lang="js">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { LogoDevApi } from "@/shared/infrastructure/logo-dev-api.js";
import LanguageSwitcher from "./language-switcher.vue";

/**
 * root presentation layout with toolbar, collapsible sidebar and routed content
 */
const { t } = useI18n();
const router = useRouter();
const drawerVisible = ref(false);
const logoUrl = new LogoDevApi().getUrlToLogo(import.meta.env.VITE_COMPANY_DOMAIN);

const options = [
  { label: 'sidebar.home', icon: 'pi pi-home', path: '/home' },
  { label: 'sidebar.new-vehicle-inventory-item', icon: 'pi pi-plus-circle', path: '/vehicle/items/new' }
];

const toggleDrawer = () => {
  drawerVisible.value = !drawerVisible.value;
};

const navigateTo = path => {
  router.push(path);
  drawerVisible.value = false;
};
</script>

<template>
  <div class="flex flex-column min-h-screen surface-ground">
    <header class="sticky top-0 z-5">
      <pv-toolbar class="border-noround" role="banner">
        <template #start>
          <div class="flex align-items-center gap-3">
            <pv-button icon="pi pi-bars" text rounded :aria-label="t('toolbar.open-menu')"
                       :aria-expanded="drawerVisible" @click="toggleDrawer"/>
            <pv-avatar :image="logoUrl" shape="square" size="large" :aria-label="t('toolbar.logo')"/>
            <span class="text-xl font-bold">{{ t('toolbar.title') }}</span>
          </div>
        </template>
      </pv-toolbar>
    </header>
    <pv-drawer v-model:visible="drawerVisible" :header="t('toolbar.title')">
      <div class="flex flex-column justify-content-between h-full">
        <nav class="flex flex-column gap-2" :aria-label="t('sidebar.navigation')">
          <pv-button v-for="option in options" :key="option.path" :label="t(option.label)" :icon="option.icon"
                     text class="justify-content-start" @click="navigateTo(option.path)"/>
        </nav>
        <div class="flex justify-content-center pt-3">
          <language-switcher/>
        </div>
      </div>
    </pv-drawer>
    <main class="flex-1 p-4" role="main">
      <router-view/>
    </main>
  </div>
</template>

<style scoped>
</style>
