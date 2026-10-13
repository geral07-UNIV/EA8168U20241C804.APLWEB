import { createApp } from 'vue'
import './style.css'
import App from './app.vue'
import i18n from "./i18n.js";
import PrimeVue from 'primevue/config';
import Material from '@primeuix/themes/material';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import {Avatar, Button, Card, Drawer, Menu, Menubar, Popover, SelectButton, Toolbar, Tooltip} from "primevue";

/**
 * application composition root
 *
 * @remarks
 * specifies the main entry point of the vue application, configuring global plugins, components, and mounting the app to the dom
 */

createApp(App)
    .use(i18n)
    .use(PrimeVue, { ripple: true, theme: { preset: Material } })
    .component('pv-button', Button)
    .component('pv-select-button', SelectButton)
    .component('pv-avatar', Avatar)
    .component('pv-drawer', Drawer)
    .component('pv-card', Card)
    .component('pv-toolbar', Toolbar)
    .component('pv-menu', Menu)
    .component('pv-menubar', Menubar)
    .component('pv-popover', Popover)
    .directive('tooltip', Tooltip)
    .mount('#app')
