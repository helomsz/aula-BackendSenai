export interface Livro {
    id: number;
    titulo: string;
    subtitulo: string;
    editora: string;
    isbn: number;
    descricao?: string | null;
    idioma?: string | null;
    ano?: number | null;
    paginas?: number | null;
    preco?: number | null;
    estoque?: number | null;
    desconto?: number | null;
    disponivel: string|null;
    dimensoes?: string | null;
    peso?: number | null;
}
