import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run bookstore:serve',
        production: 'nx run bookstore:preview',
      },
      ciWebServerCommand: 'nx run bookstore:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
