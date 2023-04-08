import { Cliente } from "src/app/clientes/cliente";

export class ServicoPrestadoBusca {
    descricao: string | undefined;
    valor: number | undefined;
    data: string | undefined;
    cliente!: Cliente;
}