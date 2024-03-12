///<reference types="Cypress" />
describe('Editing Profile',()=>{
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
    //Test  Case-1
    it('should be able to edit profile ',()=>{
        cy.get("img[alt='Profile Avatar']").should('be.visible')
        cy.get("cy.get('.MuiButtonBase-root").click()
        cy.get("//h2[@id=':r8j:']").should('be.visible')
        cy.get(".MuiButtonBase-root").click()
        cy.get("#title").click()
        cy.get(".MuiButtonBase-root").click()
        cy.get("#name").clear().type('Rowsun Pokhrail')
        cy.get("#email").clear().type('techwithroshan123@gmail.com')
        cy.get("#dob").type('10032001')
        cy.get("#marital_status").click()
        cy.get("div[id='menu-marital_status'] li:nth-child(2)").click()
        cy.get("(//img[@alt='Profile Avatar'])[2]").attachFile('fixtures/photo.jpg');
        cy.get("//div[@class='MuiDialogContent-root mui-1ty026z']//form//*[name()='svg']").click()
        cy.get("#new_phone").type('9811222070')
        cy.get("//input[@id=':ra8:']").type('9811222070')
        cy.get("button[type='submit']").click()
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.contains('Profile updated successfully!'); 
            return true;
        });
        cy.wait(6000)
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.contains('Successfully Registered.'); 
            return true;
          });
        cy.url().should('eq', 'https://hajirnext.vercel.app/dashboard');
    })
    //Test Case-2
    it('should show validation on edit profile ',()=>{
        cy.get("cy.get('.MuiButtonBase-root").click()
        cy.get(".MuiButtonBase-root").click()
        cy.get("#name").clear().type('2@#$%^&*')
        cy.contains('Invalid characters detected in the name field. ').should('be.visible');
        cy.get("#email").clear().type('1@gma.com')
        cy.contains('Please enter a valid email address.').should('be.visible');
        cy.get("#dob").type('10032001')
        });
});
