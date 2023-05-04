export class RegisterPage {
    constructor(){
        this.iniciarSesionSpan = '#registertoggle';
    };
    
    clickIniciarSesion(){
        cy.get(this.iniciarSesionSpan).dblclick();
    };
};