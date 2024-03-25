/// <reference types="Cypress" />

import { companyId } from "../../../Constantsfile/constants";


const baseUrl = Cypress.config('baseUrl');

describe("get daily list  ", () => {
  it('should be able to get daily list ', () => {
    cy.fixture('employerToken').then((tokenDataa) => {
      const employerToken = tokenDataa.token;
    cy.request({
      method: 'GET',
      url: `${baseUrl}/employer/report/daily-candidate-list/${companyId}?date=2023-03-10`,
      headers: {
        'Authorization': `Bearer ${employerToken}`
               }
               
    }).then(response => {
    expect(response.status).to.equal(200);
    expect(response.body.status).to.equal('success');
    expect(response.body.message).to.equal('Successfully Fetched');
    expect(response.body).to.have.property('data');
    expect(response.body.data).to.have.property('attendee_list').to.be.an('array').that.is.not.empty;
    expect(response.body.data).to.have.property('absent_list').to.be.an('array').that.is.not.empty;
    expect(response.body.data).to.have.property('late_list').to.be.an('array').that.is.empty;
    expect(response.body.data).to.have.property('leave_list').to.be.an('array').that.is.not.empty;
    expect(response.body.data).to.have.property('earlyClockOut_list').to.be.an('array').that.is.not.empty;
    });
        });
    });
  });

