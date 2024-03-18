/// <reference types="Cypress" />
import { companyId, empToken } from './../../Constantsfile/constants';
const baseUrl = Cypress.env('baseUrl');


describe("Get leave Details", () => {
  it('should be able to get leave details ', () => {
    
      cy.request({
        method: 'GET',
        url: `https://veloxlabs.net/api/v2/candidate/get-single-leave-details/${companyId}/132`, 
        headers: {
          'Authorization' : empToken
        },
        
      }).then(response => {
        expect(response.body.status).to.equal("success");
        expect(response.body.message).to.equal("Successfully Fetched");
        expect(response.body.data.id).to.equal(132);
        expect(response.body.data.candidate_id).to.equal(72);
        expect(response.body.data.company_id).to.equal(2);
        expect(response.body.data.leave_type).to.equal("Sick Leave");
        expect(response.body.data.type).to.equal("Full");
        expect(response.body.data.remarks).to.equal("very much sick plz give me sick leae");
        expect(response.body.data.status).to.equal("Pending");
        expect(response.body.data.start_date).to.equal("2024-02-22T18:15:00.000000Z");
        expect(response.body.data.end_date).to.equal("2024-02-22T18:15:00.000000Z");
        expect(response.body.data.application_date).to.equal("2024-03-18T07:55:18.000000Z");
        expect(response.body.data.document_url).to.equal(null);
        expect(response.body.data.name).to.equal("Pooja uprety");
        expect(response.body.data.leave_days).to.equal(1);
      });
    });
  
});
