import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import * as path from "path";

export default defineConfig({
    plugins: [react()],
    root: "public",
    publicDir: "../public",
    build: {
        outDir: "../dist"
    },
    resolve: {
        alias: { "/src": path.resolve(process.cwd(), "src") }
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler' // or "modern"
            }
        }
    }
});
