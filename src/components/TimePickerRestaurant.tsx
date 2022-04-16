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
      style={{ width: 300 }}
      onChange={onChange}
      defaultValue={moment("00:00", format)}
      format={format}
      onClick={onClick}
      disabled={disabled}
    />
  );
};
