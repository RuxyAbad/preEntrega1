export class ProductsPage{
    constructor(){
        this.closeModal = '#closeModal';
        this.goShoppingCartButton = '#goShoppingCart';
    }

    agregarProducto(producto) {
        cy.get(`[value='${producto}']`).click();
        cy.get(this.closeModal).click();
    };

    agregarPrecio(precio) {
        cy.get(`[id='${precio}']`).click();
    };
};