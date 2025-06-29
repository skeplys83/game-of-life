import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        https: {
            key: fs.readFileSync(path.resolve(__dirname, '/etc/letsencrypt/live/martinhustoles.com/privkey.pem')),
            cert: fs.readFileSync(path.resolve(__dirname, '/etc/letsencrypt/live/martinhustoles.com/fullchain.pem'))
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