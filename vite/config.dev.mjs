import { defineConfig } from 'vite';

export default defineConfig({
    base: './',
    build: {
        target: 'es2015'
    },
    server: {
        port: 8080
    }
});
