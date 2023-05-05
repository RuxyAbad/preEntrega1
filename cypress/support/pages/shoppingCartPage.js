export class ShoppingCartPage {
    constructor(){
        this.showTotalprice = '[class="chakra-button css-15tuzzq"]'
    };

    getShoppingCartProduct(producto){
        return cy.get(`[name='${producto}']`);     
    };

    getShoppingCartPrecio(producto) {
        return cy.get(`[name='${producto}']`);
    };

    clickShowTotalPrice() {
        cy.get(this.showTotalprice).click();
    };
    getShoppingCartPrecioTotal(producto) {
        return cy.get(`[name='${producto}']`);
    };
};

   