///<reference types="cypress" />
describe('Logout For Hajir App', () => {
    beforeEach(() => {
      cy.visit('https://hajirnext.vercel.app/login'); // Visit the login page before each test
    });
  
  //CASE-1
    it('should be able to Logout', () => {
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
      // window.location.reload(true);
      cy.wait(5000);
     cy.get("div[role='button'] span[class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary mui-7mi4rk']").click()

    });
});