export interface Editora {
    id: number;
    editora: string;
    cnpj: number;
    endereco?: string | null;
    telefone?: string | null;
    email?: string | null;
    site?: string | null;
}