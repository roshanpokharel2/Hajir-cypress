/// <reference types = "Cypress"/>

import { companyId, noticeId } from "../../Constantsfile/constants";


const baseUrl = Cypress.env('baseUrl');

describe("to read notice  ", () => {
    it('should be able to read notice ', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}/candidate/notice/read?${noticeId}&${companyId}`,
        headers: {
          'Authorization': canToken 
                 }
                 
      }).then(response => {
        expect(response.status).to.equal(200);
      
      const noticeData = response.body.data;

      expect(noticeData.id).to.equal(3);
      expect(noticeData.title).to.equal('Sample Notice Title 1');
      expect(noticeData.description).to.equal('This is a sample description for the notice. 1');
      expect(noticeData.image).to.equal('');
      expect(noticeData.notice_date).to.equal('2023-03-10');
      expect(noticeData.company_id).to.equal(2);
      expect(noticeData.status).to.equal('inactive');

      expect(noticeData.departments).to.be.an('array').that.has.lengthOf(2);
      expect(noticeData.departments[0].department_id).to.equal(15);
      expect(noticeData.departments[0].status).to.equal('active');
      expect(noticeData.departments[1].department_id).to.equal(10);
      expect(noticeData.departments[1].status).to.equal('inactive');

      expect(noticeData.read_at).to.be.null;
        });
      });
    });

