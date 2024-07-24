import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const mocha = require('mocha');

global.describe = mocha.describe;
global.it = mocha.it;
global.before = mocha.before;
global.after = mocha.after;
global.beforeEach = mocha.beforeEach;
global.afterEach = mocha.afterEach;
