export class ShoppingCartPage {
    constructor(){
        this.showTotalPriceButton = '[class="chakra-button css-15tuzzq"]'
        this.precioTotal = '[id="price"]'
    };

    getShoppingCartProduct(producto){
        return cy.get(`[name='${producto}']`);     
    };

    getShoppingCartPrecio(producto){
        return cy.get(`[name='${producto}']`).siblings(`[id="productPrice"]`);
    };

    clickShowTotalPrice(){
        return cy.get(this.showTotalPriceButton).click();
    };

    shoppingCartPrecioTotal(){
        return cy.get(this.precioTotal);
    };
};
    

   