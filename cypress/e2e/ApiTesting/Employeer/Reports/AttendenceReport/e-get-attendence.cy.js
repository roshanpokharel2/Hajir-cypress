/// <reference types="Cypress" />

import { companyId } from "../../../Constantsfile/constants";


const baseUrl = Cypress.env('baseUrl');

describe("get all attendence today ", () => {
  it('should be able to get today all attendence ', () => {
    cy.fixture('employerToken').then((tokenDataa) => {
      const employerToken = tokenDataa.token;
    cy.request({
      method: 'GET', 
      url: `${baseUrl}/employer/report/today/${companyId}`,
      headers: {
        'Authorization': `Bearer ${employerToken}` 
               }
               
    }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Successfully Fetched');
        expect(response.body).to.have.property('data');
        const data = response.body.data;
        expect(data).to.have.property('total_attendee').that.is.a('number');
        expect(data).to.have.property('present').that.is.a('number');
        expect(data).to.have.property('late').that.is.a('number');
        expect(data).to.have.property('absent').that.is.a('number');
        expect(data).to.have.property('early_check_out').that.is.a('number');
        expect(data).to.have.property('Leave').that.is.a('number');
        expect(data).to.have.property('candidates').that.is.an('array');
        expect(data).to.have.property('departments').that.is.an('array');
    });
        });
       });
        });


