import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'index.ts',
      name: 'BottomSheet',
      fileName: 'bundle',
    },
    rollupOptions: {
      external: [
        'react',
        'styled-components'
      ],
    },
  },
});
