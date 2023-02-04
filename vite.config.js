import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test:{
    environment: 'jsdom', 
    globals: true,
    coverage: {
      reporter: ['text', 'json', 'html'],
      exclude: ['src/auth/*', 'src/mocks/*', 'src/tests/*']
    },    
  },   
  preview: {
    port: process.env.PORT || 8001
  },
})
