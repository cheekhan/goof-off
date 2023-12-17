import vue from '@vitejs/plugin-vue'
import path from "path"
import { defineConfig } from 'vite'
import type { ViteDevServer } from "vite"
import mock from "./src/mock/index"

interface mockOpts {
    path?: string, // 进行拦截的请求前缀
}
// mock server
const mockServer = (opts: mockOpts) => {
    return {
        name: "vite-plugin-mock-server",
        configureServer(server: ViteDevServer) {
            server.middlewares.use((req, res, next) => {
                const url = req.url;
                if (url.startsWith(opts.path)) {
                    const key = url.replace(opts.path, '')
                    const response = mock[key]
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(response));
                } else {
                    next()
                }
            })
        }
    }
}

const mockOpts: mockOpts = {
    path: '/test-api'
}

// https://vitejs.dev/config/
export default defineConfig({
    envDir: "./src",
    server: {
        host: '0.0.0.0'
    },
    plugins: [
        vue(),
        mockServer(mockOpts)
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    },
})
