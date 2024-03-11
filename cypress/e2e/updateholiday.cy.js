describe('Should be able to update holiday ',() => {
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
    it('should update holiday succesfully ',()=>{
        cy.get("//a[@class='MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters Mui-selected MuiListItemButton-root MuiListItemButton-gutters Mui-selected mui-1qvrk9j']").click()
        cy.get("//div[@id=':r1q:']").click()
        cy.get("//li[normalize-space()='25']").click()
        cy.get("//button[normalize-space()='hasne_thau']").click()
        cy.get("//span[normalize-space()='Setting']").click()
        cy.get("//span[normalize-space()='Update Holiday']").click()
        cy.fixture('Default_gov_holiday_2081').then(fileContent => {
            // Find the file input element and attach the file
              cy.get("label[role='button']").attachFile({
              fileContent: fileContent,
              fileName: 'Default_gov_holiday_2081',
              mimeType: 'application/vnd.ms-excel'
            });   
        })
    });
  //Test Case-2 
  it('should be able to download current holiday',()=>{
    cy.get("//a[@class='MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters Mui-selected MuiListItemButton-root MuiListItemButton-gutters Mui-selected mui-1qvrk9j']").click()
    cy.get("//div[@id=':r1q:']").click()
    cy.get("//li[normalize-space()='25']").click()
    cy.get("//button[normalize-space()='hasne_thau']").click()
    cy.get("//span[normalize-space()='Setting']").click()
    cy.get("//span[normalize-space()='Update Holiday']").click()
    cy.get("//button[normalize-space()='Download Current Holiday File (.pdf)']").click()
});


});