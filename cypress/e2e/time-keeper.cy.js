/// <reference types="Cypress" />


describe('time keeper', () => {
    it('Vists TimeKeeper', () => {
        cy.visit('https://karauctionservices.service-now.com/timekeeper')
        addKCCMigrationTask()
        addKCCEnhancementsTask()
        fillKCCMigrationDays()
        fillKCCEnhacementDays()
    })
})

function addKCCMigrationTask() {
    cy.get('#add-task').contains('Add unassigned tasks to Time Sheet').click()
    cy.get('a').get('.select2-choice').click()
    cy.get('text').get('.select2-input').type('kcc migration from kar to adesa/carvana (OpEx)')
    cy.get('div').contains('PRJ0166216 - KCC Migration from KAR to ADESA/Carvana (OpEx)').click()
    cy.get('button').contains('OK').click()
}

function addKCCEnhancementsTask() {
    cy.get('#add-task').contains('Add unassigned tasks to Time Sheet').click()
    cy.get('a').get('.select2-choice').click()
    cy.get('text').get('.select2-input').type('2022 kcc enhancements (Carvana CapEx)')
    cy.get('div').contains('2022 KCC Enhancements (Carvana CapEx)').click()
    cy.get('button').contains('OK').click()
}

function fillKCCMigrationDays() {
    cy.contains('tr', 'PRJ0166216').dblclick()
        .within(() => {
            cy.get('#monday').type(2)
            cy.get('#tuesday').type(2)
            cy.get('#wednesday').type(2)
            cy.get('#thursday').type(2)
            cy.get('#friday').type(2)
            cy.get('button').get('[aria-label="Save"]').click()
        })
}

function fillKCCEnhacementDays() {
    cy.contains('tr', 'PRJ0166217').dblclick()
        .within(() => {
            cy.get('#monday').type(6)
            cy.get('#tuesday').type(6)
            cy.get('#wednesday').type(6)
            cy.get('#thursday').type(6)
            cy.get('#friday').type(6)
            cy.get('button').get('[aria-label="Save"]').click()
        })
}
