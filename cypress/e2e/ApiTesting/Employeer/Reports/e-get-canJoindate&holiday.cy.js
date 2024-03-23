/// <reference types="Cypress" />

import { candidateId, companyId } from "../../Constantsfile/constants";

const baseUrl = Cypress.env('baseUrl');

describe("get canididate join date & holiday  ", () => {
  it('should be able to get join date and holiday ', () => {
    cy.fixture('employerToken').then((tokenDataa) => {
      const employerToken = tokenDataa.token;
    cy.request({
      method: 'GET',
      url: `${baseUrl}/employer/report/candidate-holidays/${companyId}/${candidateId}`,
      headers: {
        'Authorization': `Bearer ${employerToken}`
               }
               
    }).then(response => {
        expect(response.status).to.eq(200);
        expect(response.body.status).to.eq('success');
        expect(response.body.message).to.eq('Successfully Fetched');
        expect(response.body).to.have.property('data');
        // Verify joining_date
        expect(response.body.data).to.have.property('joining_date');
        // Verify holidays
        expect(response.body.data).to.have.property('holidays').to.be.an('array');
        const holidays = response.body.data.holidays;
        holidays.forEach(holiday => {
          expect(holiday).to.have.property('leave_date');
        });
    });
  });
});
});