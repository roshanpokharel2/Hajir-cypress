/// <reference types="Cypress" />


const baseUrl = Cypress.env('baseUrl');

describe("get monthly list  ", () => {
  it('should be able to get monthly list ', () => {
    cy.request({
      method: 'GET',
      url: `https://veloxlabs.net/api/v2/employer/report/monthly-candidate-list/2?month=${month}&year=${year}`,
      headers: {
        'Authorization': empToken 
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


