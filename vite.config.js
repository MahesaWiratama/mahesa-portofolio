import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    base: '/mahesa-portofolio/',

    plugins: [
        tailwindcss()
    ],

    build: {
        rollupOptions: {
            input: {
                main: resolve(import.meta.dirname, 'index.html'),
                about: resolve(import.meta.dirname, 'about.html'),
                projects: resolve(import.meta.dirname, 'projects.html'),
                skills: resolve(import.meta.dirname, 'skills.html')
            }
        }
    }
})
