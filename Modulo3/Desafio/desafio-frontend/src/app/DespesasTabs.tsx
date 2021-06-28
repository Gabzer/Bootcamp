import { useState } from "react";

import Box from "@material-ui/core/Box";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

import { IDespesa } from "../services/tipos";

import DepesasTable from "./DespesasTable";
import DespesasResumo from "./DespesasResumo";

interface IDepesasTabsProps {
  despesas: IDespesa[];
}

export default function DespesasTabs(props: IDepesasTabsProps) {
  const [value, setValue] = useState(0);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  function TabPanel(props: any) {
    const { children, value, index } = props;
    return (
      <div role="tabpanel" hidden={value !== index} id={`despesas-${index}`}>
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <Box border="1px solid rgb(224, 224, 224)">
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Resumo" />
        <Tab label="Detalhes" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <DespesasResumo despesas={props.despesas} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DepesasTable despesas={props.despesas} />
      </TabPanel>
    </Box>
  );
}
