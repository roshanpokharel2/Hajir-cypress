/// <reference types="Cypress" />

const baseUrl = Cypress.config('baseUrl');

describe("get all departments ", () => {
  it('should be able to get all departments', () => {
    cy.fixture('employerToken').then((tokenDataa) => {
      const employerToken = tokenDataa.token;
    cy.request({
      method: 'GET',
      url: `${baseUrl}/employer/all-departments`,
      headers: {
        'Authorization': `Bearer ${employerToken}`,
               }
               
    }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal("success");
  expect(response.body.message).to.equal("Successfully Fetched.");
  const responsedata = response.body.data;
  expect(responsedata.departments).to.be.an('array');
  expect(responsedata.departments).to.have.lengthOf(31);
  expect(responsedata.departments[0].id).to.equal(1);
  expect(responsedata.departments[0].name).to.equal("Administration");
  expect(responsedata.departments[1].id).to.equal(2);
  expect(responsedata.departments[1].name).to.equal("Information Technology");
    });
    });
  });
});
