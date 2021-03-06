import React from "react";
import { Link } from "react-router-dom";

import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

import { formatMonth, addMonths } from "./dateFunctions";
import { UserMenu } from "./UserMenu";

interface ICalendarHeaderProps {
  month: string;
}

export const CalendarHeader = React.memo(function (props: ICalendarHeaderProps) {
  const { month } = props;
  return (
    <Box display="flex" alignItems="center" padding="8px 16px">
      <Box>
        <IconButton
          aria-label="Mes anterior"
          component={Link}
          to={`/calendar/` + addMonths(month, -1)}
        >
          <Icon>chevron_left</Icon>
        </IconButton>
        <IconButton
          aria-label="Proximo mes"
          component={Link}
          to={`/calendar/` + addMonths(month, 1)}
        >
          <Icon>chevron_right</Icon>
        </IconButton>
      </Box>
      <Box flex="1" marginLeft="16px" component="h3">
        {formatMonth(month)}
      </Box>

      <UserMenu />
    </Box>
  );
});
