/// <reference types="Cypress" />

import { candidateId, companyId } from "../../../Constantsfile/constants";

const baseUrl = Cypress.config('baseUrl');

describe("candidate Details ", () => {
  it('should be able to view candidate details', () => {
    cy.fixture('employerToken').then((tokenData) => {
      const employerToken = tokenData.token;
      cy.request({
        method: 'GET',
        url: `${baseUrl}/employer/candidate/get-candidate/${companyId}/${candidateId}`,
        headers: {
          'Authorization': `Bearer ${employerToken}`,
        }
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal("Successfully Fetched.");

        const responseData = response.body.data;

       
        expect(responseData).to.have.property('company_id');
        expect(responseData).to.have.property('candidate_id');
        expect(responseData).to.have.property('name_holder');
        expect(responseData).to.have.property('name');
        expect(responseData).to.have.property('code');
        expect(responseData).to.have.property('designation');
        expect(responseData).to.have.property('phone');
        expect(responseData).to.have.property('email');
        expect(responseData).to.have.property('dob');
        expect(responseData).to.have.property('joining_date');
        expect(responseData).to.have.property('marriage_status');
        expect(responseData).to.have.property('salary_amount');
        expect(responseData).to.have.property('salary_type');
        expect(responseData).to.have.property('probation_period');
        expect(responseData).to.have.property('working_hours');
        expect(responseData).to.have.property('allow_late_attendance');
        expect(responseData).to.have.property('overtime_hrs');
        expect(responseData).to.have.property('allowance_amount');
        expect(responseData).to.have.property('duty_time');
        expect(responseData).to.have.property('office_hour_end');
        expect(responseData).to.have.property('break_duration');
        expect(responseData).to.have.property('casual_leave');
        expect(responseData).to.have.property('sick_leave');
        expect(responseData).to.have.property('allow_network_access');
        expect(responseData.weekly_off?.[0]).to.have.property('id'); 
        expect(responseData.weekly_off?.[0]).to.have.property('business_leave');
        expect(responseData.departments?.[0]).to.have.property('id');
        expect(responseData.departments?.[0]).to.have.property('name');
        expect(responseData).to.have.property('profile_image');
      });
    });
  });
});
