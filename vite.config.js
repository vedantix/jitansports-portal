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
      name: 'preload-built-fonts',
      enforce: 'post',
      transformIndexHtml(html, ctx) {
        const bundle = ctx?.bundle || {};
        const fontPreloads = Object.values(bundle)
          .filter((asset) => asset?.fileName?.endsWith('.woff2'))
          .map((asset) => `<link rel="preload" as="font" type="font/woff2" crossorigin href="/${asset.fileName}">`);

        if (!fontPreloads.length) return html;

        return html.replace('</head>', `${fontPreloads.join('\n')}\n</head>`);
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
