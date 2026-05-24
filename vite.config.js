import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig(async ({ command }) => {
  const plugins = [];

  if (command === 'serve') {
    const { default: base44 } = await import('@base44/vite-plugin');
    plugins.push(
      base44({
        legacySDKImports: false,
        hmrNotifier: true,
        navigationNotifier: true,
        analyticsTracker: true,
        visualEditAgent: true,
      })
    );
  }

  plugins.push(
    react(),
    {
      name: 'optimize-critical-render-path',
      enforce: 'post',
      transformIndexHtml(html) {
        return html.replace(
          /<link rel="stylesheet" crossorigin href="([^"]+)">/g,
          `<link rel="preload" as="style" crossorigin fetchpriority="low" href="$1" onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet" crossorigin href="$1"></noscript>`
        );
      },
    },
  );

  return {
    logLevel: 'error', // Suppress warnings, only show errors
    resolve: {
      alias: {
        '@': path.resolve(rootDir, 'src'),
      },
    },
    server: {
      allowedHosts: ['.base44.app', '.base44.com', '.modal.host'],
    },
    preview: {
      allowedHosts: ['.base44.app', '.base44.com', '.modal.host'],
    },
    plugins,
  };
});
