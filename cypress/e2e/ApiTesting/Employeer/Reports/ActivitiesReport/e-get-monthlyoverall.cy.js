/// <reference types="Cypress" />

import { month, year } from "../../../Constantsfile/constants";


const baseUrl = Cypress.config('baseUrl');

describe("get monthly overall   ", () => {
  it('should be able to get monthly overall ', () => {
    cy.fixture('employerToken').then((tokenDataa) => {
      const employerToken = tokenDataa.token;
    cy.request({
      method: 'GET',
      url: `${baseUrl}/employer/report/monthly/2?month=${month}&year=${year}`,
      headers: {
        'Authorization': `Bearer ${employerToken}`
               }
               
    }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Successfully Fetched');
        expect(response.body).to.have.property('data');
        const data = response.body.data;
        expect(data).to.have.property('total_candidate').that.is.a('number');
        expect(data).to.have.property('total_attendee').that.is.a('number');
        expect(data).to.have.property('absent').that.is.a('number');
        expect(data).to.have.property('late').that.is.a('number');
        expect(data).to.have.property('punch_out').that.is.a('number');
        expect(data).to.have.property('leave_taken').that.is.a('number');
        expect(data).to.have.property('percentage').that.is.a('number');

       });
        });
    });

  });
