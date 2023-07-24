import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    chromeWebSecurity : false,
    watchForFileChanges:false,
    defaultCommandTimeout : 5000,
    
  },
});
