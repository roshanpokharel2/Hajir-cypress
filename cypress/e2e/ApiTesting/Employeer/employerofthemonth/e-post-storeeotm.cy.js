/// <reference types="Cypress" />
import { empToken } from '../../Constantsfile/constants';
const baseUrl = Cypress.env('baseUrl');

describe("To store employee of the month", () =>  {
  it('should be able to store employee of the month', () => {
    cy.request({
      method: 'POST',
      url: 'https://veloxlabs.net/api/v2/employer/employee-of-the-month',
      headers: {
        'Authorization': empToken 
               },
      body: {
          "company_id":2,
          "candidate_id":2,
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
