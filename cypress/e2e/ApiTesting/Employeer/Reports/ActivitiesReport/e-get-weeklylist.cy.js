/// <reference types="Cypress" />

import { companyId, from_date, to_date } from "../../../Constantsfile/constants";

const baseUrl = Cypress.env('baseUrl');

describe("get weekly list  ", () => {
  it('should be able to get weekly list ', () => {
    cy.fixture('employerToken').then((tokenDataa) => {
      const employerToken = tokenDataa.token;
    cy.request({
      method: 'GET',
      url: `${baseUrl}/employer/report/weekly-candidate-list/${companyId}?from_date=${from_date}&to_date=${to_date}`,
      headers: {
        'Authorization': `Bearer ${employerToken}`
               }
               
    }).then(response => {
     expect(response.status).to.equal(200);
    expect(response.body.status).to.equal('success');
    expect(response.body.message).to.equal('Successfully Fetched');
    expect(response.body).to.have.property('data');
    expect(response.body.data).to.have.property('attendee_list').to.be.an('array');
    expect(response.body.data).to.have.property('absent_list').to.be.an('array');
    expect(response.body.data).to.have.property('late_list').to.be.an('array');
    expect(response.body.data).to.have.property('leave_list').to.be.an('array');
    expect(response.body.data).to.have.property('earlyClockOut_list').to.be.an('array');

       });
        });
    });
  });

