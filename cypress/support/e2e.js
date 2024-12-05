// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
const chaiString = require('chai-string');
chai.use(chaiString);
// Import commands.js using ES2015 syntax:
import "./commands";
var chaiSubset = require("chai-subset");
chai.use(chaiSubset);

// Installing cypress-xpath
require("cypress-xpath");
// Alternatively you can use CommonJS syntax:
// require('./commands')