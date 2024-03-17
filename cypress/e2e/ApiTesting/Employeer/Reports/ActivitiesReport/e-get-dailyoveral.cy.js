/// <reference types="Cypress" />
import {  companyId, empToken } from './../../../Constantsfile/constants';

const baseUrl = Cypress.env('baseUrl');

describe("get daily overall  ", () => {
  it('should be able to get daily overall ', () => {
    cy.request({
      method: 'GET',
      url: `https://veloxlabs.net/api/v2/employer/report/daily/${companyId}?date=2024-03-17`,
      headers: {
        'Authorization': empToken 
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

