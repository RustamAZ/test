import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';

const phasermsg = () => {
    return {
        name: 'phasermsg',
        buildStart() {
            process.stdout.write(`Building for production...\n`);
        },
        buildEnd() {
            const line = "---------------------------------------------------------";
            const msg = `❤️❤️❤️ Tell us about your game! - games@phaser.io ❤️❤️❤️`;
            process.stdout.write(`${line}\n${msg}\n${line}\n`);
            
            process.stdout.write(`✨ Done ✨\n`);
        }
    }
}   

export default defineConfig({
    base: './',
    logLevel: 'warning',
    build: {
        target: 'es2015',
        minify: false
    },
    server: {
        port: 8080
    },
    plugins: [
        phasermsg(),
        legacy({
            targets: ['defaults', 'not IE 11'],
            modernPolyfills: true
        })
    ]
});
