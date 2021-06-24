import { useEffect, useState } from "react";

import Box from "@material-ui/core/Box";

import {
  getExpensesEndpoint,
  IExpensesRequest,
  IExpensesResponse,
  MONTHS,
  YEARS,
} from "../services/Api";
import SelectItem from "./SelectItem";
import { ExpensesTable } from "./ExpensesTable";
import { useParams } from "react-router-dom";

export function Expenses() {
  const params = useParams<{ mes: string}>();
  const anoMes = params.mes;
  const [ano, mes] = anoMes.split('-');
  // <##################### UseState ####################> //
  const [expensesRequest, setExpensesRequest] = useState<IExpensesRequest>({
    date: { year: ano, month: mes },
  });
  const [expenses, setExpenses] = useState<IExpensesResponse[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [year, setYear] = useState<string>("2021");
  const [month, setMonth] = useState<string>("Janeiro");
  // <###################################################> //

  // <#################### UseEffect ####################> //
  useEffect(() => {
    Promise.all([getExpensesEndpoint(expensesRequest)]).then(([expensesList]) => {
      setExpenses(expensesList);
    });
  }, [expensesRequest]);
  useEffect(() => {
    let totalExpenses = 0;
    for (const expense of expenses) {
      totalExpenses += expense.valor;
    }
    setTotal(totalExpenses);
  }, [expenses]);
  useEffect(() => {
    console.log(year);
    console.log(month);
    if (year && month) {
      Promise.all([getExpensesEndpoint(expensesRequest)]).then(([expensesList]) => {
        setExpensesRequest({ date: { year, month } });
      });
    }
  }, [year, month]);
  // <###################################################> //

  // <#################### Functions ####################> //
  // function setYear(evt) {}
  // function setMonth(evt) {}
  // <###################################################> //

  return (
    <div>
      <Box display="flex" height="100%" alignItems="stretch">
        <Box width="60%">
          <SelectItem
            value={year}
            id={"select-year"}
            title={"Ano"}
            list={YEARS}
            handleChange={setYear}
          />
          <SelectItem
            value={month}
            id={"select-month"}
            title={"Mes"}
            list={MONTHS}
            handleChange={setMonth}
          />
        </Box>
        <div>
          Despesas total: <strong>R$ {total.toFixed(2)}</strong>
        </div>
      </Box>

      {expenses.length > 0 && <ExpensesTable expenses={expenses} />}
    </div>
  );
}
