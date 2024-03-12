///<reference types="Cypress" />

describe('Adding employee on Company',()=>{
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
    it('should be able to add employee as weekly based ',()=>{
        cy.get("//a[@class='MuiButtonBase-root']").click()
        cy.get("//button[2]//div[1]").click()
        cy.get("//div[@id=':r1u:']").click()
        cy.get("//li[normalize-space()='25']").click()
        cy.get("//tr[@class='MuiTableRow-root mui-gr5oml']//td[2]").should('be.visible')
        cy.get("//button[normalize-space()='hasne_thau']").click()
        cy.get("//h2[normalize-space()='Employee']").should('be.visible')
        cy.get("//button[normalize-space()='Create Employee']").click()
        cy.get("//input[@id=':r4i:']").type('hellotest')
        cy.get("//div[@id='mui-component-select-name_holder']").click()
        cy.get("//li[normalize-space()='Mr']").click()
        cy.fixture('employeename.json').then(data => {
            const randomName = data.names[Math.floor(Math.random() * data.names.length)];
            cy.get("//input[@id=':r5q:']").type(randomName);
        });
         cy.get("//input[@id=':r5r:']").type('9812345678')  
         cy.get("//input[@id=':r5u:']").type('9812345678')
         cy.get("//input[@id=':r5s:']").type('Quality Analyst')
         cy.get("//div[@id='mui-component-select-departments']").click()
        cy.get("div.MuiPaper-root").scrollIntoView().contains('Quality Assurance (QA)').should('be.visible').click();
        cy.get("//div[@id='mui-component-select-marriage_status']").click()
        cy.get("//li[normalize-space()='Unmarried']").click()
        cy.get("//button[normalize-space()='Next']").click()
        cy.wait(2000)
        cy.get("//div[@id='mui-component-select-salary_type']").click()
        cy.get("//li[normalize-space()='Weekly']").click()
        cy.get("//input[@id=':r5:']").contains('08:00').should('be.visible')
        cy.get("//input[@value='Fixed']").click()
        cy.get("//input[@id=':r6:']").type('09:00')
        cy.get("//div[@id='mui-component-select-am_pm']").click()
        cy.get("//li[normalize-space()='AM']").click()
        cy.get("//input[@id=':r4:']").type('20000')
        cy.get("//label[@id=':r8:-label']").type('00:30')
        cy.get("//div[@id='mui-component-select-probation_period']").click()
        cy.get("//li[normalize-space()='3 months']").click()
        cy.get("//button[normalize-space()='Next']").click()
        cy.wait(2000)
        cy.get("//p[normalize-space()='Sunday']").click()
        cy.get("//p[normalize-space()='Saturday']").click()
        cy.get("//button[normalize-space()='Next']").click()
        cy.wait(2000)
        cy.get("//input[@id=':ro:']").type('03/10/2024')
        cy.get("//input[@name='allow_late_attendance_checked']").click()
        cy.get("//input[@id=':rt:']").type('00:10')
        cy.get("//input[@name='overtime_checked']").click()
        cy.get("//input[@id=':rq:']").type('1')
        cy.get("//input[@id=':ru:']").type('2')
        cy.get("//input[@name='sick_leave_checked']").click()
        cy.get("//input[@id=':rr:']").type('6')
        cy.get("//input[@name='casual_leave_checked']").click()
        cy.get("//input[@name='casual_leave_checked']").type('7')
        cy.get("//span[normalize-space()='All']").click()
        cy.get("//button[normalize-space()='Test Submit']").click()
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.contains('Candidate Added Successfully.'); 
            return true;
          });
          cy.get("//h2[normalize-space()='Employee']").should('be.visible')
          cy.get("//button[@class='MuiButtonBase-root]").click()
    })
