import { defineConfig } from 'vite';
import fs from 'fs'

export default defineConfig({
    server: {
        https: {
            key: fs.readFileSync('/ssl-certs/key.pem'),
            cert: fs.readFileSync('/ssl-certs/cert.pem')
        },
        allowedHosts: [
            'martinhustoles.com', // Your production domain
            'localhost',          // Local development
            '0.0.0.0'             // Docker internal
        ],
        host: '0.0.0.0',        // Required for Docker
        strictPort: true
    }
});