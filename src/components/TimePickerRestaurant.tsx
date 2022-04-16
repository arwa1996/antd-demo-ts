import { TimePicker } from "antd";
import moment from "moment";

type TimePickerProps = {
  onClick?: () => void;
  disabled?: boolean;
};

export const TimePickerRestaurant: React.FC<TimePickerProps> = ({
  onClick,
  disabled,
}) => {
  const format = "HH:mm";
  function onChange(time: moment.Moment | null, timeString: string) {
    console.log(time, timeString);
  }
  return (
    <TimePicker
      style={{ width: 300, borderRadius: "40px" }}
      onChange={onChange}
      format={format}
      onClick={onClick}
      disabled={disabled}
    />
  );
};
