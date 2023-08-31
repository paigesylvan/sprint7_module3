//import cy from 'cypress'

describe ("React App", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    })

    //Helpers (GETTERS)
    const usernameInput = () => cy.get("input[name=username]");
    const emailInput = () => cy.get("input[name=email]");
    const passwordInput = () => cy.get("input[name=password]");

    it("sanity test to make sure test work", () => {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.equal(5);
        expect({}).not.to.equal({});
    })

    it("the proper elements are showing", () => {
        usernameInput().should("exist");
        emailInput().should("exist");
        passwordInput().should("exist");

        cy.contains("Create a Friend").should("exist")
    })

    describe("filling out the inputs", () => {
        it("can type the name input", () => {
            usernameInput()
            .should("have.value", "")
            .type("PaigeSylvan")
            .should("have.value", "PaigeSylvan");
        })
        it("can type the email input", () => {
            emailInput()
            .should("have.value", "")
            .type("PaigeSylvan@gmail.com")
            .should("have.value", "PaigeSylvan@gmail.com");
        })
        it("can type the password input", () => {
            passwordInput()
            .should("have.value", "")
            .type("Sadie")
            .should("have.value", "Sadie");
        })
    })

    describe("can submit box and from", () => {
        it("can check the tos box", () => {
            cy.get('[type="checkbox"]').check() 
        })
        it("can submit the from data", () => {
            cy.get('form').submit() 
        })
     })


    describe("Check for form validation if an input is left empty", () => {
        it("can cancel form if missing input", () => {
            usernameInput().type("PaigeSylvan");
            emailInput().type("PaigeSylvan@gmail.com");
            passwordInput().type("Sadie")
            
        })
    })


})