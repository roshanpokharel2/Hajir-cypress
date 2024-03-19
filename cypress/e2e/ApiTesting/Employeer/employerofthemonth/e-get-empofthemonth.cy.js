/// <reference types="Cypress" />
import { empToken } from './../../Constantsfile/constants';
const baseUrl = Cypress.env('baseUrl');

describe("Candidate store", () =>  {
  it('should be able to store candiate', () => {
    cy.request({
      method: 'GET',
      url: 'https://veloxlabs.net/api/v2/employer/employee-of-the-month',
      headers: {
        'Authorization': empToken 
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
