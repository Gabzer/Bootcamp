import { useParams, useHistory } from "react-router-dom";

import Box from "@material-ui/core/Box";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import { MONTHS, YEARS } from "../services/Api";
import { IDespesa } from "../services/tipos";

interface IDepesasSubHeaderProps {
  despesas: IDespesa[];
}

export default function DespesasSubHeader(props: IDepesasSubHeaderProps) {
  const params = useParams<{ mes: string }>();
  const history = useHistory();
  const anoMes = params.mes;
  const [ano, mes] = anoMes.split("-");

  let valorTotal = 0;
  for (const despesa of props.despesas) {
    valorTotal += despesa.valor;
  }

  function mudaAnoMes(ano: string, mes: string) {
    history.push(`/despesas/${ano}-${mes}`);
  }

  return (
    <Box display="flex" alignItems="center" marginBottom="24px">
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
  );
}
