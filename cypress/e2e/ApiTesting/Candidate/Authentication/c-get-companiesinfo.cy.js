/// <reference types="Cypress" />


const baseUrl = Cypress.config('baseUrl');
describe("GET companies info", () => {
  it('should show companies info', () => {
    cy.fixture('bearerToken').then((tokenData) => {
      const bearerToken = tokenData.token;
    cy.request({
      method: 'GET',
      url: `${baseUrl}/candidate/companies-info`,
      headers: {
        'Authorization': `Bearer ${bearerToken}`
               }
               
    }).then(response => {
     
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal("success");
        expect(response.body.message).to.equal("Successfully Fetched");
        expect(response.body.data).to.be.an('array').that.has.lengthOf.at.least(1);
response.body.data.forEach(company => {
    expect(company.id).to.be.a('number');
    expect(company.company_id).to.be.a('number');
    expect(company.candidate_id).to.be.a('number');
    expect(company.company_name).to.be.a('string');
    expect(company.company_status).to.be.a('string');
    expect(company.code).to.be.a('string');
    expect(company.designation).to.be.a('string');
    expect(company.marriage_status).to.be.a('string');
    expect(company.salary_type).to.be.a('string');
    expect(company.salary).to.be.a('string');
    expect(company.verified_status).to.be.a('string');
    expect(company.status).to.be.a('string');
    expect(company.is_approver).to.be.a('boolean');
    expect(company.salary_amount).to.be.a('number');
    expect(company.allowance_amount).to.be.a('number');
    expect(company.working_hours).to.be.a('string');
    expect(company.duty_time).to.be.a('string');
    expect(company.probation_period).to.be.a('number');
    expect(company.break_duration).to.be.a('string');
    expect(company.allow_late_attendance).to.be.a('string');
    expect(company.overtime_ratio).to.be.a('number');
    expect(company.overtime_hrs).to.be.a('number');
    expect(company.casual_leave).to.be.a('number');
    expect(company.sick_leave).to.be.a('number');
    expect(company.allow_network_access).to.be.a('string');
    expect(company.departments).to.be.an('array').that.has.lengthOf.at.least(1);
    company.departments.forEach(department => {
          expect(department.id).to.be.a('number');
          expect(department.name).to.be.a('string');
  });
});
    });
   
    });
  });
});
