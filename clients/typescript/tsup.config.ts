// tsup.config.ts
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/client.ts'],
  format: ['esm', 'cjs'],
  dts: false,
  clean: false,
  skipNodeModulesBundle: true,
  noExternal: [],
  silent: true
});
