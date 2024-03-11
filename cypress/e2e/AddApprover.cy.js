///<reference types="Cypress" />

describe('Adding employee As an Approval on Company',()=>{
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
        window.location.reload(true);
        cy.wait(5000);
    });
    //Test Case-1
    it('should Add Approval Succesfully ',()=>{
        cy.get("//a[@class='MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters Mui-selected MuiListItemButton-root MuiListItemButton-gutters Mui-selected mui-1qvrk9j']").click()
        cy.get("//div[@id=':r1q:']").click()
        cy.get("//li[normalize-space()='25']").click()
        cy.get("//button[normalize-space()='hasne_thau']").click()
        cy.get("//span[normalize-space()='Setting']").click()
        cy.get("//main[@class='MuiBox-root mui-1m0slhe']//li[4]//a[1]").click()
        cy.get("#combo-box-demo").click()
        cy.get("#combo-box-demo-option-1").click()
        cy.get(".MuiButtonBase-root").click()
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.contains('Approval added successfully!'); 
            return true;
          });
    });
    //Test Case-2
    it('should Show error message for already Added Approval ',()=>{
        cy.get("//a[@class='MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters Mui-selected MuiListItemButton-root MuiListItemButton-gutters Mui-selected mui-1qvrk9j']").click()
        cy.get("//div[@id=':r1q:']").click()
        cy.get("//li[normalize-space()='25']").click()
        cy.get("//button[normalize-space()='hasne_thau']").click()
        cy.get("//span[normalize-space()='Setting']").click()
        cy.get("//main[@class='MuiBox-root mui-1m0slhe']//li[4]//a[1]").click()
        cy.get("#combo-box-demo").click()
        cy.get("#combo-box-demo-option-1").click()
        cy.get(".MuiButtonBase-root").click()
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.contains('Approval Already Exists! '); 
            return true;
          });
    });
});