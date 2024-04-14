import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import LineDataset from "../components/Chart.tsx";

const Stats = () => {
  return (
    <div style={{ marginTop: 80 }}>
      <div style={{ display: 'flex', gap: '4rem', marginLeft: '4rem' }}>
          <DatePicker label="Uncontrolled picker" defaultValue={dayjs('2024-03-10')} />
          <DatePicker label="Uncontrolled picker" defaultValue={dayjs('2042-04-10')} />
      </div>

      <LineDataset/>
    </div>
  );
};

export default Stats;
