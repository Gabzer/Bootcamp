import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Box from "@material-ui/core/Box";

import { IDespesa } from "../services/tipos";
import { buscaDespesas } from "../services/Api";

import DespesasHeader from "./DespesasHeader";
import DespesasSubHeader from "./DespesasSubHeader";
import DespesasTabs from "./DespesasTabs";

function DespesasScreen() {
  const params = useParams<{ mes: string }>();
  const anoMes = params.mes;
  const [despesas, setDespesas] = useState<IDespesa[]>([]);

  useEffect(() => {
    buscaDespesas(anoMes).then((despesas) => setDespesas(despesas));
  }, [anoMes]);

  return (
    <Box padding="26px">
      <DespesasHeader />

      <DespesasSubHeader despesas={despesas} />

      <DespesasTabs despesas={despesas} />
    </Box>
  );
}

export default DespesasScreen;
