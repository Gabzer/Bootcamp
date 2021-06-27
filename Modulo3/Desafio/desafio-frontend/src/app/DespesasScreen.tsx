import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Box from "@material-ui/core/Box";

import { IDespesa } from "../services/tipos";
import { buscaDespesas, MONTHS, YEARS } from "../services/Api";
import { useAuthContext } from "../helpers/authContext";

import DepesasTable from "./DespesasTable";

function DespesasScreen() {
  const { user } = useAuthContext();
  console.log(user);
  const params = useParams<{ mes: string }>();
  const history = useHistory();
  const anoMes = params.mes;
  const [ano, mes] = anoMes.split("-");
  const [despesas, setDespesas] = useState<IDespesa[]>([]);

  useEffect(() => {
    buscaDespesas(anoMes).then((despesas) => setDespesas(despesas));
  }, [anoMes]);

  let valorTotal = 0;
  for (const despesa of despesas) {
    valorTotal += despesa.valor;
  }

  function mudaAnoMes(ano: string, mes: string) {
    history.push(`/despesas/${ano}-${mes}`);
  }

  return (
    <Box padding="26px">
      <div>
        <h1>Despesas</h1>
        <span>Ola {user.nome}</span>
      </div>
      <Box display="flex" alignItems="center">
        <Box flex="1">
          <Select value={ano} onChange={(e) => mudaAnoMes(e.target.value as string, mes)}>
            {YEARS.map((year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
          <Select value={mes} onChange={(e) => mudaAnoMes(ano, e.target.value as string)}>
            {MONTHS.map((opcaoMes) => (
              <MenuItem key={opcaoMes.valor} value={opcaoMes.valor}>
                {opcaoMes.nome}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <span>
          Despesa total: R$ <strong>{valorTotal.toFixed(2)}</strong>
        </span>
      </Box>

      <DepesasTable despesas={despesas} />
    </Box>
  );
}

export default DespesasScreen;
