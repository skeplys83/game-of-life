import { defineConfig } from 'vite';
import fs from 'fs'
import path from 'path'

export default defineConfig({
    server: {
        https: {
            key: fs.readFileSync(path.resolve(__dirname, '~/ssl-certs/key.pem')),
            cert: fs.readFileSync(path.resolve(__dirname, '~/ssl-certs/cert.pem'))
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