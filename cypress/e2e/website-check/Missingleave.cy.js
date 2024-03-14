///<reference types="Cypress" />

describe('Adding Missing Leave',()=>{
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
    it('should be able to Add Missing Leave',()=>{
        cy.get("//a[@class='MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters Mui-selected MuiListItemButton-root MuiListItemButton-gutters Mui-selected mui-1qvrk9j']").click()
        cy.get("//div[@id=':r1q:']").click()
        cy.get("//li[normalize-space()='25']").click()
        cy.get("//button[normalize-space()='hasne_thau']").click()
        cy.get("//span[normalize-space()='Setting']").click()
        cy.get("//span[normalize-space()='Missing Leave']").click()
        cy.get("//p[@class='MuiTypography-root MuiTypography-body1 mui-p2aloj']").should('be.visible')
        cy.get("//input[@id=':r3t:']").click()
        cy.get("//li[@id=':r3t:-option-1']").click()
        cy.get("//input[@id=':r3v:']").type('03102024')
        cy.get("div[role='combobox']").click()
        cy.get("//li[normalize-space()='Sick']").click()
        cy.get("//button[normalize-space()='Add']").click()
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.contains('Missing leave Added Successfully.'); 
            return true;
          });
    })
    it('should show error while Adding existing Missing Leave',()=>{
        cy.get("//a[@class='MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters Mui-selected MuiListItemButton-root MuiListItemButton-gutters Mui-selected mui-1qvrk9j']").click()
        cy.get("//div[@id=':r1q:']").click()
        cy.get("//li[normalize-space()='25']").click()
        cy.get("//button[normalize-space()='hasne_thau']").click()
        cy.get("//span[normalize-space()='Setting']").click()
        cy.get("//span[normalize-space()='Missing Leave']").click()
        cy.get("//p[@class='MuiTypography-root MuiTypography-body1 mui-p2aloj']").should('be.visible')
        cy.get("//input[@id=':r3t:']").click()
        cy.get("//li[@id=':r3t:-option-1']").click()
        cy.get("//input[@id=':r3v:']").type('03102024')
        cy.get("div[role='combobox']").click()
        cy.get("//li[normalize-space()='Sick']").click()
        cy.get("//button[normalize-space()='Add']").click()
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.contains('Missing leave Already existed ssfully.'); 
            return true;
          });
    })
});