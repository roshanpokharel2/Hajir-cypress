///<reference types="cypress" />
describe('Login Form Validation Hajir App', () => {
  beforeEach(() => {
    cy.visit('https://hajirnext.vercel.app/login'); // Visit the login page before each test
  });

//CASE-1
  it('should Login for valid phone number', () => {
    cy.get("img[alt='Logo']").should('be.visible');
    cy.get("input[id='phone']").type('9861389660');// Type valid phone number into the phone input field
    cy.get("input[type='checkbox']").click() 
    cy.get("button[type='submit']").click() // Click on Get Otp 
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.contains('Successfully Registered.'); // Assert that the alert text contains the expected error message
      return true;
    });
    cy.get("button[type='submit']").click()
    cy.url().should('eq', 'https://hajirnext.vercel.app/dashboard');
    window.location.reload(true);
    cy.wait(5000);
  });
  
//CASE-2
  it('should display error message for invalid OTP', () => {
    cy.get("input[id='phone']").type('9861389660');
    cy.get("input[type='checkbox']").click() 
    cy.get("button[type='submit']").click().then(()=>{
    cy.on('window:alert', (alertText) => {
    if(alertText.includes('Successfully Registered')) {
    expect(alertText).to.contains('Successfully Registered');
    }
    });
    });
    cy.get('#otp-input-0').clear().type('8');
    cy.get('#otp-input-1').clear().type('8');
    cy.get('#otp-input-2').clear().type('8');
    cy.get('#otp-input-3').clear().type('8');
    cy.get("button[type='submit']").click().then(()=>{
    cy.on('window:alert', (alertText) => {
    expect(alertText).to.contains('An error occurred during OTP verification. Please try again.'); // Assert that the alert text contains the expected error message
    return true;
    });
    });
    });

//CASE-3
  it('should display error message for invalid phone number', () => {
    cy.get("input[id='phone']").type(1111111111); // Clear the phone input field
    cy.get("input[type='checkbox']").click() 
    cy.get("button[type='submit']").click(); // Click on the submit button
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.contains('Phone number must start with 98, 97, or 96 and be exactly 10 digits'); // Assert that the alert text contains the expected error message
      return true;
     });   
      cy.get("button[type='submit']").click()
  });

//CASE-4
it('should display error message for incomplete phone number', () => {
  cy.get("input[id='phone']").type(9861); // Clear the phone input field
  cy.get("input[type='checkbox']").click() 
  cy.get("button[type='submit']").click(); // Click on the submit button
  cy.on('window:alert', (alertText) => {
    expect(alertText).to.contains('Phone number must start with 98, 97, or 96 and be exactly 10 digits'); // Assert that the alert text contains the expected error message
    return true;
   });   
    cy.get("button[type='submit']").click()
});

//CASE-5 
it('should be able to Request new otp', () => {
   cy.get("input[id='phone']").type('9861389660');// Type valid phone number into the phone input field
  cy.get("input[type='checkbox']").click() 
  cy.get("button[type='submit']").click() // Click on Get Otp 
  cy.on('window:alert', (alertText) => {
    expect(alertText).to.contains('Successfully Registered.'); // Assert that the alert text contains the expected error message
    return true;
  });
  cy.wait(30000);
  cy.get("button[type='button']").click()
  cy.on('window:alert', (alertText) => {
    expect(alertText).to.contains('Successfully Registered.'); // Assert that the alert text contains the expected error message
    return true;
  });
  cy.get("button[type='submit']").click()
  cy.url().should('eq', 'https://hajirnext.vercel.app/dashboard');
  window.location.reload(true);
  cy.wait(5000);
});  

//CASE-6
it('Should be able to view terms and conditions',()=>{
  cy.contains('Terms & Services').click();
});
});
