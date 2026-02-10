// Vue 3 SPA [Single (html) Page Application] entry point
// Uses the migrated app structure from src/app/app.ts
// Configuring a Vue page and attach that to a html element in the DOM

import { createApp } from '@/app/app'; // imports createApp function from app.ts

// Create app & router instance using the factory function
const { app, router } = createApp();

// Ensuring routing is initialized, then mount the app to the DOM (Vue 3 style)
router.isReady().then(() => {
    app.mount('#app');
});
