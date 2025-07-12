import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1440,
  viewportHeight: 841,
  e2e: {
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
