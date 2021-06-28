export interface IDespesa {
  id: number;
  descricao: string;
  categoria: string;
  valor: number;
  mes: string;
  dia: string;
}

export interface IUser {
  nome: string;
  email: string;
}

export interface ICategories {
  nome: string;
  valorTotal: number;
}
