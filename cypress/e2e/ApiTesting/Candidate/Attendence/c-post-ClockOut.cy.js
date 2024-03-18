/// <reference types = "Cypress"/>
import { attendanceId, companyId } from './../../Constantsfile/constants';
import { canToken } from './../../Constantsfile/constants';

const baseUrl = Cypress.env('baseUrl');

describe("to clock out  ", () => {
    it('should be able to clock out ', () => {
      cy.request({
        method: 'POST',
        url: `https://veloxlabs.net/api/v2/candidate/attendance-update/${companyId}/${attendanceId}`,
        headers: {
          'Authorization': canToken 
                 }
                 
      }).then(response => {
        expect(response.status).to.equal(200);
    
        const responseData = response.body;

        expect(responseData.status).to.equal('success');
        expect(responseData.message).to.equal('Successfully Updated.');
        });
      });
    });

