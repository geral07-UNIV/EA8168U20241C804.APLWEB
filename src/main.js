import { createApp } from 'vue'
import './style.css'
import App from './app.vue'
import i18n from "./i18n.js";
import router from "./router.js";
import { createPinia } from "pinia";
import PrimeVue from 'primevue/config';
import Material from '@primeuix/themes/material';
import { definePreset } from '@primeuix/themes';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import {Avatar, Button, Card, Divider, Drawer, Message, SelectButton, Toolbar, Tooltip} from "primevue";

/**
 * application composition root with material preset tuned to the astara dark minimal style
 */
const AstaraPreset = definePreset(Material, {
    semantic: {
        primary: {
            50: '{zinc.50}', 100: '{zinc.100}', 200: '{zinc.200}', 300: '{zinc.300}', 400: '{zinc.400}',
            500: '{zinc.500}', 600: '{zinc.600}', 700: '{zinc.700}', 800: '{zinc.800}', 900: '{zinc.900}', 950: '{zinc.950}'
        }
    }
});

createApp(App)
    .use(createPinia())
    .use(router)
    .use(i18n)
    .use(PrimeVue, { ripple: true, theme: { preset: AstaraPreset, options: { darkModeSelector: false } } })
    .component('pv-avatar', Avatar)
    .component('pv-button', Button)
    .component('pv-card', Card)
    .component('pv-divider', Divider)
    .component('pv-drawer', Drawer)
    .component('pv-message', Message)
    .component('pv-select-button', SelectButton)
    .component('pv-toolbar', Toolbar)
    .directive('tooltip', Tooltip)
    .mount('#app')
