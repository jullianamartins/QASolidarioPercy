// cypress.config.js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // Suas configurações de teste E2E
    // Por exemplo:
    supportFile: false,
    baseUrl: 'http://localhost:3000',
    // ... outras configurações
  },
  // ... outras configurações globais
});


