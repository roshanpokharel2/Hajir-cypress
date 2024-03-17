/// <reference types="Cypress" />
import { companyId, empToken} from './../../../Constantsfile/constants';

const baseUrl = Cypress.env('baseUrl');

describe("get inactive candidate ", () => {
  it('should be able to get inactive candidate ', () => {
    cy.request({
      method: 'GET', 
      url: `https://veloxlabs.net/api/v2/employer/report/today/inactive-candidate/${companyId}`,
      headers: {
        'Authorization': empToken 
               }
               
    }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Successfully Fetched');
        expect(response.body).to.have.property('data');
        // Assertions for candidate list
        const candidateList = response.body.data.candidates;
        expect(candidateList).to.be.an('array').that.is.not.empty;
        candidateList.forEach(candidate => {
          // Assertions for individual candidate properties
          expect(candidate).to.have.property('id').that.is.a('number');
          expect(candidate).to.have.property('company_id').that.is.a('number');
          expect(candidate).to.have.property('candidate_id').that.is.a('number');
          expect(candidate).to.have.property('name').that.is.a('string');
          expect(candidate).to.have.property('allow_late_attendance').that.is.a('string');
          expect(candidate).to.have.property('phone').that.is.a('string');
          expect(candidate).to.have.property('attendance_id');
          expect(candidate).to.have.property('start_time');
          expect(candidate).to.have.property('end_time');
          expect(candidate).to.have.property('status').that.is.a('string').and.equal('Absent');
        });
       });
        });
    });

