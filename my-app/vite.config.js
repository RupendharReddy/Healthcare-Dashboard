import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Uncomment this line

export default defineConfig({
  plugins: [react()], // Uncomment this line
  server: {
    host: '0.0.0.0'
  }
})