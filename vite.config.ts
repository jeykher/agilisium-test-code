import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: path.resolve(__dirname, 'src')
            },
            {
                find: '@Artist',
                replacement: path.resolve(__dirname, 'src/Artist')
            },
            {
                find: '@Core',
                replacement: path.resolve(__dirname, 'src/Core')
            },
            {
                find: '@Packages',
                replacement: path.resolve(__dirname, 'src/Packages')
            },
            {
                find: '@Song',
                replacement: path.resolve(__dirname, 'src/Song')
            },
            {
                find: '@Test',
                replacement: path.resolve(__dirname, 'src/Test')
            }
        ]
    },
    server: {
        port: 3000
    }
});
