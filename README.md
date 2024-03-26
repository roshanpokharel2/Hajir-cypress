# Hajir-cypress

Welcome to **Hajir-cypress**, a collection of automation scripts for [Ha-jir App](#) - "A modern attendance system for smart people."

## Overview

This repository contains automated tests for both API and web testing of the Ha-jir application.
The tests ensure the reliability and functionality of the application across different environments.

## Prerequisites

Before running the automation scripts, ensure you have the following prerequisites installed on your machine:

- Node.js and npm installed
- Clone this repository to your local machine
- import or install all the required dependencies

## Running the Scripts

### API Testing

The API tests are located in the `ApiTesting` directory.

#### Steps to Run API Tests:
1. Open a terminal.
2. Navigate to the `ApiTesting` directory in the cloned repository.
3. Execute the following command:
   ```bash
   npx cypress open --config-file stage.config.js
  this is one sample for running one environment there may be many environment created you should handle it accordingly.
  
## Configuration

Make sure to configure your environment-specific settings in the corresponding configuration files (`dev.config.js`, `stage.config.js`, etc.).

# Web Testing

The web tests are implemented using Cypress and are located in the `web-tests` directory.

## Steps to Run Web Tests:

1. Open a terminal.
2. Navigate to the `web-tests` directory in the cloned repository.
3. Execute the following command:
    ```bash
    npx cypress open --config-file stage.config.js
    ```
4. Replace `stage.config.js` with the appropriate configuration file for your environment (`dev.config.js`, `stage.config.js`, etc.).
5. Cypress Test Runner will open, displaying the available test suites and specs.
6. Click on a test spec to run it, and Cypress will open a browser window to execute the test.

## Configuration

Make sure to configure your environment-specific settings in the corresponding configuration files (`dev.config.js`, `stage.config.js`, etc.).

### Author
*© 2024 **Roshan Pokharel**. All rights reserved.*


This README file provides a comprehensive guide with clear steps and descriptions for running the automation scripts for web testing and Api testing using Cypress for this project **Ha_Jir App**. It includes information on prerequisites, running the scripts, configuration, and authorship. Adjust the content and formatting as needed to fit your specific project requirements.

## CYPRESS RUNNING FOR FIRST TIME 

## Prerequisites
Ensure Node.js and npm are installed on your machine.

## Installation
```bash
# Install Cypress globally
npm install -g cypress
Project Setup

# Create a new directory for your project
mkdir my-cypress-project
cd my-cypress-project

# Initialize a new npm project
npm init -y

# Install Cypress as a development dependency
npm install --save-dev cypress
Writing Tests

# Open Cypress Test Runner

npx cypress open

Running Tests

# Run all tests headlessly
npx cypress run

# Run tests with specific browser
npx cypress run --browser chrome

# Run tests with specific tag(s)
npx cypress run --spec "cypress/integration/*" --tag "@smoke,@regression"

# Run tests and record results to Cypress Dashboard
npx cypress run --record --key <your_record_key>

Test Automation in CI/CD

# Run Cypress tests in CI mode (headlessly)
npm run cypress:run

Configuration

# Create a custom configuration file
touch cypress/config/myconfig.json

# Run tests with custom configuration
npx cypress run --config-file cypress/config/myconfig.json

Generating Reports

# Generate mochawesome report
npx cypress run --reporter mochawesome

# Generate HTML report
npx mochawesome-merge cypress/reports/*.json > cypress/reports/mochawesome.json
npx marge cypress/reports/mochawesome.json -o cypress/reports

Managing Dependencies

# Install a Cypress plugin
npm install --save-dev cypress-plugin-name

# Uninstall a Cypress plugin
npm uninstall --save-dev cypress-plugin-name

Version Management

# Check Cypress version
npx cypress -v

# Update Cypress to the latest version
npm update cypress
   
   
