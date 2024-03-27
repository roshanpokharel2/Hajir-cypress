const { exec } = require('child_process');
const path = require('path');

// Define the root directory containing your test files
const ROOT_DIR = 'Hajir-cypress/cypress/e2e/ApiTesting/Employeer';

// Define the list of test files in the order you want to run them
const testFiles = [
    'Authentication/e-body-regis.cy.js',
    'Authentication/e-get-profile.cy.js',
    'Company/Company-crud/e-post-companystore.cy.js'
      
];

// Function to run Cypress for each test file
const runTest = (testFile, configFile) => {
    const fullPath = path.join(ROOT_DIR, testFile);
    const command = `npx cypress run --spec "${fullPath}" --config-file ${configFile}`;
    exec(command, (error) => {
        if (error) {
            console.error(`Error running test ${testFile}: ${error}`);
            return;
        }
        console.log(`Test ${testFile} completed using configuration: ${configFile}`);
    });
};

// Run tests sequentially for each environment
const environments = [
    { name: 'staging', configFile: 'D:/ROSHAN FOLDERS/Github/Hajir-cypress/stage.config.js' },
    { name: 'production', configFile: 'D:/ROSHAN FOLDERS/Github/Hajir-cypress/prod.config.js' }
    // Add more environments as needed
];

environments.forEach(({ name, configFile }) => {
    console.log(`Running tests for environment: ${name}`);
    testFiles.forEach(testFile => runTest(testFile, configFile));
});
