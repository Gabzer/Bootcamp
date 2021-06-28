import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { ICategories, IDespesa } from "../services/tipos";

interface IDepesasResumoProps {
  despesas: IDespesa[];
}

export default function DespesasResumo(props: IDepesasResumoProps) {
  const listCategories: ICategories[] = [];
  const allCategories: string[] = [];

  for (const despesa of props.despesas) {
    if (!allCategories.includes(despesa.categoria)) {
      allCategories.push(despesa.categoria);
      listCategories.push({ nome: despesa.categoria, valorTotal: despesa.valor });
    } else {
      for (let i = 0; i < listCategories.length; i++) {
        if (listCategories[i].nome === despesa.categoria) {
          listCategories[i].valorTotal += despesa.valor;
        }
      }
    }
  }

  return (
    <TableContainer component="div">
      <Table aria-label="Despesas do mês">
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Categoria</strong>
            </TableCell>
            <TableCell align="right">
              <strong>Valor (R$)</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listCategories.map((category) => (
            <TableRow key={category.nome}>
              <TableCell>{category.nome}</TableCell>
              <TableCell align="right">{category.valorTotal.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
