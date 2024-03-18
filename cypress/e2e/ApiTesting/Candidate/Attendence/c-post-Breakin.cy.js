/// <reference types = "Cypress"/>
import { canToken, attendanceId } from './../../Constantsfile/constants';

const baseUrl = Cypress.env('baseUrl');

describe("to get notice  ", () => {
    it('should be able to get notice ', () => {
      cy.request({
        method: 'POST',
        url: `https://veloxlabs.net/api/v2/candidate/attendance-break-store/${attendanceId}`,
        headers: {
          'Authorization': canToken 
                 }
                 
      }).then(response => {
        expect(response.status).to.equal(200);
      
      const responseData = response.body.data;

      expect(responseData.attendance_id).to.be.a('number');
      expect(responseData.break_time).to.equal('00:00:00');
      expect(responseData.break_id).to.be.a('number');
        });
      });
    });

