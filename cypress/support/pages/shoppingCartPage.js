export class ShoppingCartPage {
    constructor(){
        this.showTotalprice = '[class="chakra-button css-15tuzzq"]'
    };

    returnName(producto){
        return cy.get(`[name='${producto}']`);     
    };

    returnPrice(precio) {
        return cy.get(`[name='${precio}']`);
    };

    clickShowTotalPrice() {
        cy.get(this.showTotalprice).click();
    };
    returnPrecioTotal(precio) {
        return cy.get(`[id='${precio}']`);
    };
};

   