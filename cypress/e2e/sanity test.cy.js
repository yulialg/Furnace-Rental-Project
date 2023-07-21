///<reference types = "Cypress"/>
describe('The consumersenergymanagement main page buttons', () => {
    const home_button = '[id="menu-item-31"]'
    const about_button = '[id="menu-item-36"]'
    const products_button ='[id="menu-item-32"]'
    const services_button ='[id="menu-item-34"]'
    const tools_button ='[id="menu-item-35"]'
    const promotions_button ='[id="menu-item-673"]'
    const careers_button ='[id="menu-item-1589"]'
    const blog_button ='[id="menu-item-1725"]'
    const faqs_button ='[id="menu-item-1727"]'
    const contact_button ='[id="menu-item-1726"]'
    beforeEach(() => {
        cy.visit('https://consumersenergymanagement.ca/')
    })

    it('passes', () => {
        cy.visit('https://consumersenergymanagement.ca/')
    })
    it('verify home tab of the page', () => {
        cy.get(home_button).should("be.visible")
        cy.get(home_button).click()
    })
    it('verify about tab of the page', () => {
        cy.get(about_button).should("be.visible")
        cy.get(about_button).click()
    })
    it('verify products tab of the page', () => {
        cy.get(products_button).should("be.visible")
        cy.get(products_button).click()
    })
    it('verify services tab of the page', () => {
        cy.get(services_button).should("be.visible")
        cy.get(services_button).click()
    })
    it('verify tools tab of the page', () => {
        cy.get(tools_button).should("be.visible")
        cy.get(tools_button).click()
    })
    it('verify promotions tab of the page', () => {
        cy.get(promotions_button).should("be.visible")
        cy.get(promotions_button).click()
    })
    it('verify careers tab of the page', () => {
        cy.get(careers_button).should("be.visible")
        cy.get(careers_button).click()
    })
    it('verify blog tab of the page', () => {
        cy.get(blog_button).should("be.visible")
        cy.get(blog_button).click()
    })
    it('verify faqs tab of the page', () => {
        cy.get(faqs_button).should("be.visible")
        cy.get(faqs_button).click()
    })
    it('verify contact tab of the page', () => {
        cy.get(contact_button).should("be.visible")
        cy.get(contact_button).click()
    })
})