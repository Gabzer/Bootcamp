import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { IExpensesResponse } from "../services/Api";

const COLUMNS = ["Despesa", "Categoria", "Dia", "Valor (R$)"];

const useStyles = makeStyles({
  table: {
    minHeight: "100%",
    tableLayout: "fixed",
  },
  dayOfMonth: {
    marginBottom: "4px",
  },
});

interface IExpensesTableProps {
  expenses: IExpensesResponse[];
}

export function ExpensesTable(props: IExpensesTableProps) {
  const { expenses } = props;
  const classes = useStyles();

  return (
    <TableContainer style={{ flex: "1" }} component={"div"}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {COLUMNS.map((column) => (
              <TableCell align="center" key={column}>
                <strong>{column}</strong>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {expenses.map((expense, i) => (
            <TableRow key={`${i}-row-${expense.id}`}>
              <TableCell align="center">
                <div className={classes.dayOfMonth}>{expense.descricao}</div>
              </TableCell>
              <TableCell align="center">
                <div className={classes.dayOfMonth}>{expense.categoria}</div>
              </TableCell>
              <TableCell align="center">
                <div className={classes.dayOfMonth}>{expense.dia}</div>
              </TableCell>
              <TableCell align="center">
                <div className={classes.dayOfMonth}>{expense.valor}</div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
