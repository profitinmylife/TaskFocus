import path from 'path'

import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@app': path.resolve(__dirname, './src/app'),
            '@shared': path.resolve(__dirname, './src/shared'),
            '@features': path.resolve(__dirname, './src/features'),
            '@widgets': path.resolve(__dirname, './src/widgets'),
        }
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/test/setup.ts',
        alias: [
            { find: '@', replacement: path.resolve(__dirname, './src') },
            { find: '@app', replacement: path.resolve(__dirname, './src/app') },
        ]
    }
})