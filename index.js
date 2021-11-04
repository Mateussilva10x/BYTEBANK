import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SystemAuthenticate } from "../SystemAuthenticate.js";

const diretor = new Diretor("Mateus", 10000, 12345678900);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Sara", 5000, 12378945601);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Gustavo", 789456412234, "456");
const gerenteEstaLogado = SystemAuthenticate.login(gerente, "123");
const diretorEstaLogado = SystemAuthenticate.login(diretor, "123456");
const clienteEstaLogado = SystemAuthenticate.login(cliente, "456");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);
