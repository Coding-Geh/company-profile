import { init, register, getLocaleFromNavigator } from 'svelte-i18n';

// Register locales
register('en', () => import('./locales/en.json'));
register('id', () => import('./locales/id.json'));

// Initialize i18n
init({
	fallbackLocale: 'en',
	initialLocale: getLocaleFromNavigator(),
});
