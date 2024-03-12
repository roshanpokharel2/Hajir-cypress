///<reference types="Cypress" />

describe('Update existing company',()=>{
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
 //Test case-1
  it('should update company succesfully',()=>{
    cy.get("//a[@class='MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters Mui-selected MuiListItemButton-root MuiListItemButton-gutters Mui-selected mui-1qvrk9j']").click()
    cy.get("//div[@id=':r1q:']").click()
    cy.get("//li[normalize-space()='25']").click()
    cy.get("(//button[@type='button'])[10]").click()
    cy.get("//button[@type='button'])[55]").click()
    cy.fixture('companynames.json').then(names => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      cy.get("//input[@id=':rp:']").type(randomName);
    });
    cy.get("button[type='submit']").click()
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.contains('Company Successfully Updated.'); 
      return true;
    });
  });

  //Test Case-2 
  it('should inactive company successfully',()=>{
    cy.get("//a[@class='MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters Mui-selected MuiListItemButton-root MuiListItemButton-gutters Mui-selected mui-1qvrk9j']").click()
    cy.get("//button[2]//div[1]").click()//click active company
    cy.get("//div[@id=':r1q:']").click()
    cy.get("//li[normalize-space()='25']").click()
    cy.get("(//button[@type='button'])[46]").click()
    cy.get("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium mui-ob8l0e']").click()
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.contains('Company has been Inactivated.'); 
      return true;
    });
  })
  // Test Case-3
  it('should active company succesfully',()=>{
    cy.get("//a[@class='MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters Mui-selected MuiListItemButton-root MuiListItemButton-gutters Mui-selected mui-1qvrk9j']").click()
    cy.get("//button[3]//div[1]").click()//click inactive company
    cy.get("//td[@class='MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium mui-jygkmb']").should('be.visible')
    cy.get("(//button[@type='button'])[55]").click()
    cy.get("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium mui-ob8l0e']").click()
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.contains('Company has been Activated Successfully.'); 
      return true;
    });
  })
  //Test Case-4 
  it.skip('should delete company succesfully',()=>{
    cy.get("//a[@class='MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters Mui-selected MuiListItemButton-root MuiListItemButton-gutters Mui-selected mui-1qvrk9j']").click()
    cy.get("//button[3]//div[1]").click()//click inactive company
    cy.get("//td[@class='MuiTableCell-root']").should('be.visible')
    cy.get("(//button[@type='button'])[54]").click()
    cy.get("//button[@class='MuiButtonBase-root']").click()
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.contains('Company has been Deleted.'); 
      return true;
    });
    });
});