//Test Case-2
it('should be able to add employee as Monthly based ',()=>{
    cy.get("//a[@class='MuiButtonBase-root']").click()
    cy.get("//button[2]//div[1]").click()
    cy.get("//div[@id=':r1u:']").click()
    cy.get("//li[normalize-space()='25']").click()
    cy.get("//tr[@class='MuiTableRow-root mui-gr5oml']//td[2]").should('be.visible')
    cy.get("//button[normalize-space()='hasne_thau']").click()
    cy.get("//h2[normalize-space()='Employee']").should('be.visible')
    cy.get("//button[normalize-space()='Create Employee']").click()
    cy.get("//input[@id=':r4i:']").type('rphere')
    cy.get("//div[@id='mui-component-select-name_holder']").click()
    cy.get("//li[normalize-space()='Mr']").click()
    cy.fixture('employeename.json').then(data => {
        const randomName = data.names[Math.floor(Math.random() * data.names.length)];
        cy.get("//input[@id=':r5q:']").type(randomName);
    });
     cy.get("//input[@id=':r5r:']").type('9812345678')  
     cy.get("//input[@id=':r5u:']").type('9812345678')
     cy.get("//input[@id=':r5s:']").type('Quality Analyst')
     cy.get("//div[@id='mui-component-select-departments']").click()
    cy.get("div.MuiPaper-root").scrollIntoView().contains('Quality Assurance (QA)').should('be.visible').click();
    cy.get("//div[@id='mui-component-select-marriage_status']").click()
    cy.get("//li[normalize-space()='Unmarried']").click()
    cy.get("//button[normalize-space()='Next']").click()
    cy.wait(2000)
    cy.get("//div[@id='mui-component-select-salary_type']").click()
    cy.get("//li[normalize-space()='Monthly']").click()
    cy.get("//input[@id=':r5:']").contains('08:00').should('be.visible')
    cy.get("//input[@value='Fixed']").click()
    cy.get("//input[@id=':r6:']").type('09:00')
    cy.get("//div[@id='mui-component-select-am_pm']").click()
    cy.get("//li[normalize-space()='AM']").click()
    cy.get("//input[@id=':r4:']").type('20000')
    cy.get("//label[@id=':r8:-label']").type('00:30')
    cy.get("//div[@id='mui-component-select-probation_period']").click()
    cy.get("//li[normalize-space()='3 months']").click()
    cy.get("//button[normalize-space()='Next']").click()
    cy.wait(2000)
    cy.get("//p[normalize-space()='Sunday']").click()
    cy.get("//p[normalize-space()='Saturday']").click()
    cy.get("//button[normalize-space()='Next']").click()
    cy.wait(2000)
    cy.get("//input[@id=':ro:']").type('03/10/2024')
    cy.get("//input[@name='allow_late_attendance_checked']").click()
    cy.get("//input[@id=':rt:']").type('00:10')
    cy.get("//input[@name='overtime_checked']").click()
    cy.get("//input[@id=':rq:']").type('1')
    cy.get("//input[@id=':ru:']").type('2')
    cy.get("//input[@name='sick_leave_checked']").click()
    cy.get("//input[@id=':rr:']").type('6')
    cy.get("//input[@name='casual_leave_checked']").click()
    cy.get("//input[@name='casual_leave_checked']").type('7')
    cy.get("//span[normalize-space()='All']").click()
    cy.get("//button[normalize-space()='Test Submit']").click()
    cy.on('window:alert', (alertText) => {
        expect(alertText).to.contains('Candidate Added Successfully.'); 
        return true;
      });
      cy.get("//h2[normalize-space()='Employee']").should('be.visible')
      cy.get("//button[@class='MuiButtonBase-root]").click()
})
//Test Case -3 
it('should be presence of validation with correct form',()=>{
    cy.get("//a[@class='MuiButtonBase-root']").click()
    cy.get("//button[2]//div[1]").click()
    cy.get("//div[@id=':r1u:']").click()
    cy.get("//li[normalize-space()='25']").click()
    cy.get("//tr[@class='MuiTableRow-root mui-gr5oml']//td[2]").should('be.visible')
    cy.get("//button[normalize-space()='hasne_thau']").click()
    cy.get("//h2[normalize-space()='Employee']").should('be.visible')
    cy.get("//button[normalize-space()='Create Employee']").click()
    cy.get("//button[normalize-space()='Next']").click()
    cy.get("//p[@id=':r4k:-helper-text']").contains('Staff Code is required').should('be.visible')
    cy.get("//p[@id=':r4m:-helper-text']").contains('Full Name is required').should('be.visible')
    cy.get("//p[@id=':r4n:-helper-text']").contains('Mobile Number is required').should('be.visible')
    cy.get("//p[@id=':r4q:-helper-text']").contains('Confirm Phone Number is required').should('be.visible')
    cy.get("//p[@id=':r4o:-helper-text']").contains('Designation is required').should('be.visible')
    cy.get("//input[@id=':r56:']").type('@#$%^&*').should('contain' , 'Name is not validate')
    cy.get("//input[@id=':r57:']").type('99877636813813').should('contain' , 'Number is not validate')
})
//Test Case-4 
it('should be able to view employee detail',()=>{
    cy.get("//a[@class='MuiButtonBase-root']").click()
    cy.get("//button[2]//div[1]").click()
    cy.get("//div[@id=':r1u:']").click()
    cy.get("//li[normalize-space()='25']").click()
    cy.get("//tr[@class='MuiTableRow-root mui-gr5oml']//td[2]").should('be.visible')
    cy.get("//button[normalize-space()='hasne_thau']").click()
    cy.get("//h2[normalize-space()='Employee']").should('be.visible')
    cy.get("(//td)[2]").click()
})
});