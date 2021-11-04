/*
 Ser autenticavel significa ter o método autenticar

 ducky type = não importa o tipo, mas sim se a classe ou objeto possui determinados métodos 
 */

export class SystemAuthenticate {
  static login(autenticavel, senha) {
    if (SystemAuthenticate.isAuthenticate(autenticavel)) {
      return autenticavel.autenticar(senha);
    }
    return false;
  }

  static isAuthenticate(autenticavel) {
    return (
      "autenticar" in autenticavel &&
      autenticavel.autenticar instanceof Function
    );
  }
}
