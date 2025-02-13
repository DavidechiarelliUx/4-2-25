import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // 👋 aggiungi la riga sottostante per aggiungere jsdom a vite
    environment: "jsdom",
    // hey! 👋 over here
    globals: true,
    setupFiles: "./src/tests/setup.js", // supponendo che la cartella test sia nella radice del nostro progetto
  },
});
