/// <reference types="Cypress" />
import 'cypress-file-upload';
function generateRandomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
const companyname = generateRandomString(10);
describe('Should be able to create company',() => {
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
      //   window.location.reload(true);

        cy.wait(5000);
 });

 //Test  case-1
    it('should be able to Search existing company',()=>{
      cy.get("//a[@class='MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters Mui-selected MuiListItemButton-root MuiListItemButton-gutters Mui-selected mui-1qvrk9j']").click()
      cy.get('li:nth-child(2) a:nth-child(1)').click();
      cy.get("div[class='MuiBox-root mui-0'] h2").should('be.visible')
      cy.get("//input[@id=':r1:']").type('Rune')
    });

   //Test case-2
   it('should be able to create new company with default holiday',()=>{
      cy.get("//a[@class='MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters Mui-selected MuiListItemButton-root MuiListItemButton-gutters Mui-selected mui-1qvrk9j']").click()
      cy.get("//button[normalize-space()='Create Company']").click();
      cy.get("//p[@class='MuiTypography-root MuiTypography-body1 mui-p2aloj']").should('be.visible')
      cy.get("//input[@id=':r47:']").type('Roshan-Test1')
      cy.get('body > div:nth-child(18) > main:nth-child(3) > div:nth-child(1) > form:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1)').click() //staff code
      cy.get("//body/div/main[@class='MuiBox-root mui-1m0slhe']/div[@class='MuiBox-root mui-asqbzi']/form/div[@class='MuiGrid-root MuiGrid-container mui-1d3bbye']/div[@class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 mui-1s50f5r']/div[@class='MuiBox-root mui-1dny3n3']/div[3]/div[1]").click() //Date selection
      cy.get("div[class='MuiBox-root mui-1qm1lh'] div[class='MuiBox-root mui-1qj5c6v']").click() //Holiday
      cy.get("button[type='submit']").click();
      cy.on('window:alert', (alertText) => {
         expect(alertText).to.contains('company added succesfully!'); 
         return true;
       });
      cy.get(" body > div:nth-child(18) > main:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(2)").should('be.visible');
   })

      //Test case-3
   it('should be able to create new company with uploding custom holiday ',()=>{
      cy.get("//a[@class='MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters Mui-selected MuiListItemButton-root MuiListItemButton-gutters Mui-selected mui-1qvrk9j']").click()
      cy.get("//button[normalize-space()='Create Company']").click();
      cy.get("//p[@class='MuiTypography-root MuiTypography-body1 mui-p2aloj']").should('be.visible')
      cy.get("//input[@id=':r47:']").type(companyname);
      cy.get('body > div:nth-child(18) > main:nth-child(3) > div:nth-child(1) > form:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1)').click() //staff code
      cy.get("//body/div/main[@class='MuiBox-root mui-1m0slhe']/div[@class='MuiBox-root mui-asqbzi']/form/div[@class='MuiGrid-root MuiGrid-container mui-1d3bbye']/div[@class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 mui-1s50f5r']/div[@class='MuiBox-root mui-1dny3n3']/div[3]/div[1]").click() //Date selection
      cy.get("(//div[@role='radiogroup'])[4]").click();
        cy.fixture('Default_gov_holiday_2081').then(fileContent => {
    // Find the file input element and attach the file
      cy.get('input[type="file"]').attachFile({
      fileContent: fileContent,
      fileName: 'Default_gov_holiday_2081',
      mimeType: 'application/vnd.ms-excel'
      });   
      });

      cy.get("button[type='submit']").click();
      cy.on('window:alert', (alertText) => {
         expect(alertText).to.contains('company added succesfully!'); 
         return true;
       });
      cy.get(" body > div:nth-child(18) > main:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(2)").should('be.visible');
   })
   //Test case-4
   it('should show error while creating existing company',()=>{
      cy.get("//a[@class='MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters Mui-selected MuiListItemButton-root MuiListItemButton-gutters Mui-selected mui-1qvrk9j']").click()
      cy.get("//button[normalize-space()='Create Company']").click();
      cy.get("//p[@class='MuiTypography-root MuiTypography-body1 mui-p2aloj']").should('be.visible')
      cy.get("//input[@id=':r47:']").type('Roshan-Test1')
      cy.get('body > div:nth-child(18) > main:nth-child(3) > div:nth-child(1) > form:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1)').click() //staff code
      cy.get("//body/div/main[@class='MuiBox-root mui-1m0slhe']/div[@class='MuiBox-root mui-asqbzi']/form/div[@class='MuiGrid-root MuiGrid-container mui-1d3bbye']/div[@class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 mui-1s50f5r']/div[@class='MuiBox-root mui-1dny3n3']/div[3]/div[1]").click() //Date selection
      cy.get("div[class='MuiBox-root mui-1qm1lh'] div[class='MuiBox-root mui-1qj5c6v']").click() //Holiday
      cy.get("button[type='submit']").click();
      cy.on('window:alert', (alertText) => {
         expect(alertText).to.contains('company name already exists.'); 
         return true;
       });
   })
   //Test case-5
   it('should show error while not filing required fill',()=>{
      cy.get("//a[@class='MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters Mui-selected MuiListItemButton-root MuiListItemButton-gutters Mui-selected mui-1qvrk9j']").click()
      cy.get("//button[normalize-space()='Create Company']").click();
      cy.get("//p[@class='MuiTypography-root MuiTypography-body1 mui-p2aloj']").should('be.visible')
      cy.get("button[type='submit']").click();
      cy.get("//p[@id=':rp:-helper-text']").should('be.visible');
      cy.get("//p[normalize-space()='Please select a staff code']").should('be.visible');
      cy.get("//p[normalize-space()='Please select a date']").should('be.visible');
   })

});