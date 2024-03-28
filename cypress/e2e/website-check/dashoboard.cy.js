describe("Dashboard UI Tests", () => {
    beforeEach(() => {
      cy.visit("https://your-dashboard-url.com"); // Replace with your dashboard URL
      cy.get("#username").type("your_username"); // Replace with your username field selector
      cy.get("#password").type("your_password"); // Replace with your password field selector
      cy.get("#login-button").click(); // Replace with your login button selector
    });
  
    it("should display user information", () => {
      cy.get(".user-info", { timeout: 10000 }).should("be.visible"); // Replace with user info container selector
      cy.get(".user-info h1").should("contain", "Pooja Upreti"); // Replace with username selector
      cy.get(".user-info .email").should("contain", "poojauprety@gmall.com"); // Replace with email selector
    });
  
    it("should display company information", () => {
      cy.get(".company-info", { timeout: 10000 }).should("be.visible"); // Replace with company info container selector
      cy.get(".company-info h2").should("contain", "31 Companies"); // Replace with company count selector
      cy.get(".company-info .employee-count").should("contain", "0 Employees"); // Replace with employee count selector
    });
  
    it("should navigate to 'My Plans' section", () => {
      cy.get(".navigation a[href='#my-plans']").click(); // Replace with My Plans link selector
      cy.url().should("include", "#my-plans"); // Assert URL contains #my-plans
    });
  
  
  });
  