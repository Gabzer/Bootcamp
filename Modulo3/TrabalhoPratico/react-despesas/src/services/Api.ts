export const MONTHS = [
  "Janeiro",
  "Fevereiro",
  "Marco",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

export const YEARS = ["2020", "2021"];

export interface IExpensesDate {
  year: string;
  month: string;
}

export interface IExpensesRequest {
  date: IExpensesDate;
}

export interface IExpensesResponse {
  id: number;
  descricao: string;
  categoria: string;
  valor: number;
  mes: string;
  dia: string;
}

export function getExpensesEndpoint(request: IExpensesRequest): Promise<IExpensesResponse[]> {
  const monthD = MONTHS.indexOf(request.date.month);
  const dateStr = `${request.date.year}-${(monthD + 1).toString().padStart(2, "0")}`;
  return fetch(`http://localhost:3001/despesas?mes=${dateStr}&_sort=dia`).then(handleResponse);
}

function handleResponse(resp: Response) {
  if (resp.ok) {
    return resp.json();
  } else {
    throw new Error(resp.statusText);
  }
}
