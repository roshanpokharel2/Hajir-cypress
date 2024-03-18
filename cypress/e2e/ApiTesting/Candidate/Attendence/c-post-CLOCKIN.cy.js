/// <reference types = "Cypress"/>
import { companyId } from './../../Constantsfile/constants';
import { canToken } from './../../Constantsfile/constants';

const baseUrl = Cypress.env('baseUrl');

describe("to clock in  ", () => {
    it('should be able to clock in ', () => {
      cy.request({
        method: 'POST',
        url: `https://veloxlabs.net/api/v2/candidate/attendance-store/${companyId}`,
        headers: {
          'Authorization': canToken 
                 }
                 
      }).then(response => {
        expect(response.status).to.equal(200);
    
      const responseData = response.body.data;

      expect(responseData.attendance_id).to.be.a('number');
      expect(responseData.start_time).to.be.a('string').and.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{6}Z$/);
        });
      });
    });

