import React from "react";

import Box from "@material-ui/core/Box";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import { ICalendar } from "./backend";
import { ICalendarScreenAction } from "./calendarScreenReducer";

interface ICalendarsViewProps {
  calendars: ICalendar[];
  calendarsSelected: boolean[];
  dispatch: React.Dispatch<ICalendarScreenAction>;
}

export const CalendarsView = React.memo(function (props: ICalendarsViewProps) {
  const { calendars, calendarsSelected, dispatch } = props;
  return (
    <Box marginTop="64px">
      <h3>Agendas</h3>
      {calendars.map((calendar, i) => (
        <div key={calendar.id}>
          <FormControlLabel
            control={
              <Checkbox
                style={{ color: calendar.color }}
                checked={calendarsSelected[i]}
                onChange={() => dispatch({ type: "toggleCalendar", payload: i })}
              />
            }
            label={calendar.name}
          />
        </div>
      ))}
    </Box>
  );
});
