import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import { useAuthContext } from "../helpers/authContext";

export default function DespesasHeader() {
  const { user, onSignOut } = useAuthContext();
  return (
    <Box display="flex" alignItems="center" marginBottom="56px">
      <Box flex="1">
        <h1>Despesas</h1>
      </Box>
      <span>Ola {user.nome}</span>
      <Box textAlign="right" margin="16px">
        <Button onClick={onSignOut} type="button" variant="contained">
          Sair
        </Button>
      </Box>
    </Box>
  );
}
