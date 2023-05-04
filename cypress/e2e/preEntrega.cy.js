/// <reference types="cypress" />
import { ProductsPage } from "../support/pages/productsPage";
import { HomePage } from "../support/pages/homePage.js";
import { ShoppingCartPage } from "../support/pages/shoppingCartPage";
import { RegisterPage } from "../support/pages/registerPage";
import { LoginPage } from "../support/pages/loginPage";

describe('preEntrega-', () => {
  const productsPage = new ProductsPage();
  const homePage = new HomePage();
  const shoppingCartPage = new ShoppingCartPage();
  const registerPage = new RegisterPage();
  const loginPage = new LoginPage();
  let data

    before(() => {
      cy.fixture('preEntrega').then(dataFixture => {
        data = dataFixture;
      });
    });
  
    it('Verficar nombre y precio de dos productos',() => {
      cy.visit('/')
      registerPage.clickIniciarSesion();
      loginPage.escribirUsuario(data.usuario.usuario);
      loginPage.escribirContraseña(data.usuario.password);
      loginPage.clickLogIn();
      cy.get(homePage.onlineshoplink).click();
      productsPage.agregarProducto(data.primerProducto.nombre);
      productsPage.agregarProducto(data.segundoProducto.nombre);
      cy.get(productsPage.goShoppingCartButton).click();
      shoppingCartPage.returnName(data.primerProducto.nombre).should('have.text',data.primerProducto.nombre);
      shoppingCartPage.returnPrice(data.primerProducto.precio).should('have.text','$' + data.primerProducto.precio);
      shoppingCartPage.returnName(data.segundoProducto.nombre).should('have.text',data.segundoProducto.nombre);
      shoppingCartPage.returnPrice(data.segundoProducto.precio).should('have.text', '$' + data.segundoProducto.precio);
      shoppingCartPage.clickShowTotalPrice();
      shoppingCartPage.returnPrecioTotal().should("have.text", `${data.primerProducto.price + data.segundoProducto.price}`);
    });
  });