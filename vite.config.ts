import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { envVariables } from "./src/ui/utils/env";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist-react"
  },
  server: {
    port: envVariables.PORT,
    strictPort: true
  },
  base: "./"
})
