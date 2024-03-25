/// <reference types="Cypress" />

import { candidateId, companyId } from "../../Constantsfile/constants";

const baseUrl = Cypress.config('baseUrl');

describe("To store employee of the month", () =>  {
  it('should be able to store employee of the month', () => {
    cy.fixture('employerToken').then((tokenDataa) => {
      const employerToken = tokenDataa.token;
    cy.request({
      method: 'POST',
      url: `${baseUrl}/employer/employee-of-the-month`,
      headers: {
        'Authorization': `Bearer ${employerToken}`
               },
      body: {
          "company_id":companyId,
          "candidate_id":candidateId,
          "date": "2021-3-10" 
      }

    }).then(response => {
      expect(response.status).to.equal(200);

  expect(response.body.status).to.equal('success');
  expect(response.body.message).to.equal('Employee of the month created successfully');
  
  expect(response.body.data).to.have.property('id').that.is.a('number');
  expect(response.body.data).to.have.property('company_id').that.is.a('number');
  expect(response.body.data).to.have.property('candidate_id').that.is.a('number');
  expect(response.body.data).to.have.property('date').that.is.a('string');
  expect(response.body.data).to.have.property('created_at').that.is.a('string');
  expect(response.body.data).to.have.property('updated_at').that.is.a('string'); 
    });
    });
  });
});
