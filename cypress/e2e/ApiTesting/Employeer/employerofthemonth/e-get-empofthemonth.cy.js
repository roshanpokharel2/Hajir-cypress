/// <reference types="Cypress" />

const baseUrl = Cypress.config('baseUrl');

describe("Candidate store", () =>  {
  it('should be able to store candiate', () => {
    cy.fixture('employerToken').then((tokenDataa) => {
      const employerToken = tokenDataa.token;
    cy.request({
      method: 'GET',
      url: `${baseUrl}/employer/employee-of-the-month`,
      headers: {
        'Authorization': `Bearer ${employerToken}`
               },
      body: {
          "year":2024 
      }

    }).then(response => {
      expect(response.status).to.equal(200);

  expect(response.body.status).to.equal('success');
  expect(response.body.message).to.equal('Employee of the month Fetched');
  
  expect(response.body.data).to.be.an('array').that.is.not.empty;

  response.body.data.forEach((item) => {
    expect(item).to.have.property('id').that.is.a('number');
    expect(item).to.have.property('company_id').that.is.a('number');
    expect(item).to.have.property('candidate_id').that.is.a('number');
    expect(item).to.have.property('date').that.is.a('string');
    expect(item).to.have.property('created_at').that.is.null;
    expect(item).to.have.property('updated_at').that.is.null;
    });
  });
  });
});
});
