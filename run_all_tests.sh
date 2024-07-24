#!/bin/bash

# Ensure the script exits if any command fails
set -e

# Run All Tests (JavaScript, TypeScript, Node.js) using Jest
echo "Running all tests using Jest..."
npm run test:jest

# Run All Tests (JavaScript, TypeScript, Node.js) using Mocha
echo "Running all tests using Mocha..."
npm run test:mocha

# Run Jest Tests for Node.js Only
echo "Running Jest tests for Node.js only..."
npm run test:node:jest

# Run Mocha Tests for Node.js Only
echo "Running Mocha tests for Node.js only..."
npm run test:node:mocha

# Run Jest Tests for JavaScript Only
echo "Running Jest tests for JavaScript only..."
npm run test:js:jest

# Run Mocha Tests for JavaScript Only
echo "Running Mocha tests for JavaScript only..."
npm run test:js:mocha

# Run Jest Tests for TypeScript Only
echo "Running Jest tests for TypeScript only..."
npm run test:ts:jest

# Run Mocha Tests for TypeScript Only
echo "Running Mocha tests for TypeScript only..."
npm run test:ts:mocha

echo "All tests executed successfully."
