/// <reference types="cypress"/>

describe ('Suite de test DemoBlaze', function (){

    it('Aller sur le site', function(){
        cy.visit("https://www.demoblaze.com/")
        cy.get('#signin2').click();
        cy.get('#sign-username').type('lilou');
        cy.get('#sign-password').type('lolita1234');
        cy.get("button[onclick='register()']").click();
        cy.on ('window:alert', (text) => {
        expect(text).contain('This user already exist.');
        })
        cy.on('window:confirm', () => true); 
        cy.get('[class="btn btn-secondary"]').eq(1).click();
    });

    it('se connecter', function(){
        cy.get("#login2").click();
        cy.get("#loginusername").type("lilou");
        cy.get("#loginpassword").type("lolita1234");
        cy.get('[class="btn btn-secondary"]').eq(2).click();
        
    })
    it('Ajouter un element au panier et payer', function(){
        cy.get ('[class="hrefch"]').contains("Samsung galaxy s6").click();
        cy.get('[class="btn btn-success btn-lg"]').click();
        cy.on ('window:alert', (texte) => {
            expect(texte).contain('Product added');
            })
        cy.get('[class="nav-link"]').contains("Cart").click();
        cy.get('[class="success"]').should("contain.text",'Samsung galaxy s6');
        cy.get('[class="btn btn-success"]').contains("Place Order").click();
        cy.get("#name").type("lilou")
        cy.get("#country").type("france")
        cy.get("#city").type("LosAngeles")
        cy.get("#card").type("1234567890")
        cy.get("#month").type("23/04")
        cy.get("#year").type("3333")
        cy.get('[class="btn btn-primary"]').contains("Purchase").click();
        cy.get('[class="sweet-alert  showSweetAlert visible"]').should("contain.text", "Thank you for your purchase!")
        cy.get('[class="sweet-alert  showSweetAlert visible"]').screenshot

    })
})