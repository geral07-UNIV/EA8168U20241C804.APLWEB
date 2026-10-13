/**
 * custom type definitions for the vite environment variables
 *
 * @remarks
 * this allows for better type checking and autocompletion when using the environment variables in the code
 */

/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_SHOWROOM_API_URL: string;
  readonly VITE_SHOWROOM_SECTIONS_ENDPOINT_PATH: string;
  readonly VITE_VEHICLE_INVENTORY_ITEMS_ENDPOINT_PATH: string;
  readonly VITE_VEHICLES_API_URL: string;
  readonly VITE_PRODUCTS_BY_CATEGORY_ENDPOINT_PATH: string;
  readonly VITE_LOGO_API_URL: string;
  readonly VITE_LOGO_PUBLISHABLE_API_KEY: string;
  readonly VITE_COMPANY_DOMAIN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
