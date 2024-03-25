/// <reference types="Cypress" />

import { companyId } from "../../../Constantsfile/constants";


const baseUrl = Cypress.config('baseUrl');

describe("get active candidate ", () => {
  it('should be able to get active candidate ', () => {
    cy.fixture('employerToken').then((tokenDataa) => {
      const employerToken = tokenDataa.token;
    cy.request({
      method: 'GET', 
      url: `${baseUrl}/employer/report/today/active-candidate/${companyId}`,
      headers: {
        'Authorization': `Bearer ${employerToken}`
               }
               
    }).then(response => {
    expect(response.status).to.equal(200);
    expect(response.body.status).to.equal('success');
    expect(response.body.message).to.equal('Successfully Fetched');
    expect(response.body).to.have.property('data');
    const data = response.body.data;
    expect(data).to.have.property('candidates').that.is.an('array');
    });
       });
        });
    });


