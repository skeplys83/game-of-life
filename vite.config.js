import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        allowedHosts: [
        'martinhustoles.com', // Your production domain
        'localhost',          // Local development
        '0.0.0.0'             // Docker internal
        ],
        host: '0.0.0.0',        // Required for Docker
        strictPort: true
    }
});