import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

const Stats = () => {
  return (
    <div>
      <div style={{ fontSize: '30px', marginBottom: '20px', textAlign: 'center', color: 'blue' }}>
        Statistics
      </div>
      <div style={{ display: 'flex', gap: '4rem', marginLeft: '4rem' }}>
          <DatePicker label="Uncontrolled picker" defaultValue={dayjs('2024-03-10')} />
          <DatePicker label="Uncontrolled picker" defaultValue={dayjs('2042-04-10')} />
      </div>
    </div>
  );
};

export default Stats;
