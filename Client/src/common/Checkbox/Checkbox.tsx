import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export type CheckboxProps = {
  defaultChecked?: boolean;
  disabled?: boolean; // make the checkbox disabled or not
  checked?: boolean;
  color?: "secondary" | "success" | "default";
  value: string;
  label: string;
};

const CheckboxComponent = ({
  defaultChecked = false,
  disabled = false,
  color = "secondary",
  checked,
  value,
  label,
}: CheckboxProps) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <FormControlLabel
      value={value}
      label={label}
      control={
        <Checkbox
          defaultChecked={defaultChecked}
          disabled={disabled}
          color={color}
          checked={checked}
        />
      }
    />
  </div>
);

export default CheckboxComponent;