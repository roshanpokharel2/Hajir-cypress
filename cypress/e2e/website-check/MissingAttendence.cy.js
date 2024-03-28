///<reference types="Cypress" />

describe('Adding Missing Attendence',()=>{
    beforeEach(()=>{
        cy.visit('https://hajirnext.vercel.app/login')
        cy.get("input[id='phone']").type('9861389660');// Type valid phone number into the phone input field
        cy.get("input[type='checkbox']").click() 
        cy.get("button[type='submit']").click() // Click on Get Otp 
        cy.on('window:alert', (alertText) => {
          expect(alertText).to.contains('Successfully Registered.'); 
          return true;
        });
        cy.get("button[type='submit']").click()
        cy.url().should('eq', 'https://hajirnext.vercel.app/dashboard');
        // window.location.reload(true);
        cy.wait(5000);
    });
    //Test Case-1
    it('should be able to Add missing Attendence',()=>{
        cy.get("//a[@class='MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters Mui-selected MuiListItemButton-root MuiListItemButton-gutters Mui-selected mui-1qvrk9j']").click()
        cy.get("//div[@id=':r1q:']").click()
        cy.get("//li[normalize-space()='25']").click()
        cy.get("//button[normalize-space()='hasne_thau']").click()
        cy.get("//span[normalize-space()='Setting']").click()
        cy.get("main[class='MuiBox-root mui-1m0slhe'] li:nth-child(2) a:nth-child(1)").click()
        cy.get(".MuiTypography-root.MuiTypography-body1.mui-p2aloj").should('be.visible')
        cy.get(".MuiInputBase-root").type('Roshan Pokharel')
        cy.get("//input[@id=':r5s:']").type('06012024')
        cy.get("//input[@id=':r5u:']").type('0810a')
        cy.get("//input[@id=':r80:']").type('0310p')
        cy.get("//input[@id=':r82:']").type('1')
        cy.get("//button[normalize-space()='Submit']").click()
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.contains('Missing Attendence added Succesfully'); 
            return true;
          });
   })
});