// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://akronym.vercel.app',
    vite: {
        plugins: [tailwindcss()],
        server: {
            fs: {
                allow: ['..']
            }
        }
    },
    i18n: {
        defaultLocale: 'es',
        locales: ['es', 'en'],
        routing: {
            prefixDefaultLocale: false
        }
    }
});
