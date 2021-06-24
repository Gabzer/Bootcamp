import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

interface ISelectItem {
  id: string;
  title: string;
  value: any;
  list: string[];
  handleChange: any;
}

export default function SelectItem(props: ISelectItem) {
  return (
    <FormControl margin="normal">
      <InputLabel id={props.id}>{props.title}</InputLabel>
      <Select
        id={props.id}
        value={props.value}
        onChange={(evt) => props.handleChange(evt.target.value)}
      >
        {props.list.map((item, i) => (
          <MenuItem key={i + item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
