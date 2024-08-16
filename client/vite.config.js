import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/client/dist',
  plugins: [react()],
  server:{
    port:3000,
    open:true,
    proxy: {
        '/graphql' :{
          target: 'http://localhost:3001',
          secure:false,
          changeOrigin:true
        }
      }
  }
})